"use client";

import React from "react";
import { useState } from "react";
import { getFeedbackForm } from "@connection/connection";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ReactStars from "react-stars";
import Logo from "@components/image/logo";
import IconLogo from "@components/icon/IconLogo";

//-----------------------------------------------------------------------

function feedbackform() {
  // Initial state setup for the form

  //   const [feedbackform, setFeedback] = useState({
  //     name: '',
  //     email: '',
  //     question1: '',
  //     question2: '',
  //     question3: '',
  //     rating: 0,
  //   });

  //   // Handle changes to the text inputs
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFeedback({
  //     ...feedback,
  //     [name]: value,
  //   });
  // };

  //   // Handle rating changes
  //   const handleRating = (rating) => {
  //     setFeedback({
  //       ...feedback,
  //       rating,
  //     });
  //   };

  //   // Handle form submission
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log('Feedback Submitted:', feedbackform);
  //     // Here you could also post to an API
  //   };

  //   // Emoji ratings
  //   const ratings = [
  //     { level: 1, icon: '😡' },
  //     { level: 2, icon: '😕' },
  //     { level: 3, icon: '😐' },
  //     { level: 4, icon: '🙂' },
  //     { level: 5, icon: '😁' }
  //   ];

  return (
    
    <form className="Feedbackform">


        <div className={"p-6"}>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>

      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="form1">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Feedback Form
            </h2>
          </div>

          <div className="para">
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Share the success of our event by sharing your insights!
              <br></br>
              <br></br>
              This brief form allows you to give fast comments on a variety of
              topics, including presenters, material, and organization.
              <br></br>
              Your opinions matter, as it allows us to adapt future events to
              better match your expectations.
              <br></br>
              <br></br>
              Thank you for taking time to share your opinions.
            </p>
          </div>

          <div>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                How would you rate your overall satisfaction with the event?
              </legend>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Poor
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Good
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Excellent
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="rating1">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                How satisfied were you with the event's venue ?
              </legend>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Not satisfied 😡
                  </label>
                </div>

                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Less Satisfied 😕
                  </label>
                </div>

                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Normal 😐
                  </label>
                </div>

                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Satisfied 🙂
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Very much Satisfied 😁
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="rating1">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                How would you rate your overall satisfaction with the event?
              </legend>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    No
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Question 1
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Question 2
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>



          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Write a review
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>



          <div className="rating2">
          <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your Overall Review
            </label>
            <ReactStars count={5} size={40} color2={"#ffd700"} />
          </div>


        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-6">
        {/* <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button> */}
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
      
    </form>
  );
}

export default feedbackform;
