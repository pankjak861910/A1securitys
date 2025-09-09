# A1 Securitys and Monitoring

This is the official website for A1 Securitys and Monitoring, a modern web application built with Next.js and TypeScript.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (v15) with App Router & Turbopack
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Email:** [Nodemailer](https://nodemailer.com/) for contact form submissions
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** [Bun](https://bun.sh/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Bun](https://bun.sh/docs/installation) installed on your system.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/pankjak861910/A1securitys.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd a1-security-and-monitoring
    ```
3.  Install the dependencies:
    ```bash
    bun install
    ```

### Environment Variables

This project requires environment variables for the contact form functionality.

1.  Create a `.env.local` file in the root of the project by copying the example file:
    ```bash
    cp example.env .env.local
    ```
2.  Update the `.env.local` file with your SMTP credentials:
    ```
    SMTP_EMAIL="your-email@example.com"
    SMTP_PASSWORD="your-email-password"
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

- `bun run dev`: Runs the app in development mode with Turbopack.
- `bun run build`: Builds the app for production.
- `bun run start`: Starts a production server.
- `bun run lint`: Runs ESLint to check for code quality and errors.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
