import "./globals.css";

import { Inter, Rubik } from 'next/font/google'
 
export const inter = Rubik({
  subsets: ['latin'],
  display: 'swap',
})
 
export const metadata = {
  title: "buildd.io",
  description: "A one step solution for startups",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
