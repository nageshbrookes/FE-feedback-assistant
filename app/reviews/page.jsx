"use client";
import React, { useState } from "react";
import Image from "next/image";
import ViewIcon from "../../public/images/viewicon.svg";
import EventLinkIcon from "../../public/images/eventlinkicon.svg";
import EditIcon from "../../public/images/editframeicon.svg";
import DeleteIcon from "../../public/images/deleteicon.svg";
import { TableHeader } from "@nextui-org/react";
import Button from "@components/button/Button";
import { Tab } from "@headlessui/react";
import EventDetails from "@components/EventDetails";
import ReviewModal from "@components/dialog/ReviewModal";

function page() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const reviewList = [
    {
      email: "lar.har@mail.com",
      event: "JKT 48 11th Anniversary Concert",
      reviews:
        "Very cool event from them I really like being able to reminisce again!",
    },
    {
      email: "lar.har@mail.com",
      event: "JKT 48 11th Anniversary Concert",
      reviews:
        "What an interesting event! It's also very easy to order tickets, the best!",
    },
    {
      email: "lar.har@mail.com",
      event: "JKT 48 11th Anniversary Concert",
      reviews: "Blink is too perfect, complementing high school nostalgia",
    },
    {
      email: "lar.har@mail.com",
      event: "JKT 48 11th Anniversary Concert",
      reviews: "I really like! Set off on another world tour soon!",
    },
    {
      email: "lar.har@mail.com",
      event: "JKT 48 11th Anniversary Concert",
      reviews: "Green Day never fails to give concerts that amaze their fans!",
    },
  ];
  let [isOpenEventModal, setIsOpenEventModal] = useState(false);
  let [eventState, setEventState] = useState(null);
  function closeModal() {
    setEventState(null);
    setIsOpenEventModal(false);
  }
  function openModal(event) {
    setEventState(event);
    setIsOpenEventModal(true);
  }

  return (
    <div className={"py-8 px-[100px]"}>
      <ReviewModal
        isOpen={isOpenEventModal}
        showclose={true}
        close={() => closeModal()}
        review={
          <div className={"text-sm p-4 "}>
            <div className={"flex justify-between"}>
              <div>
                <div className={"text-[#A3A3A3]"}>Attendee</div>
                <div>lar.har@mail.com</div>
              </div>
              <div>
                <div className={"text-[#A3A3A3]"}>Event</div>
                <div>JKT 48 11th Anniversary Concert</div>
              </div>
            </div>
            <div className={"my-4"}>
              <div className={"text-[#A3A3A3]"}>
                Which aspect of the event did you enjoy the most?
              </div>
              <div>
                Very cool event from them I really like being able to reminisce
                again!
              </div>
            </div>
            <div className={"my-4"}>
              <div className={"text-[#A3A3A3]"}>
                Were there any areas where you feel the event could be improved?
              </div>
              <div>
                Very cool event from them I really like being able to reminisce
                again!
              </div>
            </div>
            <div className={"my-4"}>
              <div className={"text-[#A3A3A3]"}>
                Were there any areas where you feel the event could be improved?
              </div>
              <div>Extremely likely</div>
            </div>
          </div>
        }
      />

      {/*insert breadcrumb*/}
      <div className={"flex gap-6"}>
        <div>Home</div>
        <div>/</div>
        <div>Reviews</div>
      </div>

      <div className={"mt-8"}>
        {/* Creating Table */}
        <div className={"bg-white p-6 mt-8"}>
          <table className={"w-full"}>
            {/* Row 1 */} {/*Table head*/}
            <thead className={"text-left"}>
              <tr className={"bg-[#F9F9F9] text-[#6C6C6C]"}>
                <th className={"p-2.5"}>Attendees</th>
                <th className={"p-2.5"}>Event</th>
                <th className={"p-2.5"}>Reviews</th>
                <th className={"p-2.5"}>Action</th>
              </tr>
            </thead>
            {/* Row 2 */}
            <tbody className={"w-full"}>
              {reviewList.map((review, index) => {
                return (
                  <tr key={index}>
                    <td className={"p-2.5"}>
                      <div>{review.email}</div>
                    </td>
                    <td className={"p-2.5"}>{review.event}</td>
                    <td className={"p-2.5"}>{review.reviews}</td>
                    <td className={"p-2.5"}>
                      <div className={"flex gap-2.5"}>
                        <div
                          className={
                            "flex gap-1.5 items-center bg-[#f9f9f9] p-1 pr-2 rounded-lg text-sm cursor-pointer"
                          }
                          onClick={() => openModal(review)}
                        >
                          <Image src={ViewIcon} alt={""} />
                          <div>View</div>
                        </div>
                        {/*<Image src={DeleteIcon} alt={""} onClick={}/>*/}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
