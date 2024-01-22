import React, { useEffect, useState } from "react";
import Firstform from "./Firstform";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import { Steps } from "antd";
import { Provider } from "./MultiStepFormContext";
import FourthForm from "./FourthForm";

import "./MultiStepForm.css"
const { Step } = Steps;

const MultiStepForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const updateErrorMessage = (message) => {
    setErrorMessage(message);
  };
  
  const [formData, setFormData] = useState();
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === stepComponents.length - 1) {
      setCurrentStep(0);
      setFormData();
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const prev = () => setCurrentStep(currentStep - 1);

  const handleFormChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  const stepComponents = [
    Firstform,
    SecondForm,
    ThirdForm,
    FourthForm
  ];

  return (
    <Provider
      value={{
        formData,
        setFormData,
        next,
        prev,
        currentStep,
        setCurrentStep,
        errorMessage,
        updateErrorMessage,
      }}
    >
      <Steps current={currentStep} className="StepDiv">
        {stepComponents.map((_, index) => (
          <Step
            key={index}
            className={`custom-step ${
              currentStep === index ? "custom-step-current" : ""
            }`}
          />
        ))}
      </Steps>
      <div className="errorMessage">{errorMessage}</div>
      <main>
        {React.createElement(stepComponents[currentStep], {
          onChange: handleFormChange,
        })}
      </main>
    </Provider>
  );
};

export default MultiStepForm;
