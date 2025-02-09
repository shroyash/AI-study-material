import React, { useState } from "react";
import Image from "next/image";

const Option = () => {
  const options = [
    { id: 1, img: "/img/code.png", title: "Exam" },
    { id: 2, img: "/img/job.png", title: "Job Interview" },
    { id: 3, img: "/img/practice.png", title: "Practice" },
    { id: 4, img: "/img/code.png", title: "Coding Prep" },
    { id: 5, img: "/img/content.png", title: "Others" },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="mt-12 md:mx-10">
      <p className="font-bold text-lg text-center mb-6">
        For which purpose do you want to create your personal study material?
      </p>
      <div className="md:flex md:justify-center ml-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-14">
          {options.map((option) => (
            <div
              key={option.id}
              className={`shadow-md p-4 border rounded-sm flex :flex-col md:items-center cursor-pointer transition-all ${
                selected === option.title ? "border-primary text-primary" : ""
              }`}
              onClick={() => setSelected(option.title)}
            >
              <Image src={option.img} alt={option.title} width={70} height={50} />
              <p className="text-xs font-bold mt-2">{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Option;
