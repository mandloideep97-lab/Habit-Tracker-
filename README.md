# Habit Tracker App

A clean, responsive weekly habit tracking web application built with React, TypeScript, and Tailwind CSS. Track daily habits, maintain active streaks, and navigate across past weeks with automatic browser storage.

## Features

- **Weekly Calendar Navigation:** View habits across a Monday–Sunday week view and browse past weeks using Prev/Next controls.
- **Daily Streak Tracking:** Automatically calculates and displays consecutive daily completion streaks.
- **Today's Progress Summary:** Shows real-time completion count for the current day.
- **Habit Management:** Create, toggle daily completions (with future dates locked), and delete habits.
- **Persistent Local Storage:** Saves habits and completion dates in the browser using a custom `useLocalStorage` hook with automatic ISO date parsing.

## Tech Stack

- **Frontend:** React, TypeScript
- **Styling:** Tailwind CSS
- **Date Utilities:** `date-fns`
- **Build Tool:** Vite

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com
   ```

2. **Navigate to the project directory**

   ```bash
   cd habit-tracker-react
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
