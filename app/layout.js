import '../styles/globals.css';

export const metadata = {
  title: 'Jared Drueco',
  description:
    "Hi, I'm Jared! I'm a software engineering student at the University of Alberta. Explore my portfolio website to see my experience, projects, and to learn more about my skills in software development and problem-solving.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
