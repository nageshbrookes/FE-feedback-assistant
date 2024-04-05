"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { FeedbackFormate } from "@data/feedbackData";
import { useState } from "react";

export default function ({ close = () => {}, onSave }) {
  const types = ["text", "checkbox", "radio"];
  const [Questionformate, setQuestionValue] = useState(FeedbackFormate);
  const [options, setOptions] = useState(Questionformate.options);
  const [needOptions, setneedOptions] = useState(false);

  function setType(event) {
    console.log("in type");
    let updatedType = Questionformate;
    updatedType.type = event.target.value;
    setQuestionValue(updatedType);
    if (updatedType.type == "checkbox" || updatedType.type == "radio") {
      setneedOptions(true);
    } else {
      setneedOptions(false);
    }
    console.log(Questionformate);
    console.log(event.target.value);
  }

  function addMoreOption() {
    console.log("in ops");
    let updatedOptions = [...options];
    updatedOptions.push("");
    setOptions(updatedOptions);
    console.log(options);
  }

  function saveData() {
    Questionformate.options = options;
    console.log(Questionformate);
    onSave(JSON.parse(JSON.stringify(Questionformate)));
    setQuestionValue(FeedbackFormate);
    setOptions(FeedbackFormate.options);
    close();
  }

  //   function updateOption(event, ind) {
  //     let ops = options;
  //     ops[ind] = event.target.value;
  //     setOptions(ops);
  //     console.log(options);
  //   }
  return (
    <div>
      Question:{" "}
      <input
        type="text"
        className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(event) => (Questionformate.question = event.target.value)}
      />
      <div>
        <Select
          isRequired
          label="Favorite Animal"
          placeholder="Select an animal"
          onChange={(event) => setType(event)}
          className="max-w-xs"
        >
          {types.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div>
        {needOptions && (
          <div>
            <label htmlFor="">options</label>
            {options.map((val, ind) => (
              <input
                type="text"
                className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(event) => (options[ind] = event.target.value)}
              />
            ))}

            <button type="button" onClick={() => addMoreOption()}>
              add more options
            </button>
          </div>
        )}
      </div>
      <div>
        <button type="button" onClick={() => saveData()}>
          save
        </button>
      </div>
    </div>
  );
}