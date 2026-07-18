# ToDo List App — Full-Stack

A full-stack task management app with Google OAuth authentication.

## 🔗 Live Demo
[https://todo-list-react-node-gray.vercel.app/]

## Stack
- **Front-end:** React, TypeScript, Vite
- **Back-end:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Auth:** Google OAuth 2.0
- **Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)

## Features
- Secure login via Google OAuth 2.0
- Create, edit, complete, and delete tasks
- Persistent state via REST API
- Responsive design

## Project Structure
/server               # Express API
/to-do-list           # React frontend
├── components        # AddTodo, TodoList, TodoItem, Header, Footer
├── hooks             # useTodos — task state + API calls
└── utils             # apiClient — HTTP request handling

## API Endpoints
- `GET /tasks` — fetch all tasks
- `POST /tasks` — add a new task
- `PUT /tasks/:id` — toggle complete / edit a task
- `DELETE /tasks/:id` — delete a task

## Running Locally

**Clone**
\`\`\`bash
git clone https://github.com/Nivetha07-dev/todo-list-react-node
cd todo-list-react-node
\`\`\`

**Backend**
\`\`\`bash
cd server
npm install
npm start
\`\`\`

**Frontend**
\`\`\`bash
cd to-do-list
npm install
npm run dev
\`\`\`

Requires a `.env` file in `/server` with a MongoDB connection string (MongoDB Atlas or local) and JWT secret token — see `.env.example`.

## Author
Nivetha R S — [LinkedIn](https://www.linkedin.com/in/nivetha-sekar/) · [GitHub](https://github.com/Nivetha07-dev)