"use client";

import { useState } from "react";

const StudyForm = () => {
  const [formData, setFormData] = useState({
    topic: "",
    difficulty: "Difficult",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <div className="studyForm mt-20 flex flex-col items-center">
      <form className="w-full max-w-lg">
        <label className="text-[0.9em] font-bold">
          Enter topic or paste the content for which you want to generate study material
        </label><br />
        
        <textarea
          className="border-2 border-black rounded-md my-2 w-full p-2"
          name="topic"
          id="topic"
          rows={3}
          value={formData.topic}
          onChange={handleChange}
        ></textarea><br />

        <label className="text-[0.9em] font-bold mt-4 mb-4">
          Select the difficulty Level
        </label><br />

        <select
          className="mt-3 border-2 border-black rounded-md p-2 w-full"
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="Difficult">Difficult Level</option>
          <option value="Medium">Medium Level</option>
          <option value="Easy">Easy Level</option>
        </select><br />

        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudyForm;
