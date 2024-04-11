import "@styles/globals.css";

export const metadata = {
  title: "Feedback Assistant",
  description: "Analysing Attender Feedback",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
