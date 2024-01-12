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
  const [fieldValidations, setFieldValidations] = useState({
    primary_contactname: true,
    primary_mobilenumber: true,
    primary_useremail: true,
    primary_position: true,
  });

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^\d{3}-?\d{3}-?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  // const handleNext = () => {
  //   const formInputs = document.querySelectorAll(".FieldDiv input");
  //   let isValid = true;

  //   formInputs.forEach((input) => {
  //     if (input.hasAttribute("required") && !input.validity.valid) {
  //       isValid = false;
  //     }

  //   });
  //   // if (!isEmailValid(formData.primary_useremail)) {
  //   //   isValid = false;
  //   // }

  //   // if (!isPhoneNumberValid(formData.primary_mobilenumber)) {
  //   //   isValid = false;
  //   // }

  //   if (!isValid) {
  //     setNextClicked(true);
  //     updateErrorMessage("Please Enter required fields data");
  //   } else {
  //     setCurrentStep(currentStep + 1);
  //     setNextClicked(false);
  //     updateErrorMessage("");
  //   }
  // };

  const handleNext = () => {
    const formInputs = document.querySelectorAll(".FieldDiv input");
    let isValid = true;
    let updatedFields = {};

    formInputs.forEach((input) => {
      const { name, validity, value } = input;

      if (input.hasAttribute("required") && !validity.valid) {
        isValid = false;
        updatedFields[name] = true;
      } else if (name === "primary_useremail" && !isEmailValid(value)) {
        isValid = false;
        updatedFields[name] = true;
      } else if (
        name === "primary_mobilenumber" &&
        !isPhoneNumberValid(value)
      ) {
        isValid = false;
        updatedFields[name] = true;
      } else {
        updatedFields[name] = false;
      }
    });

    if (!isValid) {
      setNextClicked(true);
      updateErrorMessage("Please Enter required fields data");
    } else {
      setCurrentStep(currentStep + 1);
      setNextClicked(false);
      updateErrorMessage("");
    }

    formInputs.forEach((input) => {
      const { name } = input;
      input.classList.toggle("error", updatedFields[name]);
      input.classList.toggle("clrinput", !updatedFields[name]);
    });
  };

  // const handleNext = () => {
  //   let isValid = true;
  //   const updatedValidations = { ...fieldValidations };

  //   Object.keys(updatedValidations).forEach((fieldName) => {
  //     const fieldValue = formData[fieldName];

  //     if (
  //       fieldName !== " primary_contactname" &&
  //       fieldName !== "primary_position"
  //     ) {

  //       if (
  //         !fieldValue ||
  //         (fieldName === " primary_mobilenumber" &&
  //           !isPhoneNumberValid(fieldValue))
  //       ) {
  //         isValid = false;
  //         updatedValidations[fieldName] = false;
  //       }
  //       if (
  //         !fieldValue ||
  //         (fieldName === " primary_useremail" && !isEmailValid(fieldValue))
  //       ) {
  //         isValid = false;
  //         updatedValidations[fieldName] = false;
  //       } else {
  //         updatedValidations[fieldName] = true;
  //       }
  //     }
  //   });

  //   setFieldValidations(updatedValidations);

  //   if (!isValid) {
  //     updateErrorMessage("Please Enter required fields data");
  //   } else {
  //     setCurrentStep(currentStep + 1);
  //     updateErrorMessage("");
  //   }
  // };

  // const handleNext = () => {
  //   let isValid = true;
  //   const updatedValidations = { ...fieldValidations };

  //   Object.keys(updatedValidations).forEach((fieldName) => {
  //     const fieldValue = formData[fieldName];

  //     if (
  //       fieldName !=="primary_contactname" &&
  //       fieldName !=="primary_position"
  //     ) {
  //       if (
  //         !fieldValue ||
  //         (fieldName === "primary_mobilenumber" &&
  //           !isPhoneNumberValid(fieldValue))
  //       ) {
  //         isValid = false;
  //         updatedValidations[fieldName] = false;
  //       }
  //       if (
  //         !fieldValue ||
  //         (fieldName === "primary_useremail" && !isEmailValid(fieldValue))
  //       ) {
  //         isValid = false;
  //         updatedValidations[fieldName] = false;
  //       } else {
  //         updatedValidations[fieldName] = true;
  //       }
  //     } else if (fieldName === "primary_position" && !fieldValue?.trim()) {
  //       isValid = false;
  //       updatedValidations[fieldName] = false;
  //     } else {
  //       updatedValidations[fieldName] = true;
  //     }
  //   });

  //   setFieldValidations(updatedValidations);

  //   if (!isValid) {
  //     updateErrorMessage("Please Enter required fields data");
  //   } else {
  //     setCurrentStep(currentStep + 1);
  //     updateErrorMessage("");
  //   }
  // };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="FirstFormDiv">
      <h1>Primary Contact</h1>
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
          className={
          nextClicked ? "error":"clrinput"
          }
          value={formData?.primary_contactname||""}
          onChange={handleInputChange}
          name="primary_contactname"
        />
        <input
          type="text"
          placeholder="Primary Contact email"
          required
          className={fieldValidations.primary_useremail ? "clrinput" : "error"}
          value={formData?.primary_useremail}
          onChange={handleInputChange}
          name="primary_useremail"
        />
        <input
          type="text"
          placeholder="(201) 555-0123"
          required
          className={
            fieldValidations.primary_mobilenumber ? "clrinput" : "error"
          }
          value={formData?.primary_mobilenumber}
          onChange={handleInputChange}
          name="primary_mobilenumber"
        />
        <input
          type="text"
          placeholder="Position"
          required
          className={fieldValidations.primary_position ? "clrinput" : "error"}
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
          next
        </button>
      </div>
    </div>
  );
};

export default Firstform;
