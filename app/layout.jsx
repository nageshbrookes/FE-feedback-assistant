import "@styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Feedback Assistant",
  description: "Analysing Attender Feedback",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        // make sure to keep toaster above children
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
