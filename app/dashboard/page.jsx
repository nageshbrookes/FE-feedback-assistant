import React from "react";

import HomeEventCard from "@components/HomeEventCard";
import eventCardImage from "../../public/images/eventCardImage.png";
import Link from "next/link";

function page() {
  let event = {
    title: "September Perform 2023",
    date: "Sep 31-36 , 2023",
    location: "San Diego, California - US",
    image: eventCardImage,
  };
  return (
    <div>
      <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"}>
        <h1>Events</h1>
        <Link href="/event">
          <HomeEventCard key={event.title} event={event} />;
        </Link>
      </div>
    </div>
  );
}

export default page;
