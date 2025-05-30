# E-Commerce Store

A brief description of the project, its purpose, and the main features.

## Table of Contents

- [E-Commerce Store](#e-commerce-store)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
    - [Goals:](#goals)
    - [Problems Solved:](#problems-solved)
  - [User Experience (UX)](#user-experience-ux)
  - [**Live Demo**: https://react-ecommerce-store.onrender.com/](#live-demo-httpsreact-ecommerce-storeonrendercom)
  - [Responsive Design](#responsive-design)
    - [User Stories](#user-stories)
    - [Design](#design)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Backend Setup](#backend-setup)
  - [Testing](#testing)
    - [Manual Testing](#manual-testing)
  - [Authentication - Access \& Refresh Tokens](#authentication---access--refresh-tokens)
    - [Access Token](#access-token)
    - [Refresh Token](#refresh-token)
    - [Authentication Flow](#authentication-flow)
    - [Upstash Redis Integration](#upstash-redis-integration)
    - [Environment Variables](#environment-variables)
  - [Product Routes](#product-routes)
    - [Routes](#routes)
    - [Environment Variables](#environment-variables-1)
  - [Cart Routes](#cart-routes)
    - [Routes](#routes-1)
    - [Environment Variables](#environment-variables-2)
  - [Coupon Routes](#coupon-routes)
    - [Routes](#routes-2)
    - [Environment Variables](#environment-variables-3)
  - [Payment Routes](#payment-routes)
    - [Routes](#routes-3)
    - [Stripe Integration](#stripe-integration)
    - [Environment Variables](#environment-variables-4)
  - [Analytics Routes](#analytics-routes)
    - [Routes](#routes-4)
    - [Environment Variables](#environment-variables-5)
  - [Backend Completion Status](#backend-completion-status)
  - [Frontend Setup with React](#frontend-setup-with-react)
    - [Steps to Set Up the Frontend](#steps-to-set-up-the-frontend)
    - [Additional Notes](#additional-notes)
  - [Signup Page UI Design](#signup-page-ui-design)
    - [Features](#features-1)
    - [Styling](#styling)
    - [Notifications](#notifications)
  - [Login Page UI Design](#login-page-ui-design)
    - [Features](#features-2)
    - [Styling](#styling-1)
    - [Notifications](#notifications-1)
  - [Home Page UI Design](#home-page-ui-design)
    - [Features](#features-3)
    - [Styling](#styling-2)
    - [Animations](#animations)
    - [API Integration](#api-integration)
  - [Authentication Implementation](#authentication-implementation)
    - [Features](#features-4)
    - [Backend Implementation](#backend-implementation)
    - [Frontend Integration](#frontend-integration)
  - [Admin Dashboard](#admin-dashboard)
    - [Features](#features-5)
    - [Styling and Animations](#styling-and-animations)
    - [API Integration](#api-integration-1)
    - [Access Control](#access-control)
  - [Category Page](#category-page)
    - [Features](#features-6)
    - [Styling and Animations](#styling-and-animations-1)
    - [API Integration](#api-integration-2)
  - [Cart Store](#cart-store)
    - [Features](#features-7)
    - [API Integration](#api-integration-3)
  - [Deployment](#deployment)
    - [How to Deploy on Render.com](#how-to-deploy-on-rendercom)
  - [Credits](#credits)
    - [Code](#code)
    - [Content](#content)
    - [Acknowledgments](#acknowledgments)

---

## Project Overview

The E-Commerce Store is a full-stack web application designed to provide a seamless online shopping experience. It allows users to browse products, add items to their cart, apply discount coupons, and securely complete purchases using Stripe. The project also includes an admin dashboard for managing products, viewing analytics, and monitoring sales.

### Goals:
- Deliver a responsive and user-friendly interface for customers.
- Provide secure authentication and authorization using JWT-based access and refresh tokens.
- Enable efficient product management and analytics for administrators.
- Integrate modern technologies like React, TailwindCSS, and Stripe for a robust and scalable solution.

### Problems Solved:
- Simplifies online shopping with features like cart management, coupon application, and product recommendations.
- Enhances security with token-based authentication and secure payment processing.
- Improves performance with caching (Upstash Redis) and optimized API endpoints.
- Provides actionable insights for administrators through analytics and sales data visualization.

## User Experience (UX)

## **Live Demo**: [https://react-ecommerce-store.onrender.com/](https://react-ecommerce-store.onrender.com/)

## Responsive Design

![Responsive Design](frontend/public/amiresponsive.png)

### User Stories

The following user stories guided the development of the E-Commerce Store:

1. **As a customer**, I want to browse products by category so that I can easily find what I am looking for.
2. **As a customer**, I want to add products to my cart and update quantities so that I can manage my purchases.
3. **As a customer**, I want to apply discount coupons so that I can save money on my purchases.
4. **As a customer**, I want to securely complete my purchase using a reliable payment system.
5. **As a customer**, I want to view recommended products so that I can discover new items.
6. **As an admin**, I want to manage products (add, update, delete) so that I can keep the inventory up to date.
7. **As an admin**, I want to view analytics (sales, revenue, users) so that I can monitor the store's performance.
8. **As a user**, I want to sign up and log in securely so that I can access my account and purchase history.
9. **As a user**, I want to receive error messages for invalid inputs so that I can correct my actions.
10. **As a user**, I want the application to work seamlessly on all devices so that I can shop from anywhere.

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

### Manual Testing

| Feature                          | Test Case                                                                                     | Expected Result                                                                                     | Status  |
|----------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|---------|
| **Authentication**               | User signs up with valid credentials                                                         | User account is created, and tokens are issued                                                     | ✅ Passed |
|                                  | User logs in with valid credentials                                                          | User is authenticated, and tokens are issued                                                       | ✅ Passed |
|                                  | User logs out                                                                                 | Tokens are cleared, and session is invalidated                                                     | ✅ Passed |
|                                  | Access token expires, and refresh token is used                                               | New access token is issued                                                                          | ✅ Passed |
| **Products**                     | Admin creates a new product                                                                  | Product is added to the database and displayed in the product list                                  | ✅ Passed |
|                                  | Admin toggles the "Featured" status of a product                                             | Product's "Featured" status is updated                                                             | ✅ Passed |
|                                  | Admin deletes a product                                                                      | Product is removed from the database                                                               | ✅ Passed |
|                                  | User fetches products by category                                                            | Products filtered by category are displayed                                                        | ✅ Passed |
| **Cart**                         | User adds a product to the cart                                                              | Product is added to the cart, and quantity is updated if it already exists                         | ✅ Passed |
|                                  | User updates the quantity of a product in the cart                                           | Product quantity is updated                                                                        | ✅ Passed |
|                                  | User removes a product from the cart                                                         | Product is removed from the cart                                                                   | ✅ Passed |
|                                  | User applies a valid coupon                                                                  | Discount is applied, and total price is updated                                                    | ✅ Passed |
|                                  | User applies an invalid coupon                                                               | Error message is displayed                                                                         | ✅ Passed |
| **Payments**                     | User initiates a checkout session                                                            | Stripe checkout session is created                                                                 | ✅ Passed |
|                                  | User completes payment successfully                                                          | Order is created, and cart is cleared                                                              | ✅ Passed |
|                                  | User cancels payment                                                                         | Cart remains unchanged, and cancellation message is displayed                                      | ✅ Passed |
| **Analytics**                    | Admin views analytics dashboard                                                              | Metrics (e.g., total users, sales, revenue) and daily trends are displayed                         | ✅ Passed |
| **Responsive Design**            | Application is accessed on different screen sizes                                            | Layout adjusts appropriately for mobile, tablet, and desktop views                                 | ✅ Passed |
| **Error Handling**               | User accesses a protected route without authentication                                       | User is redirected to the login page                                                               | ✅ Passed |
|                                  | User provides invalid input (e.g., empty fields)                                             | Error messages are displayed                                                                       | ✅ Passed |



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

## Product Routes

The application provides a set of routes to manage products, including fetching, creating, updating, and deleting products. It integrates with **Upstash Redis** for caching and **Cloudinary** for image storage.

### Routes
1. **Get All Products**  
   `GET /api/products`  
   - Protected route (Admin only).  
   - Fetches all products from the database.

2. **Get Featured Products**  
   `GET /api/products/featured`  
   - Fetches featured products.  
   - Uses **Upstash Redis** to cache featured products for faster access.  
   - Visit [Upstash Console](https://console.upstash.com/redis?teamid=0) to monitor and manage the Redis cache.

3. **Get Products by Category**  
   `GET /api/products/category/:category`  
   - Fetches products filtered by category.

4. **Get Recommended Products**  
   `GET /api/products/recommendations`  
   - Fetches a random selection of 3 products for recommendations.

5. **Create a Product**  
   `POST /api/products`  
   - Protected route (Admin only).  
   - Creates a new product.  
   - Uploads product images to **Cloudinary**.  
   - Visit [Cloudinary Console](https://console.cloudinary.com/) to manage uploaded images.

6. **Toggle Featured Product**  
   `PATCH /api/products/:id`  
   - Protected route (Admin only).  
   - Toggles the `isFeatured` status of a product.  
   - Updates the featured products cache in **Upstash Redis**.

7. **Delete a Product**  
   `DELETE /api/products/:id`  
   - Protected route (Admin only).  
   - Deletes a product from the database.  
   - Removes the associated image from **Cloudinary**.

### Environment Variables
Ensure the following environment variables are set in the `.env` file:
```
UPSTASH_REDIS_URL=<your-upstash-redis-url>
CLOUDINARY_CLOUD_NAME=<cloudinary-cloud-name>
CLOUDINARY_API_KEY=<cloudinary-api-key>
CLOUDINARY_API_SECRET=<cloudinary-api-secret>
```

## Cart Routes

The application provides a set of routes to manage the shopping cart, allowing users to add, update, and remove products from their cart.

### Routes
1. **Get Cart Products**  
   `GET /api/cart`  
   - Protected route.  
   - Fetches all products in the user's cart, including their quantities.

2. **Add to Cart**  
   `POST /api/cart`  
   - Protected route.  
   - Adds a product to the user's cart.  
   - If the product already exists in the cart, its quantity is incremented.

3. **Remove All from Cart**  
   `DELETE /api/cart`  
   - Protected route.  
   - Removes all products from the user's cart.  
   - If a `productId` is provided in the request body, only that product is removed.

4. **Update Quantity**  
   `PUT /api/cart/:id`  
   - Protected route.  
   - Updates the quantity of a specific product in the user's cart.  
   - If the quantity is set to `0`, the product is removed from the cart.

### Environment Variables
Ensure the following environment variables are set in the `.env` file:
```
MONGO_URI=<mongodb-connection-string>
ACCESS_TOKEN_SECRET=<access-token-secret>
```

## Coupon Routes

The application provides a set of routes to manage coupons, allowing users to retrieve and validate discount codes.

### Routes
1. **Get Active Coupon**  
   `GET /api/coupons`  
   - Protected route.  
   - Fetches the active coupon for the logged-in user.

2. **Validate Coupon**  
   `GET /api/coupons/validate?code=<coupon-code>`  
   - Protected route.  
   - Validates the provided coupon code for the logged-in user.  
   - Checks if the coupon is active and not expired.

### Environment Variables
Ensure the following environment variables are set in the `.env` file:
```
MONGO_URI=<mongodb-connection-string>
ACCESS_TOKEN_SECRET=<access-token-secret>
```

## Payment Routes

The application provides a set of routes to handle payments using **Stripe**. It supports creating checkout sessions and processing successful payments.

### Routes
1. **Create Checkout Session**  
   `POST /api/payments/checkout-session`  
   - Protected route.  
   - Creates a Stripe checkout session for the provided products.  
   - Optionally applies a coupon code for discounts.  
   - If the total amount exceeds €200, a new coupon is generated for the user.

2. **Checkout Success**  
   `POST /api/payments/checkout-success`  
   - Protected route.  
   - Processes a successful payment.  
   - Deactivates the used coupon (if any).  
   - Creates a new order in the database.

### Stripe Integration
- The application uses **Stripe** for payment processing.  
- Visit [Stripe Dashboard](https://dashboard.stripe.com/test/dashboard) to monitor and manage payments.

### Environment Variables
Ensure the following environment variables are set in the `.env` file:
```
STRIPE_SECRET_KEY=<your-stripe-secret-key>
CLIENT_URL=<your-client-url>
```

## Analytics Routes

The application provides analytics routes to retrieve key metrics and sales data for the admin dashboard.

### Routes
1. **Get Analytics Data**  
   `GET /api/analytics`  
   - Protected route (Admin only).  
   - Returns the following metrics:
     - Total users
     - Total products
     - Total sales
     - Total revenue
   - Also includes daily sales and revenue data for the last 7 days.

### Environment Variables
Ensure the following environment variables are set in the `.env` file:
```
MONGO_URI=<mongodb-connection-string>
ACCESS_TOKEN_SECRET=<access-token-secret>
```

## Backend Completion Status

The backend for the E-Commerce Store is fully implemented and tested using **Postman**. All endpoints have been verified for functionality, including:
- **Authentication**: Signup, login, logout, token refresh, and profile retrieval.
- **Products**: CRUD operations, featured products, recommendations, and category filtering.
- **Cart**: Add, update, and remove products from the cart.
- **Coupons**: Retrieve and validate discount codes.
- **Payments**: Stripe integration for checkout sessions and payment success handling.
- **Analytics**: Admin dashboard metrics and daily sales data.

The backend is ready for deployment and integration with the frontend.

## Frontend Setup with React

The frontend of the E-Commerce Store is built using **React** and **Vite** for a fast and modern development experience. It also integrates **TailwindCSS** for styling.

### Steps to Set Up the Frontend

1. **Install Dependencies**  
   Run the following command to install the required dependencies:
   ```bash
   npm i axios @stripe/stripe-js framer-motion lucide-react react-confetti react-hot-toast react-router-dom recharts zustand
   ```

2. **Create a Vite Project**  
   Initialize a new Vite project in the `frontend` directory:
   ```bash
   npm create vite@latest .
   ```
   - Select `React` as the framework.
   - Select `JavaScript` as the variant.

3. **Install TailwindCSS**  
   Follow the official guide to set up TailwindCSS with Vite:
   ```bash
   npm install -D tailwindcss@3 postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Configure TailwindCSS**  
   Update the `tailwind.config.js` file to include the paths to your template files:
   ```javascript
   // filepath: c:\Users\Sergiy\Desktop\Completed-Projects\e-commerce-store\frontend\tailwind.config.js
   module.exports = {
       content: [
           "./index.html",
           "./src/**/*.{js,ts,jsx,tsx}",
       ],
       theme: {
           extend: {},
       },
       plugins: [],
   };
   ```

5. **Add Tailwind Directives**  
   Add the TailwindCSS directives to your `index.css` file:
   ```css
   /* filepath: c:\Users\Sergiy\Desktop\Completed-Projects\e-commerce-store\frontend\src\index.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. **Start the Development Server**  
   Run the following commands to start the development server:
   ```bash
   npm install
   npm run dev
   ```

### Additional Notes
- The frontend integrates **Stripe** for payment processing, **React Router** for navigation, and **Recharts** for analytics visualization.
- Visit the [TailwindCSS Guide](https://v3.tailwindcss.com/docs/guides/vite) for more details on using TailwindCSS with Vite.

## Signup Page UI Design

The Signup Page allows users to create an account by providing their name, email, and password. It is designed with a clean and responsive layout using **React**, **TailwindCSS**, and **React Hot Toast** for notifications.

### Features
- **Input Fields**: Name, Email, and Password fields with validation.
- **Submit Button**: A button to submit the signup form.
- **Error Handling**: Displays error messages for invalid inputs or server errors.
- **Success Notification**: Shows a success toast upon successful signup.

### Styling
The page uses **TailwindCSS** for styling, ensuring a responsive and modern design.

### Notifications
- **React Hot Toast** is used to display success and error messages.

## Login Page UI Design

The Login Page allows users to log in to their accounts by providing their email and password. It is designed with a clean and responsive layout using **React**, **TailwindCSS**, and **React Hot Toast** for notifications.

### Features
- **Input Fields**: Email and Password fields with validation.
- **Submit Button**: A button to submit the login form.
- **Error Handling**: Displays error messages for invalid inputs or server errors.
- **Success Notification**: Shows a success toast upon successful login.

### Styling
The page uses **TailwindCSS** for styling, ensuring a responsive and modern design.

### Notifications
- **React Hot Toast** is used to display success and error messages.

## Home Page UI Design

The Home Page serves as the main entry point for users, showcasing featured products, categories, and recommendations. It is designed with a clean and responsive layout using **React**, **TailwindCSS**, and **Framer Motion** for animations.

### Features
1. **Navbar**: Includes navigation links to different sections of the application (e.g., Home, Products, Cart, Login).
2. **Hero Section**: A visually appealing banner with a call-to-action button.
3. **Featured Products**: Displays a list of featured products fetched from the backend.
4. **Categories**: Showcases product categories for easy navigation.
5. **Recommendations**: Displays a random selection of recommended products.
6. **Loading Spinner**: A spinner is displayed while data is being fetched.

### Styling
The page uses **TailwindCSS** for styling, ensuring a responsive and modern design.

### Animations
- **Framer Motion** can be integrated for smooth animations on product cards and sections.

### API Integration
- The page fetches data from the backend using **Axios**.
- Endpoints used:
  - `/api/products/featured`
  - `/api/products/categories`
  - `/api/products/recommendations`

---

## Authentication Implementation

The authentication system is implemented using **JWT-based authentication** with access and refresh tokens. It ensures secure and efficient user authentication.

### Features
1. **Signup**: Allows users to create an account.
2. **Login**: Authenticates users and issues tokens.
3. **Logout**: Clears tokens from cookies and invalidates the refresh token.
4. **Token Refresh**: Automatically refreshes the access token when it expires.
5. **Profile Retrieval**: Fetches the authenticated user's profile.

### Backend Implementation
- **Access Token**: A short-lived token (15 minutes) stored in an HTTP-only cookie.
- **Refresh Token**: A long-lived token (7 days) stored in an HTTP-only cookie and managed in **Upstash Redis**.
- **Middleware**: Protects routes and verifies user roles (e.g., admin).

### Frontend Integration
- **State Management**: Uses **Zustand** to manage user state and authentication logic.
- **Axios Interceptors**: Handles automatic token refresh for API requests.
- **Protected Routes**: Ensures only authenticated users can access certain pages.

## Admin Dashboard

The Admin Dashboard provides tools for managing the e-commerce store, including product management, analytics, and more. It is accessible only to users with the "admin" role.

### Features
1. **Create Product**:  
   - Allows admins to create new products by providing details such as name, description, price, category, and an image.
   - Image uploads are supported via a file input.

2. **Manage Products**:  
   - Displays a list of all products with options to:
     - Delete products.
     - Toggle the "Featured" status of products.

3. **View Analytics**:  
   - Provides key metrics and insights, such as total users, total sales, and revenue trends.

### Styling and Animations
- The dashboard is styled using **TailwindCSS** for a modern and responsive design.
- **Framer Motion** is used for smooth animations and transitions.

### API Integration
- The Admin Dashboard interacts with the backend using the following endpoints:
  - `POST /api/products`: Create a new product.
  - `GET /api/products`: Fetch all products.
  - `PATCH /api/products/:id`: Toggle the "Featured" status of a product.
  - `DELETE /api/products/:id`: Delete a product.
  - `GET /api/analytics`: Fetch analytics data.

### Access Control
- The dashboard is protected and accessible only to authenticated users with the "admin" role. Unauthorized users are redirected to the login page.

## Category Page

The Category Page displays products filtered by their category. It provides users with an easy way to browse products within a specific category.

### Features
1. **Dynamic Category Display**:  
   - The page dynamically updates based on the selected category from the URL parameter.
   - The category name is displayed as the page title.

2. **Product Grid**:  
   - Products are displayed in a responsive grid layout.
   - Each product is shown using the `ProductCard` component, which includes the product's image, name, price, and an "Add to Cart" button.

3. **No Products Found Message**:  
   - If no products are available in the selected category, a message is displayed to inform the user.

### Styling and Animations
- The page is styled using **TailwindCSS** for a modern and responsive design.
- **Framer Motion** is used for smooth animations when the page loads and when products are displayed.

### API Integration
- The Category Page fetches products from the backend using the following endpoint:
  - `GET /api/products/category/:category`: Retrieves products filtered by the specified category.


## Cart Store

The Cart Store is implemented using **Zustand** for state management. It handles all cart-related operations, including adding, removing, and updating products in the cart, as well as applying coupons.

### Features
1. **Add to Cart**:  
   - Adds a product to the cart.  
   - If the product already exists, its quantity is incremented.

2. **Remove from Cart**:  
   - Removes a specific product from the cart.

3. **Update Quantity**:  
   - Updates the quantity of a specific product in the cart.  
   - If the quantity is set to `0`, the product is removed.

4. **Apply Coupon**:  
   - Validates and applies a discount coupon to the cart.  
   - Automatically recalculates the total price after applying the coupon.

5. **Remove Coupon**:  
   - Removes the applied coupon and recalculates the total price.

6. **Calculate Totals**:  
   - Calculates the subtotal and total price of the cart, including discounts from coupons.

7. **Fetch Cart Items**:  
   - Retrieves the current cart items from the backend.

8. **Clear Cart**:  
   - Clears all items from the cart.

### API Integration
- The Cart Store interacts with the backend using the following endpoints:
  - `GET /api/cart`: Fetches all products in the user's cart.
  - `POST /api/cart`: Adds a product to the cart.
  - `DELETE /api/cart`: Removes a product or clears the cart.
  - `PUT /api/cart/:id`: Updates the quantity of a product in the cart.

## Deployment

### How to Deploy on Render.com

Follow these steps to deploy the E-Commerce Store on [Render.com](https://render.com):

1. **Create a Render Account**:
   - Sign up for a free account on [Render.com](https://render.com).

2. **Connect GitHub Repository**:
   - Link your GitHub account to Render.
   - Import the repository containing the E-Commerce Store project.

3. **Create a Web Service for the Backend**:
   - Click on "New +" and select "Web Service".
   - Choose the repository and branch (e.g., `main`) for the backend.
   - Set the build command:
     ```bash
     npm install && npm run build
     ```
   - Set the start command:
     ```bash
     npm run start
     ```
   - Add the required environment variables (e.g., `PORT`, `MONGO_URI`, `ACCESS_TOKEN_SECRET`, etc.) in the "Environment" section.

4. **Create a Static Site for the Frontend**:
   - Click on "New +" and select "Static Site".
   - Choose the repository and branch (e.g., `main`) for the frontend.
   - Set the build command:
     ```bash
     npm install && npm run build
     ```
   - Set the publish directory:
     ```
     frontend/dist
     ```

5. **Configure Environment Variables**:
   - Add any required environment variables for the backend and frontend in their respective services.

6. **Deploy**:
   - Click "Deploy" to start the deployment process.
   - Monitor the build logs to ensure the deployment is successful.

7. **Access the Live Application**:
   - Once deployed, Render will provide a URL for the backend and frontend services.
   - Update the `CLIENT_URL` environment variable in the backend to point to the frontend URL.

**Live Demo**: [https://react-ecommerce-store.onrender.com/](https://react-ecommerce-store.onrender.com/)

## Credits

### Code
- Inspired by Code Institute's walkthrough projects.
- Additional implementation ideas were drawn from open-source e-commerce projects on GitHub.

### Content
- Custom content created specifically for the E-Commerce Store project.
- Product descriptions and images were sourced from free online resources like [Unsplash](https://unsplash.com/) and [Pexels](https://www.pexels.com/).

### Acknowledgments
- **Mentorship**: Special thanks to my mentor for their invaluable guidance and support throughout the project.
- **Resources**: Utilized various online resources, including [MDN Web Docs](https://developer.mozilla.org/) and [Stack Overflow](https://stackoverflow.com/), for learning and troubleshooting.
- **Community**: Gratitude to the open-source community for providing tools and libraries that made this project possible.
- **Render.com**: Thanks to Render for providing a seamless deployment platform.