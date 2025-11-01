# DilSayCare Backend

Backend API built with Node.js and TypeScript.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
backend/
├── src/
│   ├── controllers/    # Route controllers
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── models/         # Data models
│   ├── utils/          # Utility functions
│   └── index.ts        # Entry point
├── dist/               # Compiled JavaScript
├── .env.example        # Environment variables template
├── package.json
└── tsconfig.json
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port (default: 5000)
- `DATABASE_URL`: Database connection string

