# Example App

![Example App Banner](./public/readme_images/example_app_banner_color.png)

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-App_Router-black?logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/TailwindCSS-Utility_First-38B2AC?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</p>

A Next.js example application built as a companion to the SlimKat Media blog series.

This repo is intentionally generic so developers can fork it and follow along with the blog series to build a polished, deployed app step by step.

## Links

- Repo: https://github.com/JamesFThomas/example-app
- Live site: https://example-app-eight-silk.vercel.app/
- Blog series: https://medium.com/@jamesfeltonthomas
- LinkedIn: https://www.linkedin.com/in/jamesfeltonthomas/

## Project Overview

This project is a real, deployed Next.js application that evolves alongside a public build series. The goal is to document each milestone as it is completed, including decisions, tradeoffs, and any bugs encountered during implementation.

The SlimKat Media application is the business-specific version. This Example App keeps the same concepts but stays brand-neutral so it can be reused as a starter.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- ESLint

## Local Development

### Prerequisites

- Node.js (LTS recommended)
- npm

## Setup

```bash
git clone https://github.com/JamesFThomas/example-app.git
cd example-app
npm install
npm run dev
```

Open http://localhost:3000.

## Debugging with VS Code

This project includes a recommended VS Code debugging configuration so developers can place breakpoints directly inside React components and server code while running the Next.js development server.

Some environments inject incompatible Node flags when the debugger launches. To avoid this, the debugger must run with the **same Node version used by your system**.

### Requirements

- VS Code
- Node.js installed via **nvm** (recommended)
- Node version **20+**

Verify your Node version:

```bash
node -v
```

### VS Code Debug Configuration

Create the file:

```bash
  .vscode/launch.json
```

with the following configuration:

```JSON
  {
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Example App: Next dev",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "${env:HOME}/.nvm/versions/node/v20.19.6/bin/node",
      "program": "${workspaceFolder}/node_modules/next/dist/bin/next",
      "args": ["dev", "--webpack"],
      "cwd": "${workspaceFolder}",
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"],
      "env": {
        "NODE_OPTIONS": ""
      }
    }
  ]
}
```

#### Why this configuration is used

This configuration addresses three common debugging issues:

#### Forces the correct Node runtime

VS Code can sometimes launch Node using an outdated system binary. The `runtimeExecutable` field ensures the debugger uses the exact Node version installed via `nvm`.

#### Clears injected debugging flags

Some environments inject additional flags through NODE_OPTIONS. Clearing this value prevents errors related to unsupported experimental flags.

#### Uses Webpack instead of Turbopack

While Turbopack is the default development bundler in newer versions of Next.js, it may occasionally fail in debugging environments. Running the dev server with:

```bash
  next dev --webpack
```

provides a stable debugging workflow.

#### Running the Debugger

1. Open the project in VS Code
2. Go to Run and Debug
3. Select Example App: Next dev
4. Start debugging

The development server will launch and the debugger will attach.

Example output:

```bash
  Next.js (webpack)
  Local: http://localhost:3000
  Debugger attached.
```

You can now place breakpoints inside components such as:

```bash
  components/pages/home/Home.tsx
```

When the page loads in the browser, execution will pause at the breakpoint so you can inspect variables, component state, and the call stack.

<p align="center">
  <img src="./public/readme_images/debugger_running.png" alt="VS Code debugger running with breakpoint" width="900"/>
</p>

## Project Structure

The project follows a modular, feature-oriented structure using the Next.js App Router.

```pgsql
app/                 # Next.js routing layer (App Router)
  layout.tsx         # Root layout wrapper
  page.tsx           # Root page entry
  globals.css        # Global styles

components/          # Application UI components
  pages/             # Page-level feature components
    home/
      Home.tsx       # Home feature component
      Home.test.tsx  # Reserved for future testing
  shared/            # Reusable cross-app components
    navbar/
    footer/

public/              # Static assets (images, icons, etc.)

```

## Testing

Will be implemented in bLog 3 of the series.

## Deployment

This application is deployed on Vercel.

- Live site: https://example-app-eight-silk.vercel.app/

## Upcoming Features

### Application Features

- Email subscription confirmation flow (transactional email via Resend)
- Calendar scheduling feature
- Google Calendar API integration
- User authentication and role-based access control
- Session management and secure token handling

### Infrastructure & Platform

- Production database deployment and schema design
- Database integration with authentication layer
- Custom domain configuration and DNS setup (exampleapp.com)
- Domain-verified email delivery (SPF, DKIM, DMARC)
- Branded domain email inboxes (e.g., contact@exampleapp.com)

## Author

#### James Felton Thomas:

- GitHub: https://github.com/JamesFThomas
- LinkedIn: https://www.linkedin.com/in/jamesfeltonthomas/

## License

- MIT
