import "../styles/globals.css";

export const metadata = {
  title: "Admin Dashboard",
  description: "Next.js + DaisyUI admin panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="layout-shell">
        {children}
      </body>
    </html>
  );
}

