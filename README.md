# E-Commerce Store

A brief description of the project, its purpose, and the main features.

## Table of Contents

- [E-Commerce Store](#e-commerce-store)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [User Experience (UX)](#user-experience-ux)
    - [User Stories](#user-stories)
    - [Design](#design)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Backend Setup](#backend-setup)
  - [Testing](#testing)
  - [Authentication - Access \& Refresh Tokens](#authentication---access--refresh-tokens)
    - [Access Token](#access-token)
    - [Refresh Token](#refresh-token)
    - [Authentication Flow](#authentication-flow)
    - [Upstash Redis Integration](#upstash-redis-integration)
    - [Environment Variables](#environment-variables)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [Content](#content)
    - [Acknowledgements](#acknowledgements)

---

## Project Overview

Provide an overview of the project, including its goals and the problem it solves.

## User Experience (UX)

### User Stories

List the user stories that guided the development of the project.

### Design

- **Wireframes**: Include links or screenshots of wireframes.
- **Color Scheme**: Describe the color scheme used.
- **Typography**: Mention the fonts used.
- **Imagery**: Describe the imagery used.

## Features

Outline the key features of the project, including any future features you plan to implement.

## Technologies Used

List the technologies, frameworks, and tools used in the project.

## Backend Setup

To set up and run the backend, follow these steps:

1. Initialize the project:
   ```bash
   npm init -y
   ```

2. Install the required dependencies:
   ```bash
   npm i express dotenv mongoose jsonwebtoken stripe cloudinary cookie-parser bcryptjs ioredis
   ```

3. Install the development dependency:
   ```bash
   npm i nodemon -D
   ```

4. Set up the database:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     PORT=5000
     MONGO_URI=<your-mongodb-connection-string>
     ```
   - Replace `<your-mongodb-connection-string>` with your actual MongoDB connection string.

5. Start the development server:
   ```bash
   npm run dev
   ```

## Testing

Describe the testing process, including:
- Manual testing
- Automated testing (if applicable)
- Bugs and fixes



## Authentication - Access & Refresh Tokens

The application uses **JWT-based authentication** with access and refresh tokens to ensure secure and efficient user authentication.

### Access Token
- The access token is a short-lived token (15 minutes) used to authenticate API requests.
- It is stored in an HTTP-only cookie to prevent XSS attacks.

### Refresh Token
- The refresh token is a long-lived token (7 days) used to generate new access tokens.
- It is stored in an HTTP-only cookie and managed securely in **Upstash Redis**.
- The refresh token is deleted from Redis upon logout to prevent reuse.

### Authentication Flow
1. **Signup/Login**:
   - Users receive an access token and a refresh token upon successful signup or login.
   - Tokens are set as HTTP-only cookies.

2. **Access Token Expiry**:
   - When the access token expires, the client sends a request to the `/api/auth/refresh-token` endpoint.
   - A new access token is generated if the refresh token is valid.

3. **Logout**:
   - The `/api/auth/logout` endpoint clears both tokens from cookies and deletes the refresh token from Redis.

### Upstash Redis Integration
- The application uses **Upstash Redis** to securely store and manage refresh tokens.
- Visit [Upstash Console](https://console.upstash.com/) to monitor and manage your Redis database.

### Environment Variables
Ensure the following environment variables are set in the `.env` file:
```
ACCESS_TOKEN_SECRET=<your-access-token-secret>
REFRESH_TOKEN_SECRET=<your-refresh-token-secret>
UPSTASH_REDIS_URL=<your-upstash-redis-url>
```

## Deployment

Explain how the project was deployed, including:
- Deployment platform (e.g., GitHub Pages, Heroku, Azure)
- Steps to deploy the project

## Credits

### Content

Mention any sources of content, such as text or images.

### Acknowledgements

Acknowledge any individuals or organizations that helped with the project.