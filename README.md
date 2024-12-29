Assignment-3 Blog API

Welcome to the Backend Blog API, a project designed to provide a fully functional backend for managing a blog platform with two distinct user roles: Admin and User. This application supports user registration, authentication, blog creation, and role-based authorization.



Live URL ([livelink](https://as3-blog-backend.vercel.app/))

Features

User Roles:

Admin:

Can delete any blog.

Can block users by updating their isBlocked property.

Cannot update any blog.

Must be created manually in the database.

User:

Can register and log in.

Can create blogs when logged in.

Can update and delete their own blogs.

Cannot perform admin-specific actions.

Authentication & Authorization:

Users must authenticate to perform blog creation, updates, and deletions.

Role-based access control to differentiate between Admin and User.

Blog API:

Public API for reading blogs.

Includes features for:

Search

Sorting

Filtering

Blog details include:

Title

Content

Author details

### Technologies Used

TypeScript: For robust, type-safe development.

Node.js: Backend runtime.

Express.js: Server framework.

MongoDB: Database to store users and blogs.

Mongoose: ODM for MongoDB.

Zod: Schema validation.

bcrypt: Password hashing for secure authentication.

