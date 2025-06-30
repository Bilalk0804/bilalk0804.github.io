# replit.md

## Overview

This is a modern full-stack web application built as a personal portfolio for Mohd Bilal Khan, an AI/ML researcher and developer. The application showcases a developer-themed portfolio with a GitHub-inspired dark design, featuring sections for about, projects, experience, skills, achievements, and contact information.

## System Architecture

The application follows a monorepo structure with clear separation between frontend and backend concerns:

- **Frontend**: React with TypeScript, built using Vite
- **Backend**: Express.js server with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal usage)
- **Build System**: Vite for frontend, esbuild for backend

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with custom developer theme (GitHub-inspired dark mode)
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Development**: TSX for TypeScript execution
- **Build**: esbuild for production bundling

### Database Schema
- Basic user schema defined with Drizzle ORM
- PostgreSQL as the target database
- Minimal implementation with users table (id, username, password)
- Schema validation using Drizzle-Zod

### UI Components
- Comprehensive shadcn/ui component library
- Custom themed components with developer-focused color scheme
- Responsive design with mobile-first approach
- Accessibility features built into Radix UI primitives

## Data Flow

1. **Static Portfolio Content**: Portfolio sections are component-based with hardcoded content
2. **Resume Download**: API endpoint serves PDF resume file from public directory
3. **Navigation**: Client-side routing with smooth scrolling between sections
4. **Responsive Design**: Mobile-responsive with collapsible navigation

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection for Neon
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **framer-motion**: Animation library
- **date-fns**: Date manipulation utilities

### UI Dependencies
- **@radix-ui/***: Comprehensive set of UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

### Development Dependencies
- **vite**: Frontend build tool and dev server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production

## Deployment Strategy

### Development
- Frontend: Vite dev server with HMR
- Backend: TSX with live reload
- Database: Drizzle kit for schema management

### Production Build
1. Frontend built with `vite build` to `dist/public`
2. Backend bundled with esbuild to `dist/index.js`
3. Static assets served from Express server
4. Database migrations handled via Drizzle kit

### Environment Configuration
- `NODE_ENV` for environment detection
- `DATABASE_URL` for PostgreSQL connection
- Replit-specific plugins for development environment

### File Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components including UI library
│   │   ├── pages/         # Route components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and configurations
├── server/                # Backend Express application
│   ├── index.ts          # Main server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data layer abstraction
│   └── vite.ts           # Development server setup
├── shared/               # Shared types and schemas
│   └── schema.ts         # Drizzle database schema
└── dist/                 # Production build output
```

## User Preferences

- Preferred communication style: Simple, everyday language
- Email: khanbilal080804@gmail.com (updated from bilalk0804@gmail.com)
- Wanted a developer-themed portfolio similar to the provided sample but not exactly the same
- Removed CGPA from education section as requested (outdated information)

## Recent Changes

- June 30, 2025: Updated email address across all contact sections to khanbilal080804@gmail.com
- June 30, 2025: Fixed CSS import order issue (moved @import before @tailwind directives)
- June 30, 2025: Added resume PDF to public directory for download functionality
- June 30, 2025: Built complete portfolio with GitHub-inspired dark theme featuring purple/cyan accents

## Changelog

Changelog:
- June 30, 2025. Initial setup and complete portfolio implementation