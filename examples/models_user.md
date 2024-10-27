# User Model Context
**Scope:** @models/user/**
**Type:** Model
**Dependencies:** @utils/validation/**
**Key Interfaces:** IUser, IUserRepository

## Overview
Core user model defining user data structure, validation, and database interactions.

## Design & Implementation
- MongoDB document model
- Mongoose schema implementation
- Field-level encryption for sensitive data
- Soft delete functionality

## Technical Context
- Mongoose for ODM
- MongoDB for storage
- Field-level encryption
- Index optimization

## Domain Rules
- Required fields: email, username, password
- Email must be unique and verified
- Password stored with bcrypt hash
- Profile data sanitization rules

## Known Considerations
- Case-insensitive email/username uniqueness
- Proper index coverage
- Scheduled cleanup of soft-deleted records
- Profile image storage optimization

## Development Guidelines
- Use repository pattern
- Implement data validation
- Handle concurrent updates
- Document schema changes

## Future Considerations
- Schema versioning
- Multi-tenant support
- GDPR compliance features
- Audit logging integration