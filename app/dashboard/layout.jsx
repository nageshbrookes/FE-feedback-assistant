import "@styles/globals.css";

import Navigation from "@/components/Navigation";

export default function RootLayout({ children }) {
  return (
      <div>
          <Navigation />
          {children}
      </div>
  );
}
