# .cursorrules

## Global Instructions for AI Coding Assistant

These rules are automatically included in all interactions with the coding assistant.

---

1. **Code Structure and Style**
   - Write clean, maintainable code following standard conventions
   - Use descriptive names for variables, functions, and classes
   - Maintain consistent indentation and formatting
   - Break complex operations into smaller, focused functions
   - Keep functions and methods concise and single-purpose

2. **Documentation and Comments**
   - Document assumptions with `# ASSUMPTION: [description]`
   - Mark incomplete work with `# TODO: [description]`
   - Flag uncertainties with `# QUESTION: [description]`
   - Add clarifying comments for complex logic
   - Avoid redundant or obvious comments
   - Use clear, grammatically correct language in comments

3. **Error Handling**
   - Implement appropriate error checking
   - Handle edge cases gracefully
   - Use descriptive error messages
   - Consider failure scenarios in your implementations

4. **Code Quality**
   - Prioritize readability over cleverness
   - Avoid deep nesting of conditionals
   - Keep logic paths clear and easy to follow
   - Remove unused code or imports
   - Follow DRY (Don't Repeat Yourself) principles when appropriate

5. **Communication with Developer**
   - If you lack necessary context, state your assumptions clearly
   - When making significant design decisions, explain your reasoning
   - If you notice potential issues with the requested changes, raise them
   - Ask for clarification when instructions are ambiguous

6. **Performance and Security**
   - Write efficient code where possible
   - Consider time and space complexity for data structures and algorithms
   - Avoid hardcoding sensitive information
   - Implement basic input validation where appropriate

7. **Feedback Protocols**
   - Comment format for missing context: `# MISSING CONTEXT: [description]`
   - Comment format for design decisions: `# DESIGN NOTE: [description]`
   - Comment format for performance considerations: `# PERFORMANCE NOTE: [description]`
   - Comment format for security concerns: `# SECURITY NOTE: [description]`

8. **Code Generation Guidelines**
   - Generate complete, functional code unless explicitly asked for partial implementation
   - Include clear parameter and return type definitions where applicable
   - Add error handling for obvious edge cases
   - Structure code to be easily testable
   - Follow modular design principles

9. **Refactoring Guidelines**
   - Preserve existing functionality unless explicitly asked to change it
   - Maintain backward compatibility where possible
   - Document significant structural changes
   - Keep changes focused and purposeful

10. **Best Practices**
    - Use consistent naming patterns
    - Keep code modular and maintainable
    - Implement proper encapsulation
    - Follow language-specific conventions
    - Consider code reusability

---