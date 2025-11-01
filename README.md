# DilSayCare Assignment

Full-stack application with React.js + TypeScript + Tailwind CSS frontend and Node.js + TypeScript backend.

## Project Structure

```
.
├── backend/          # Node.js + TypeScript backend
├── frontend/         # React.js + TypeScript + Tailwind CSS frontend
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

## Available Scripts

### Backend

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

### Backend
- Node.js
- TypeScript
- Express.js
- CORS
- Helmet (Security)
- Morgan (Logging)

### Frontend
- React.js
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Axios

## License

ISC

