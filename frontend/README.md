# DilSayCare Frontend

Frontend application built with React, TypeScript, and Tailwind CSS.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start on `http://localhost:3000`.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## Environment Variables

Create a `.env` file in the root directory:

- `VITE_API_URL`: Backend API URL (default: http://localhost:5000/api)

