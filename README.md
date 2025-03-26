# cursor-companion

A framework for structuring AI-assisted development with Cursor IDE. Provides standardized scaffolding and guidelines for managing LLM coding assistant interactions.

**Note:** Cursor IDE now officially includes functionality similar to Cursor Companion through project and IDE level instruction files. While this repository provides alternative structures and additional customization options, consider exploring Cursor IDE's built-in features for a more native integration.

## Overview

Cursor Companion helps developers effectively communicate with Cursor's AI coding assistant by providing:

- Global coding standards via `.cursorrules`
- Framework for maintaining module/feature-specific context
- Guidelines for AI-assisted code changes 
- Structure for documenting design decisions and technical context

## Installation

Create a new project:
```bash
npx create-cursor-companion --new
```

Add to existing project:
```bash
# Run from project root
npx create-cursor-companion
```

## Project Structure

After initialization, your project will have:

```
your-project/
├── .cursorrules                 # Global rules for the AI assistant
└── instructions/                # Module-specific context files
      └── composer.md              # Instructions for the composer specifically
      └── README.md                # Guide for creating context files 
```

## Using with Cursor IDE

### Single-File Changes
1. Select code and press `Ctrl+K`
2. Reference relevant context files using `@`:
```
@services_auth.md Update the token validation logic
```

### Multi-File Changes
When making broader changes, include multiple context files. The composer will use the instructions in `composer.md` to guide the update process:
```
@composer.md @services_auth.md @models_user.md Add support for OAuth provider
```

## Context Files

Create context files in `/instructions/` with names that mirror your codebase structure:

```
project/
├── src/
│   ├── services/
│   │   └── auth/          # @services_auth.md
│   ├── models/
│   │   └── user/          # @models_user.md
│   └── api/
│       └── users/         # @api_users.md
└── instructions/
        ├── services_auth.md      # Instructions for @services/auth/**
        ├── models_user.md        # Instructions for @models/user/**
        └── api_users.md          # Instructions for @api/users/**
```

The filename should reflect the path where the instructions apply, using underscores to separate directory levels:
- `path/to/module/**` → `path_to_module.md`

Each file should include:
- Clear scope definition (`@path/to/module/**`)
- Module/feature purpose
- Design decisions
- Technical constraints
- Integration points
- Domain rules

See the [examples](/examples) directory for sample context files.

## Best Practices

- Name context files to mirror your codebase structure
- Keep context files focused on their specific scope
- Update context when making significant changes
- Include only information that impacts development
- Reference related files when needed

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to discuss potential improvements.

## License

[MIT License](LICENSE)
