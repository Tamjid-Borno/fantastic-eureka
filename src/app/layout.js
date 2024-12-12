// src/app/layout.js
import localFont from "next/font/local";
import Navbar from './components/Navbar';
import './globals.css'; // Import your global styles



// Metadata for the site
export const metadata = {
  title: "WebHiVe",
  description: "Welcome to My Company website",
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar />
        <main>{children}</main>

      </body>
    </html>
  );
}
