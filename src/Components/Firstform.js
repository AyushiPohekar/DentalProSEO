import React, { useContext, useEffect, useState } from "react";
import "./Firstform.css";

import MultiStepFormContext from "./MultiStepFormContext";

const Firstform = ({ onChange }) => {
  const { formData, setFormData, errorMessage, updateErrorMessage } =
    useContext(MultiStepFormContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    onChange({ [name]: value });
  };

  const [nextClicked, setNextClicked] = useState(false);
  const { currentStep, setCurrentStep } = useContext(MultiStepFormContext);
  const [invalidFields, setInvalidFields] = useState([]);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^\d{3}-?\d{3}-?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleNext = () => {
    const formInputs = document.querySelectorAll(".FieldDiv input");
    let isValid = true;
    let invalidFieldsArray = [];

    formInputs.forEach((input) => {
      const { name, validity, value } = input;

      if (input.hasAttribute("required") && !validity.valid) {
        isValid = false;
        invalidFieldsArray.push(name);
      } else if (
        (name === "primary_useremail" && !isEmailValid(value)) ||
        (name === "primary_mobilenumber" && !isPhoneNumberValid(value))
      ) {
        isValid = false;
        invalidFieldsArray.push(name);
      }
    });

    if (!isValid) {
      setNextClicked(true);
      setInvalidFields(invalidFieldsArray);
      updateErrorMessage("Please Enter required fields data");
    } else {
      setCurrentStep(currentStep + 1);
      setNextClicked(false);
      setInvalidFields([]);
      updateErrorMessage("");
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="FirstFormDiv">
      <h1 className="titlefirst">Primary Contact</h1>
      <div>
        Please enter the contact information for the primary person who will
        manage and oversee your RankRover Pro onboarding. This contact will have
        administrative access to all aspects of our service and be the person we
        communicate with most frequently.
      </div>
      <div className="FieldDiv">
        <input
          type="text"
          placeholder="Primary Contact name"
          required
          className={`${
            nextClicked && invalidFields.includes("primary_contactname")
              ? "error"
              : "clrinput"
          }`}
          value={formData?.primary_contactname || ""}
          onChange={handleInputChange}
          name="primary_contactname"
        />
        <input
          type="text"
          placeholder="Primary Contact email"
          required
          className={`${
            nextClicked && invalidFields.includes("primary_useremail")
              ? "error"
              : "clrinput"
          }`}
          value={formData?.primary_useremail}
          onChange={handleInputChange}
          name="primary_useremail"
        />
        <input
          type="number"
          placeholder="(201) 555-0123"
          required
          className={`${
            nextClicked && invalidFields.includes("primary_mobilenumber")
              ? "error"
              : "clrinput"
          }`}
          value={formData?.primary_mobilenumber}
          onChange={handleInputChange}
          name="primary_mobilenumber"
        />
        <input
          type="text"
          placeholder="Position"
          required
          className={`${
            nextClicked && invalidFields.includes("primary_position")
              ? "error"
              : "clrinput"
          }`}
          value={formData?.primary_position}
          onChange={handleInputChange}
          name="primary_position"
        />
      </div>

      <div className="btns">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className={currentStep === 0 ? "disbledbtn" : "prev"}
        >
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Firstform;
