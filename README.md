# Next Auth (v5) Toolbox

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [`Auth.js`](https://authjs.dev/), that includes reuseable components, hooks and utils to use auth in server & client components, api routes and server actions.

**[VIEW DEMO](https://next-auth-v5-toolbox.vercel.app/)**

![App image](./public/docs/home-page-view.jpg)

---

## Key Features

- Next-auth v5 (Auth.js)
- Next.js 14 with server actions
- Credentials Provider
- OAuth Provider (login with Google & GitHub)
- Email verification
- Strict Two factor verification (2FA)
- Forgot password functionality
- User roles (Admin & User) & Role Gate for rendering protected content
- `useCurrentUser` & `useRole` hooks
- Protected routes
- UI examples with server and client components
- Change user information & configuration in Settings page

## Project Organization & File Colocation

```
|-- actions --> server actions
|-- app --> pages/layouts and routing
    |-- (protected) --> special route-group for inner UI
        |-- _components --> NOT-reusable components folder
        |-- admin --> protected content for Admin Role only
        |-- client --> UI-example as client component
        |-- server --> UI-example as server component
        |-- settings --> settings page to change user info
    |-- api --> general server api routes for some purposes
        |-- admin --> protected api route for Admin role only
        |-- auth/[...nextauth] --> next-auth configuration api route
    |-- auth --> base authentication route with different endpoints
        |-- error
        |-- login
        |-- new-password
        |-- new-verification
        |-- register
        |-- reset
|-- components --> general folder with reusable components
    |-- auth --> custom reusable components used for auth purposes
    |-- ui --> reusable components imported from Chadcn/UI lib
|-- data --> utilities database get-requests
|-- hooks --> custom hooks
|-- lib --> special utilities for work with database and additional services
|-- prisma --> data modeling and ORM configuration
|-- public --> static files
|-- schemas --> data-validation schemas for client & server sides
-- auth.config.ts --> auth-providers configuration
-- auth.ts --> next-auth callbacks & session configuration
-- middleware.ts --> main next.js middleware config
-- next-auth.d.ts --> additional TS-module declarations
-- routes.ts --> general configuration for different types of routes
```

## Technology stack

- **Main technologies**:

  - Next.js (app router)
  - Auth.js v5
  - Node.js
  - React
  - TypeScript
  - Tailwind CSS
  - ShadcnUi
  - Prisma
  - PostgresQL (deploy with [Neon](https://neon.tech/))

- **Additional dependencies**:

  - Nodemailer
  - React Hook Form
  - Zod
  - Bcryptjs
  - React-Spinners
  - React-Icons
  - Sonner
  - UUID

  ...full list of dependencies is available in `package.json` file.
