# Authentication Service Context
**Scope:** @services/auth/**
**Type:** Service
**Dependencies:** @models/user/**, @utils/encryption/**
**Key Interfaces:** IAuthService, ITokenManager

## Overview
Core authentication service handling user authentication, token management, and session control.

## Design & Implementation
- Stateless JWT-based authentication
- Refresh token rotation
- Role-based access control
- Multi-factor authentication support

## Technical Context
- JWT for access tokens
- Redis for refresh token storage
- bcrypt for password hashing
- Time-based OTP for 2FA

## Domain Rules
- Access tokens expire in 15 minutes
- Refresh tokens valid for 7 days
- Failed login attempts limited to 5
- Password reset links expire in 1 hour

## Known Considerations
- Token blacklisting mechanism
- Concurrent session handling
- Clock skew tolerance: 5 minutes
- Refresh token reuse detection

## Development Guidelines
- Log security-critical operations
- Implement rate limiting
- Handle token revocation
- Document security decisions

## Future Considerations
- OAuth provider implementation
- Hardware token support
- Biometric authentication
- Session analytics