"use client"
import React, { useState } from 'react'
import Option from './_components/Option'
import StudyForm from './_components/StudyForm'

const Page = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="createPage mx-5">
            <div className="title flex flex-col text-center mt-20">
                <h2 className="text-3xl font-bold text-primary">
                    Start Building Your Personal Study Material
                </h2>
                <p className="text-slate-500 text-[0.9em]">
                    Fill details in order to generate study material for your effective study.
                </p>
            </div>

            {/* Navigation Buttons */}
           

            {/* Conditional Rendering */}
            {step === 1 ? <Option /> : <StudyForm />}
            <div className="flex justify-between mx-10  gap-4 mt-36">
                <button
                    onClick={() => setStep((prev) => Math.max(1, prev - 1))}
                    disabled={step === 1}
                    className="px-4 py-2 border border-black rounded-md disabled:opacity-50"
                >
                    Previous
                </button>

                <button
                    onClick={() => setStep((prev) => Math.min(2, prev + 1))}
                    disabled={step === 2}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Page;
