# Express REST API

An example of a basic REST API built with Express.

## Run locally

1. Clone this repo
1. `npm install` to install dependencies
1. `npm run dev` to start the development server

## API docs

The API exposes CRUD (create, read, update, delete) actions for the `todos` array.

A `Todo` is an object with this shape: `{ id: string, text: string, complete: boolean }`

| `req`               | `req.body`           | `res.statusCode` | `res.body` |
| ------------------- | -------------------- | ---------------- | ---------- |
| `GET /todos`        |                      | `200`            | `[Todo]`   |
| `GET /todos/:id`    |                      | `200`            | `Todo`     |
| `POST /todos`       | `{ text, complete }` | `201`            |            |
| `PUT /todos`        | `{ text, complete }` | `201`            | `Todo`     |
| `POST /todos`       | `{ complete }`       | `201`            | `Todo`     |
| `DELETE /todos/:id` |                      | `204`            |            |

## Data storage

As this is just an example it uses a hacky fake-database that writes to a JSON file (in `./db/db.json`). This file is gitignored, so a fresh copy will be created the first time you start the server.

## Middleware

- `logger.js` is rudimentary logger that logs the incoming request method & url and the outgoing response statusCode to the console.
- `errors.js` catches server errors and responds with the appropriate statusCode and error message.
