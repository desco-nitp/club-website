import React, { useState } from "react";
import Accordion from "./list";
import QuestionMark from "./mark.webp";
import Arrow from "./arrow.webp";

const Faq = () => {
  const [selectedSection, setSelectedSection] = useState("s1");

  const faqs = {
    //Questions for the FAQs can be changed here
    //
    //
    //
    s1: [
      {
        serial: "1",
        title: "What is Section 1 Question 1?",
        content: "This is the answer to Section 1 Question 1.",
      },
      {
        serial: "2",
        title: "What is Section 1 Question 2?",
        content: "This is the answer to Section 1 Question 2.",
      },
    ],
    s2: [
      {
        serial: "1",
        title: "What is Section 2 Question 1?",
        content: "This is the answer to Section 2 Question 1.",
      },
      {
        serial: "2",
        title: "What is Section 2 Question 2?",
        content: "This is the answer to Section 2 Question 2.",
      },
    ],
    s3: [
      {
        serial: "1",
        title: "What is Section 3 Question 1?",
        content: "This is the answer to Section 3 Question 1.",
      },
      {
        serial: "2",
        title: "What is Section 3 Question 2?",
        content: "This is the answer to Section 3 Question 2.",
      },
    ],
    s4: [
      {
        serial: "1",
        title: "What is Section 4 Question 1?",
        content: "This is the answer to Section 4 Question 1.",
      },
      {
        serial: "2",
        title: "What is Section 4 Question 2?",
        content: "This is the answer to Section 4 Question 2.",
      },
    ],
    //
    //
    //
    //Questions for the FAQs can be changed here
  };

  const renderFAQs = (section) => {
    if (!section) return null;
    return <Accordion items={faqs[section]} />;
  };

  return (
    <div className="mx-auto my-24">
      <div className="h-[40rem] md:h-[30rem] lg:h-[27rem] w-5/6 absolute z-10 left-1/2 -translate-x-1/2 bg-white border-2 border-black rounded-3xl m-auto p-8">
        <div className="hidden md:block">
          <div className="w-[4.5rem] h-9 rounded-b-[2.25rem] bg-[#FE3D4D] border-2 border-black absolute -top-9 -left-4"></div>
          <div className="w-[4.5rem] h-9 rounded-t-[2.25rem] bg-[#FE3D4D] border-2 border-black absolute top-0 -left-4"></div>
          <div className="w-24 h-24 rounded-[3rem] bg-[#FE3D4D] border-2 border-black absolute -bottom-4 -right-8"></div>
          <div className="w-12 h-12 rounded-[1.5rem] bg-[#FE3D4D] border-2 border-black absolute -bottom-8 right-16"></div>
          <img
            className="w-24 hidden lg:block absolute right-16 top-4"
            src={QuestionMark} alt=""
          ></img>
          <img
            className="w-28 hidden lg:block absolute left-72 top-16"
            src={Arrow} alt=""
          ></img>
        </div>
        <div className="align-middle text-center text-3xl md:text-4xl lg:text-5xl font-black">
          FAQs
        </div>
        <div className="w-1/4 mt-5 h-2 bg-[#FFCDCD] mx-auto"> </div>
        <div className="h-12 my-2 mx-auto">
          <div className="faq-section w-3/4 lg:w-2/3 z-20 mx-auto mt-8">
            <div className="m-auto w-5/12 md:w-3/4 lg:w-2/3 flex md:flex-row flex-col gap-2 justify-between z-20">
              <button
                onClick={() => setSelectedSection("s1")}
                className={`px-2 py-1 lg:px-4 lg:py-2 border-2 border-black text-base lg:text-lg font-bold rounded-3xl transition-colors ${
                  selectedSection === "s1"
                    ? "bg-[#FE3D4D] text-white font-semibold shadow-sm shadow-black"
                    : "bg-[#FFCDCD] text-black font-bold"
                }`}
              >
                General
              </button>
              <button
                onClick={() => setSelectedSection("s2")}
                className={` px-2 py-1 lg:px-4 lg:py-2 border-2 border-black text-base lg:text-lg font-bold rounded-3xl transition-colors ${
                  selectedSection === "s2"
                    ? "bg-[#FE3D4D] text-white font-semibold shadow-sm shadow-black"
                    : "bg-[#FFCDCD] text-black font-bold"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setSelectedSection("s3")}
                className={` px-2 py-1 lg:px-4 lg:py-2 border-2 border-black text-base lg:text-lg font-bold rounded-3xl transition-colors ${
                  selectedSection === "s3"
                    ? "bg-[#FE3D4D] text-white font-semibold shadow-sm shadow-black"
                    : "bg-[#FFCDCD] text-black font-bold"
                }`}
              >
                Club Inductions
              </button>
              <button
                onClick={() => setSelectedSection("s4")}
                className={` px-2 py-1 lg:px-4 lg:py-2 border-2 border-black text-base lg:text-lg font-bold rounded-3xl transition-colors ${
                  selectedSection === "s4"
                    ? "bg-[#FE3D4D] text-white font-semibold shadow-sm shadow-black"
                    : "bg-[#FFCDCD] text-black font-bold"
                }`}
              >
                Events
              </button>
            </div>
            <div>{renderFAQs(selectedSection)}</div>
          </div>
        </div>
      </div>
      <div className="ml-4 mt-4 absolute left-1/2 -translate-x-1/2 z-0 h-[40rem] md:h-[30rem] lg:h-[27rem]  w-5/6 bg-black border-2 border-black rounded-3xl m-auto"></div>

      <div></div>
    </div>
  );
};

export default Faq;
