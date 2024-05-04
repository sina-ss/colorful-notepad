# Colorful Notepad

The colorful notepad project is for you to put the writings that you never had a chance to send to your friends or people around here.

## NestJS Backend with Prisma and Rate Limiting

This is a NestJS backend application that provides CRUD APIs for managing notes. It uses Prisma as the ORM for database management and includes rate limiting functionality to protect the API from excessive requests.

### Features

- Create, read, update, and delete notes
- Pagination support for retrieving notes
- Rate limiting to prevent abuse and ensure fair usage
- Prisma integration for database management

### Requirements

- Node.js (version X.X.X)
- PostgreSQL database
- Prisma CLI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. Install the dependencies:

   ```bash
   cd your-repo
   npm install
   ```
3. Set up the database:

   - Create a new PostgreSQL database
   - Update the `DATABASE_URL` in the `.env` file with your database connection URL
4. Run the database migrations:

   ```bash
   npx prisma migrate dev
   ```
5. Start the application:

   ```bash
   npm run start
   ```

   The application will be running at `http://localhost:3000`.

### API Endpoints

- `POST /notes`: Create a new note
- `GET /notes`: Get all notes (supports pagination with `skip` and `take` query parameters)
- `GET /notes/:id`: Get a note by ID
- `PUT /notes/:id`: Update a note by ID
- `DELETE /notes/:id`: Delete a note by ID

For detailed information about the request and response formats, please refer to the `requests.http` file.

### Rate Limiting

The API endpoints are protected by rate limiting to prevent excessive requests. The default configuration allows a maximum of 10 requests per IP address within a 60-second time window. If a client exceeds the rate limit, they will receive a "Too Many Requests" (HTTP 429) response.

You can customize the rate limiting settings by modifying the `ThrottlerModule` configuration in the `app.module.ts` file.

### Folder Structure

The project follows a standard NestJS folder structure:

```
├── src
│   ├── note
│   │   ├── note.controller.ts
│   │   ├── note.module.ts
│   │   └── note.service.ts
│   ├── prisma
│   │   ├── prisma.service.ts
│   │   └── schema.prisma
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│── prisma
│   ├── prisma.service.ts
│   └── schema.prisma
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .env
├── .gitignore
├── nest-cli.json
├── package.json
├── README.md
└── tsconfig.json
```

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.
