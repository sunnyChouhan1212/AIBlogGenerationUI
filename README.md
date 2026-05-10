# AI Blog Generation UI

A modern React + TypeScript frontend for the Agentic AI Blog Generator project.

This application allows users to generate AI-powered blogs using:

- FastAPI
- LangGraph
- Groq LLM
- React
- TypeScript
- Tailwind CSS

---

# Features

- AI blog generation
- Markdown rendering
- Streaming typing animation
- Multilingual blog translation
- Responsive UI
- Tailwind CSS styling
- React + TypeScript architecture
- API integration with FastAPI backend

---

# Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Axios
- React Markdown

---

# Project Structure

```text
src/
│
├── components/
│   ├── BlogCard.tsx
│   ├── BlogForm.tsx
│   └── Loader.tsx
│
├── services/
│   └── api.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# Setup Instructions

## 1. Create Project

```bash
npm create vite@latest frontend -- --template react-ts
```

## 2. Move Into Project

```bash
cd frontend
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Install Required Packages

```bash
npm install axios react-markdown
npm install tailwindcss @tailwindcss/vite
npm install @tailwindcss/typography
```

---

# Tailwind CSS Setup

## Update `vite.config.ts`

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

## Update `src/index.css`

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

---

# Run Application

```bash
npm run dev
```

---

# Application URL

```text
http://localhost:5173
```

---

# Backend API

Make sure FastAPI backend is running at:

```text
http://127.0.0.1:8000
```

Swagger Docs:

```text
http://127.0.0.1:8000/docs
```

---

# Features Implemented

## Blog Generation

Generate SEO-friendly blogs using AI.

---

## Translation Support

Supports:
- Hindi
- French

---

## Streaming Typing Animation

Blogs render progressively like ChatGPT.

---

## Markdown Rendering

Supports:
- headings
- lists
- bold text
- formatted content

---

# Future Improvements

- Real-time streaming responses
- Chat-style UI
- Dark mode
- Authentication
- Multi-LLM support
- Conversation memory
- Deployment with Vercel
- Docker support
- LangSmith tracing

---

# Author

Sunny Chouhan