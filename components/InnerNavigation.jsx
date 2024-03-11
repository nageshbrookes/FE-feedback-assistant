import React from "react";
import Link from "next/link";

function InnerNavigation() {
  return (
    <div>
      <div className={" gap-12 hidden md:flex"}>
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link href={"/event"}>Events</Link>
        <Link href={"/review"}>Reviews</Link>
      </div>
    </div>
  );
}

export default InnerNavigation;
