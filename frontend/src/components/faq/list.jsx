import React, { useState } from "react";

const AccordionItem = ({ title, content, serial }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex flex-col my-10 mx-auto w-2/3">
      <div className=" flex flex-row justify-between" onClick={toggleAccordion}>
        <div className=" flex flex-row">
          <h2 className=" font-bold text-base md:text-lg lg:text-xl">
            {serial}
          </h2>
          <h3 className=" font-bold text-base md:text-lg lg:text-xl px-3">
            {title}
          </h3>
        </div>
        <div className=" font-bold text-base md:text-lg lg:text-xl px-3 cursor-pointer">
          {isOpen ? "-" : "+"}
        </div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p className=" font-semibold text-base md:text-xl px-3">{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          serial={item.serial}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
