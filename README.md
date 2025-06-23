# 🎯 Taskie – Gamified Productivity for Your Tasks

**Taskie** turns task management into a motivating and playful experience. By combining intuitive organization with gamified features, it encourages consistent productivity while making daily to-dos feel less like a chore and more like a challenge.

Designed with a bold neo-brutalist aesthetic, Taskie helps users stay focused by offering visual rewards, progress tracking, and a clean interface that promotes task completion through positive feedback and engagement.

## 🔄 Background

**Taskie2.0** is a complete refactor of the original **Taskie** app, rebuilt for better performance, user experience, and code maintainability.

### ✨ Key Improvements Over Previous Version

- 🚀  Upgraded from **Create React App** to a modern React setup  with **React Router** and optimized bundling.
- ⚡️ Significantly improved **Lighthouse scores** across the board — especially in **Accessibility** and **SEO**.
- 🎉 Fully redesigned UI with **TailwindCSS** for a cleaner and more engaging experience.
- 🧼 Refactored architecture for scalability and modularity.

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

## 🛠 Tech Stack

- **React** application using **React Router** with **TypeScript** 
- **TailwindCSS** 
- **Zustand** 
- **Motion** 
- **Lucide React** 
- **Netlify** 
- **Jest + React Testing Library**

## 🚀 Deployment

- 🔗 [Taskie2.0 Live Site](https://taskie-manager.netlify.app/)
- 🕹️ [Original Taskie (v1)](https://taskie-task-manager.netlify.app/)

## 📦 Getting Started

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/dnmore/taskie-2.0.git
   cd taskie-2.0
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Your application will be available at `http://localhost:5173`.

## 🤝 Contributing

Contributions and feedback are welcome!
Fork the repository and submit a pull request with your ideas, improvements, or bug fixes.

📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using React Router.
