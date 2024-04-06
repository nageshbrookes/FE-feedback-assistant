"use client";

import React from "react";
import { useState, useEffect } from "react";
import { feedbackQuestions } from "@data/feedbackData";
import { useRouter } from "next/navigation";
import AtendeeSelector from "@components/AtendeeSelector";
import EventModal from "@components/dialog/EventModal";
import Button from "@components/button/Button";
import { FeedbackFormate } from "@data/feedbackData";
import QuestionAddition from "@components/QuestionAddition";

function page() {
  const router = useRouter();
  const eventId = router.query;
  const [questions, setData] = useState([]);
  let [isOpenEventModal, setIsOpenEventModal] = useState(false);
  let [IsQuestionModel, setIsQuestionModel] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("hi");
    if (questions.length == 0) {
      setLoading(true);
      console.log({ eventId: "1" });
      console.log("getting data");
      try {
        fetch("/api/get-questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ eventId: "1" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setData(data.data);
          });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  });

  function closeModal() {
    setIsOpenEventModal(false);
  }

  function closeQuestionModal() {
    setIsQuestionModel(false);
  }

  function openModal() {
    setIsOpenEventModal(true);
  }

  function openQuestionAdditionModel() {
    setIsQuestionModel(true);
  }

  function addQuestion() {
    console.log("om");
    const newAddition = [...questions, FeedbackFormate];
    console.log(newAddition);
    setData(newAddition);
  }

  function updateData(data) {
    console.log("parer");
    console.log(data);
    const newAddition = [...questions, data];
    console.log(newAddition);
    setData(newAddition);
  }

  return (
    <div>
      {loading && <div className="loading-bar">Loading...</div>}
      <EventModal
        isOpen={isOpenEventModal}
        title="Attendee Information"
        close={() => closeModal()}
        showclose={true}
        showbtn={false}
        event={<AtendeeSelector eventId={"1"} />}
      />
      <EventModal
        isOpen={IsQuestionModel}
        title="Add Question"
        close={() => closeQuestionModal()}
        showbtn={false}
        event={
          <QuestionAddition
            close={() => closeQuestionModal()}
            onSave={updateData}
          />
        }
      />
      <div className="flex flex-row-reverse">
        <div>
          <Button
            style={"bg-white py-3 px-5 bg-opacity-100 text-black rounded-2xl"}
            text="Publish"
          />
        </div>
        <div>
          <Button
            style={"bg-white py-3 px-5 bg-opacity-100 text-black rounded-2xl"}
            onClick={() => openModal()}
            text="Select Attendees"
          />
        </div>
      </div>
      <form className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
        <button type="button" onClick={() => openQuestionAdditionModel()}>
          {" "}
          Add Question
        </button>
        {questions.map((question, ind) => {
          if (question.type == "text") {
            return (
              <div className="mb-4">
                <div className="block mb-1">
                  <b>{ind + 1}. </b>
                  {question.question}
                </div>
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
                <div>
                  <b>{ind + 1}. </b>
                  {question.question}
                </div>
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
        {/* <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => console.log(questions)}
        >
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default page;
