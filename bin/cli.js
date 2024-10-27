#!/usr/bin/env node
// bin/cli.js

import fs from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function isExistingProject(directory) {
  try {
    const hasPackageJson = await fs.pathExists(path.join(directory, 'package.json'));
    const hasGit = await fs.pathExists(path.join(directory, '.git'));
    const hasSrcOrLib = await fs.pathExists(path.join(directory, 'src')) || 
                        await fs.pathExists(path.join(directory, 'lib'));
    
    return hasPackageJson || hasGit || hasSrcOrLib;
  } catch (error) {
    return false;
  }
}

async function setupCursorCompanion(projectPath) {
  // Create instructions directory
  await fs.ensureDir(path.join(projectPath, '.cursor'));
  await fs.ensureDir(path.join(projectPath, '.cursor', 'instructions'));

  // Copy global rules to .cursorrules
  const globalRulesContent = await fs.readFile(
    path.join(__dirname, '../agent-instructions/global_rules.md'),
    'utf8'
  );
  // Extract the content without the header (first 6 lines)
  const rulesContent = globalRulesContent.split('\n').slice(6).join('\n');
  await fs.writeFile(path.join(projectPath, '.cursorrules'), rulesContent);

  // Copy composer.md to instructions directory
  await fs.copy(
    path.join(__dirname, '../agent-instructions/composer.md'),
    path.join(projectPath, 'instructions/composer.md')
  );

  // Copy README from agent-instructions
  await fs.copy(
    path.join(__dirname, '../agent-instructions/README.md'),
    path.join(projectPath, 'instructions/README.md')
  );

  // Add to .gitignore
  const gitignorePath = path.join(projectPath, '.gitignore');
  try {
    let gitignoreContent = await fs.readFile(gitignorePath, 'utf8');
    if (!gitignoreContent.includes('.cursor')) {
      gitignoreContent += '\n# Cursor Companion\n.cursor\n.cursorrules\n';
      await fs.writeFile(gitignorePath, gitignoreContent);
    }
  } catch (error) {
    // If .gitignore doesn't exist, create it
    await fs.writeFile(gitignorePath, '# Cursor Companion\n.cursor\n.cursorrules\n');
  }
}

async function initNewProject() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project name?',
      validate: input => {
        if (/^([a-z]|-|\d)+$/.test(input)) return true;
        return 'Project name may only include lowercase letters, numbers, and dashes';
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Brief project description (optional):',
    },
    {
      type: 'confirm',
      name: 'initGit',
      message: 'Initialize git repository?',
      default: true
    }
  ]);

  const projectPath = path.join(process.cwd(), answers.projectName);
  
  console.log(chalk.blue('\nCreating new project...'));
  
  // Create project directory
  await fs.ensureDir(projectPath);
  
  // Initialize git if requested
  if (answers.initGit) {
    const { execa } = await import('execa');
    await execa('git', ['init'], { cwd: projectPath });
  }

  // Setup cursor companion
  await setupCursorCompanion(projectPath);
  
  // Create package.json
  await fs.writeJSON(path.join(projectPath, 'package.json'), {
    name: answers.projectName,
    version: '0.0.1',
    description: answers.description || '',
    private: true
  }, { spaces: 2 });

  console.log(chalk.green('\nProject created successfully!'));
  console.log(chalk.blue(`\nNext steps:`));
  console.log(`  cd ${answers.projectName}`);
  console.log('  Create your first instruction file in .cursor/instructions/');
}

async function initExistingProject() {
  const confirm = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'proceed',
      message: chalk.yellow('This will add Cursor Companion files (.cursorrules and .cursor/) to your project. Continue?'),
      default: true
    }
  ]);

  if (!confirm.proceed) {
    console.log(chalk.yellow('Operation cancelled'));
    process.exit(0);
  }

  console.log(chalk.blue('\nAdding Cursor Companion to existing project...'));
  await setupCursorCompanion(process.cwd());
  console.log(chalk.green('\nCursor Companion added successfully!'));
  console.log(chalk.blue('\nNext step:'));
  console.log('  Create your first instruction file in .cursor/instructions/');
}

async function main() {
  try {
    const newProjectFlag = process.argv.includes('--new');
    
    if (newProjectFlag) {
      await initNewProject();
      return;
    }

    const isExisting = await isExistingProject(process.cwd());
    
    if (isExisting) {
      await initExistingProject();
    } else {
      console.log(chalk.yellow('No existing project detected.'));
      console.log('To create a new project, use: npx create-cursor-companion --new');
      console.log('To add to current directory anyway, use: npx create-cursor-companion --force');
      process.exit(1);
    }
  } catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
  }
}

main();
