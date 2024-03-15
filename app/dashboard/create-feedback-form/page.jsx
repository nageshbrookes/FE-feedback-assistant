"use client";

import React from "react";
import { useState, useEffect } from "react";
import { feedbackQuestions } from "@data/feedbackData";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const eventId = router.query;
  const [questions, setData] = useState([]);

  useEffect(() => {
    console.log("hi");
    if (questions.length == 0) {
      const questionFormate = feedbackQuestions;
      setData(questionFormate);
    }
  });

  return (
    <div>
      {questions.map((question, ind) => {
        if (question.type == "text") {
          return (
            <div>
              <div>{question.question}</div>
              <div>
                <input
                  type="text"
                  onChange={(event) => (question.answer = event.target.value)}
                />
              </div>
            </div>
          );
        } else if (question.type == "checkbox" || question.type == "radio") {
          return (
            <div>
              <div>{question.question}</div>
              <div>
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
      <button onClick={() => console.log(questions)}>Submit</button>
    </div>
  );
}

export default page;
