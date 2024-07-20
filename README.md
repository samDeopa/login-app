**The Moon Devs: Take-Home Assignment**

**Description:**
This take-home assignment required using Redux Toolkit to store user data and perform user login.

**Tech Stack:**

- **Client:** React, Next.js, TypeScript, Redux Toolkit, TailwindCSS
- **Server:** Next.js API route, JSON Web Token (JWT)

**Environment Variables:**
To run this project, add the following environment variables to your `.env` file:

```
SECRET_KEY=(Any Random String)
```

**Run Locally:**

1. **Clone the project:**

   ```bash
   git clone https://github.com/abhinavkr2108/fullstack-intern-assignment
   ```

2. **Go to the project directory:**

   ```bash
   cd fullstack-intern-assignment
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```

**File Structure:**

```
.next/                    # Next.js build output directory
app/                      # Main application directory
  ├── api/                # API routes
  ├── home/               # Home page components
  ├── register/           # Registration components
  ├── favicon.ico         # Favicon file
  ├── globals.css         # Global CSS styles
  ├── layout.tsx          # Layout component
  └── page.tsx            # Main page component

components/ui/            # UI components
  ├── button.tsx          # Button component
  ├── card.tsx            # Card component
  ├── form.tsx            # Form component
  ├── label.tsx           # Label component
  └── sonner.tsx          # Sonner component

hooks/                    # Custom hooks
  └── useAuthSession.ts   # Authentication session hook

lib/                      # Library files (utility functions, etc.)

node_modules/             # Node.js modules (dependencies)

public/                   # Public assets

redux/                    # Redux related files
  ├── auth/               # Authentication related Redux logic
  └── provider.tsx        # Redux provider component
  └── store.ts            # Redux store configuration

.env                      # Environment variables file
.gitignore                # Git ignore file
constants.ts              # Constants file
next-env.d.ts             # Next.js environment type definitions
```

**URL Paths:**

- `/`: Path used for logging in the user.
- `/home`: Path only accessible to authenticated users who have logged in successfully and have a token in their browser.
- `/register`: Path for users that want to register themselves.

**User Data:**

- User data is currently stored locally.
- There is a default user for testing purposes with:
  - **Username:** sameer
  - **Password:** chand

**View Project:**
View the live URL of the project.
