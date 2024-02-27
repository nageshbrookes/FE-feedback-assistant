import React from "react";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

function page() {
  return (
      <div>
          <div className={"px-[120px]"}>
              <Navigation />
              <div></div>

          </div>

          <div className={"px-[120px]"}>
              <Footer />
          </div>
      </div>

  );
}

export default page;
