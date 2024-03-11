import React from "react";
import Link from "next/link";
import Logo from "@components/image/logo";

function HomeNavigation() {
  return (
    <div>
      <Link href={"/dashboard"}>
        <Logo />
      </Link>
    </div>
  );
}

export default HomeNavigation;
