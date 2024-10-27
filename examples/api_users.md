# Users API Context
**Scope:** @api/users/**
**Type:** API
**Dependencies:** @services/auth/**, @models/user/**
**Key Interfaces:** IUserController, IUserDTO

## Overview
REST API endpoints for user management operations including registration, profile management, and user data retrieval.

## Design & Implementation
- RESTful architecture following resource-based routing
- JWT authentication for protected endpoints
- Rate limiting on public endpoints
- Response pagination for list operations

## Technical Context
- Express.js router implementation
- MongoDB for user data storage
- Redis for rate limiting and caching
- AWS S3 for profile image storage

## Domain Rules
- Usernames must be unique and 3-20 characters
- Passwords must meet security requirements
- Email verification required for new accounts
- Rate limit: 100 requests per hour per IP

## Known Considerations
- Profile image upload limited to 5MB
- Email change requires re-verification
- Soft delete implementation for user accounts
- Cache invalidation on profile updates

## Development Guidelines
- Validate request bodies using Joi schemas
- Log all authentication failures
- Include rate limit headers in responses
- Document all responses in OpenAPI format

## Future Considerations
- GraphQL endpoint implementation planned
- OAuth provider integration roadmap
- Enhanced rate limiting by user role
- Audit logging implementation