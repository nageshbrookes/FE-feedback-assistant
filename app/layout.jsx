import "@styles/globals.css";

import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Feedback Assistant",
  description: "Analysing Attender Feedback",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navigation /> <br />
          {children}
        </main>
      </body>
    </html>
  );
}
