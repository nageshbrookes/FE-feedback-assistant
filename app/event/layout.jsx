import "@styles/globals.css";

import HomeNavigation from "@components/HomeNavigation";
import InnerNavigation from "@components/InnerNavigation";

export default function RootLayout({ children }) {
  return (
    <div>
      <HomeNavigation />
      <InnerNavigation />
      {children}
    </div>
  );
}
