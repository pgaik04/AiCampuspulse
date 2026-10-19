<<<<<<< HEAD
# AI CampusPulse – Dynamic Assessment Module

Two connected Next.js pages matching the supplied wireframe concept:
1. **Academic Assessment** – dynamic quiz catalog + active quiz flow.
2. **Assessment Results** – dynamic score, skill breakdown, improvement areas and question review.

## Stack
- Next.js App Router + React + TypeScript
- PostgreSQL
- Prisma ORM
- Plain CSS for the UI (easy to customize)

## Run on Windows 10/11
1. Install Node.js 20+ and PostgreSQL.
2. Create a PostgreSQL database named `campuspulse`.
3. Copy `.env.example` to `.env` and set your PostgreSQL password.
4. Run:
```bash
npm install
npx prisma generate
npx prisma db push
npm run prisma:seed
npm run dev
```
5. Open `http://localhost:3000`.

## Dynamic logic
- Quiz cards are loaded from PostgreSQL.
- Each quiz has its own questions, duration, passing score, difficulty and skills.
- `/assessments/[id]` loads any quiz dynamically.
- Answers are submitted to a Next.js API route.
- The server calculates the score and stores the result in PostgreSQL.
- `/results/[id]` dynamically displays the stored result and skill-level performance.
- Included quizzes: DSA, Python, Web Development, DBMS, Computer Networks and Operating Systems.

## Next implementation steps
- Add authentication/student IDs.
- Add countdown timer and auto-submit.
- Add admin CRUD for quizzes/questions.
- Generate actual PDF reports.
- Add PostgreSQL indexes and analytics dashboards.
=======
# AiCampuspulse
>>>>>>> 6549623dcfd88dbc74639e2cb701a5befe3346f6
