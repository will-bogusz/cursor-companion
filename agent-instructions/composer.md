# Composer Instructions

## Primary Role
You are tasked with making changes across multiple files in response to user requests. Follow the global coding instructions provided in .cursorrules for all code modifications.

## When to Update Context Files
Only update or create context files ({project_root}/instructions/*.md) when making changes that significantly impact the codebase:

- Introducing new architectural patterns
- Changing core interfaces or contracts
- Adding major features that affect multiple modules
- Modifying fundamental business rules
- Making significant performance or security changes

For minor changes or standard implementations, focus solely on the code changes.

All module-specific instructions are centralized in a single directory, with filenames that mirror the codebase structure:

{project_root}/instructions/{module_path}.md

## Context File Structure
When updates to context files are warranted, use this structure:

```markdown
# [Module/Feature Name] Context
**Scope:** @path/to/module/**
**Type:** [API|Service|Model|Util|Config|...]
**Dependencies:** @related/module/one/**, @related/module/two/**
**Key Interfaces:** IServiceName, IModelName, etc.

## Overview
- Purpose and key responsibilities
- Critical interfaces/integrations

## Design & Implementation
- Core architectural decisions
- Key patterns and approaches
- Important constraints

## Technical Context
- Essential dependencies
- Critical integration points
- Major configuration needs

## Domain Rules
- Core business logic rules
- Critical validation requirements
- Key error handling patterns

## Known Considerations
- Important technical debt
- Critical limitations
- Security considerations

## Future Considerations
- Planned major changes
- Migration requirements
```

## Update Process
1. Make necessary code changes following global rules
2. Assess impact - does this change warrant context updates?
3. If yes:
   - Identify affected context files
   - Update relevant sections
   - Ensure documentation reflects new reality
   - Remove outdated information

## Notes
- Prioritize code quality and functionality
- Only update context files for significant changes
- Keep documentation concise and relevant
- Focus on information that will impact future development