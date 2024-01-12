import React, { useContext, useState } from "react";
import "./Firstform.css";

import MultiStepFormContext from "./MultiStepFormContext";

const FourthForm = ({ onChange }) => {
  const { formData, setFormData, errorMessage, updateErrorMessage } =
    useContext(MultiStepFormContext);
  const [nextClicked, setNextClicked] = useState(false);

  const { currentStep, setCurrentStep } = useContext(MultiStepFormContext);
  const [fieldValidations, setFieldValidations] = useState({
    domain: true,
    googleaccount: true,
  });

  const handleNext = () => {
    let isValid = true;
    const updatedValidations = { ...fieldValidations };

    Object.keys(updatedValidations).forEach((fieldName) => {
      const fieldValue = formData[fieldName];

      if (!fieldValue) {
        isValid = false;
        updatedValidations[fieldName] = false;
      } else {
        updatedValidations[fieldName] = true;
      }
    });

    setFieldValidations(updatedValidations);

    if (!isValid) {
      setNextClicked(true);
      updateErrorMessage("Please Enter required fields data");
    } else {
      setCurrentStep(currentStep + 1);
      setNextClicked(false);
      updateErrorMessage("");
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    onChange({ [name]: value });
  };
  return (
    <div className="FirstFormDiv">
      <h1>Domain & Google My Business</h1>

      <div className="FieldDiv">
        <div>
          What hosting provider currently hosts your domain (GoDaddy, DreamHost,
          etc)? Our team will be in touch to gain access to your domain.
        </div>
        <input
          type="text"
          placeholder="Domain"
          required
          className={fieldValidations.domain ? "clrinput" : "error"}
          value={formData?.domain}
          onChange={handleInputChange}
          name="domain"
        />
        <div>
          What is the email that is associated with your Google Account? Our
          team will be in touch to gain access to your Google for analytics, Tag
          Manager, Google Search Console, etc.
        </div>
        <input
          type="text"
          placeholder="Google Account"
          required
          className={fieldValidations.googleaccount ? "clrinput" : "error"}
          value={formData?.googleaccount}
          onChange={handleInputChange}
          name="googleaccount"
        />
      </div>

      <div className="btns">
        <button className="prev" onClick={handlePrev}>
          prev
        </button>
        <button className="next" onClick={handleNext}>
          next
        </button>
      </div>
    </div>
  );
};

export default FourthForm;
