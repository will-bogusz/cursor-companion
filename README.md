# cursor-companion

A framework for structuring and optimizing AI-assisted development with Cursor IDE. Provides a standardized approach for managing LLM coding assistant interactions through organized instruction sets and global rules.

## Overview

This framework helps developers effectively communicate with Cursor's AI coding assistant by:
- Maintaining global coding standards via `.cursorrules`
- Organizing context-specific instructions that mirror your codebase structure
- Enabling precise, location-aware AI assistance

## Core Concepts

### Global Rules (`.cursorrules`)
Located at the root of your project, this file defines project-wide standards and practices. It's automatically included in every interaction with the AI assistant.

### Instruction Files
All module-specific instructions are centralized in a single directory, with filenames that mirror your codebase structure:

```
your-project/
├── .cursorrules
└── .cursor/
    └── instructions/
        ├── core_api.md              # @core/api/**
        ├── core_models_user.md      # @core/models/user/**
        ├── core_models_order.md     # @core/models/order/**
        ├── services_payment.md      # @services/payment/**
        └── utils_validation.md      # @utils/validation/**
```

## Setup

1. Create `.cursorrules` in your project root
2. Create `.cursor/instructions/` directory
3. Add instruction files following the naming pattern: `{path_to_code_separated_by_underscore}.md`

## Usage with Cursor IDE

When working with the AI assistant:
1. Select code and press `Ctrl+K`
2. Reference relevant instruction files using `@`:
   ```
   @core_api.md Please update this endpoint to include pagination
   ```

## Best Practices

### File Naming
- Name instruction files to mirror your codebase structure
- Use underscores to separate directory levels
- Keep names descriptive but concise

Example:
```
Codebase Location     -> Instruction Filename
src/core/api/         -> core_api.md
src/services/auth/    -> services_auth.md
src/utils/formatting/ -> utils_formatting.md
```

### File Organization
- Keep one instruction file per major module/functionality
- Begin each file with its scope:
  ```markdown
  # Core API Instructions
  **Applies to:** @core/api/**
  ```

### Using Instructions
- Include relevant instruction files when making module-specific changes
- Multiple instructions can be referenced in a single command:
  ```
  @core_api.md @utils_validation.md Please update the validation logic
  ```

## Implementation Guide

1. **Initial Setup**
   ```bash
   mkdir -p .cursor/instructions
   touch .cursorrules
   ```

2. **Create Instruction Files**
   - Name files based on their corresponding code location
   - Include scope and purpose at the top of each file
   - Add specific guidelines, patterns, and requirements

3. **Maintain and Update**
   - Keep instructions current with codebase changes
   - Update paths if code structure changes
   - Regularly review and refine guidelines

## Directory Structure

```
your-project/
├── .cursorrules                       # Global rules
├── .cursor/
│   └── instructions/                  # Centralized instructions
│       └── {module_path}.md          # Module-specific guidelines
├── src/
│   ├── core/
│   │   ├── api/
│   │   └── models/
│   └── services/
└── ...
```

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to discuss potential improvements.

## License

[MIT License](LICENSE)
