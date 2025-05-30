# 🎯 Taskie – Gamified Productivity for Your Tasks

Refactored version of previous [project](https://github.com/dnmore/taskie)

- 🚀 React application using React Router and Zustand for state management
- ⚡️ Improved Performance, Accessibility, SEO
- 🎉 Cleaner and engaging user experience with a new layout

## Overview

Taskie transforms task management into an engaging experience, making productivity feel less like work and more like a game. This app aims to help users organize their tasks in a visually engaging way, combining effective task prioritization with gamified elements that motivate users to keep going.

Many users struggle with motivation in managing tasks effectively. By blending gamification with a clean, bold design, Taskie aims to make task tracking and completion more rewarding, addressing the need for a task management solution that encourages consistent productivity.

 [Live Demo](https://taskie-manager.netlify.app/)

## Features ✨

- **Task Creation & Editing**: Users can create, edit, and delete tasks with assigned priorities (low, medium, high) and due dates.
- **Points System**: Earn points based on task priority when completing tasks:
  Low Priority: +10 points
  Medium Priority: +20 points
  High Priority: +30 points
- **Levels**: As users accumulate points, they unlock new levels:
  Taskie Novice: 0 – 99 points
  Taskie Pro: 100 – 199 points
  Taskie Guru: 200+ points
- **Filters**: Filter tasks by priority (Low, Medium, High).
- **Modals**: Modals are used for creating/editing tasks and displaying game rules.
- **Progress Bar**: Shows progress toward the next level.
- **Gamification**: Unlock levels, badges, and celebrate task completion with animated feedback using Framer Motion.


## React Router Netlify Template

A modern, production-ready template for building full-stack React applications using React Router,
deployed to Netlify.

### Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)
- 💻 Configured for deployment to Netlify

### Getting Started

#### Installation

Install the dependencies:

```bash
npm install
```

#### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Building for Production

Create a production build:

```bash
npm run build
```

### Previewing a Production build

To preview a production build locally, use the [Netlify CLI](https://cli.netlify.com):

```bash
npx netlify-cli serve
```

```bash
npm run build
```

### Deployment

This template is preconfigured for deployment to Netlify.

Follow <https://docs.netlify.com/welcome/add-new-site/> to add this project as a site
in your Netlify account.

### Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

### See also

[Guide: how to deploy a React Router 7 site to Netlify](https://developers.netlify.com/guides/how-to-deploy-a-react-router-7-site-to-netlify/)

---

Built with ❤️ using React Router.
