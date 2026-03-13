import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "React Learning Lab (Next.js)",
  description: "Next.js version with server-side data fetching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <header className="app-header">
            <h1>React Learning Lab (Next.js)</h1>
            <p className="subtitle">
              Server-side data fetching with the App Router.
            </p>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/movies">Movies</Link>
            </nav>
          </header>
          {children}
          <footer className="footer">
            <span>Built with Next.js App Router. Data is fetched on the server.</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
