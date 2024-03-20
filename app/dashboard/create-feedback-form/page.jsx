"use client";

import React from "react";
import { useState, useEffect } from "react";
import { feedbackQuestions } from "@data/feedbackData";
import { useRouter } from "next/navigation";
import AtendeeSelector from "@components/AtendeeSelector";
import EventModal from "@components/dialog/EventModal";
import Button from "@components/button/Button";

function page() {
  const router = useRouter();
  const eventId = router.query;
  const [questions, setData] = useState([]);
  let [isOpenEventModal, setIsOpenEventModal] = useState(false);

  useEffect(() => {
    console.log("hi");
    if (questions.length == 0) {
      const questionFormate = feedbackQuestions;
      setData(questionFormate);
    }
  });

  function closeModal() {
    setIsOpenEventModal(false);
  }

  function openModal() {
    setIsOpenEventModal(true);
  }

  return (
    <div>
      <EventModal
        isOpen={isOpenEventModal}
        title="Attendee Information"
        close={() => closeModal()}
        showbtn={false}
        event={<AtendeeSelector />}
      />
      <div>
        <Button
          style={"bg-white py-3 px-5 bg-opacity-100 text-black rounded-2xl"}
          onClick={() => openModal()}
          text="Select Attendees"
        />
      </div>
      <div>
        <Button
          style={"bg-white py-3 px-5 bg-opacity-100 text-black rounded-2xl"}
          text="Publish"
        />
      </div>
      <form className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
        {questions.map((question, ind) => {
          if (question.type == "text") {
            return (
              <div className="mb-4">
                <div className="block mb-1">{question.question}</div>
                <div>
                  <input
                    type="text"
                    className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(event) => (question.answer = event.target.value)}
                  />
                </div>
              </div>
            );
          } else if (question.type == "checkbox" || question.type == "radio") {
            return (
              <div className="mb-4">
                <div>{question.question}</div>
                <div
                  className={
                    question.type == "radio"
                      ? "flex items-center space-x-2"
                      : ""
                  }
                >
                  {question.options.map((ops) => {
                    return (
                      <div>
                        <input
                          type={question.type}
                          value={ops}
                          name="radio"
                          onChange={(event) =>
                            (question.answer = event.target.value)
                          }
                        />{" "}
                        {ops}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => console.log(questions)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default page;
