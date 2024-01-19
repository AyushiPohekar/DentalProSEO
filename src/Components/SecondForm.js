import React, { useContext, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";

const SecondForm = ({ onChange }) => {
  const { formData, setFormData, errorMessage, updateErrorMessage } =
    useContext(MultiStepFormContext);

  const [nextClicked, setNextClicked] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);
  const { currentStep, setCurrentStep } = useContext(MultiStepFormContext);

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
      }

      if (name === "leadEmail" && !isEmailValid(value)) {
        isValid = false;
        invalidFieldsArray.push(name);
      }

      if (name === "leadmobilenumber" && !isPhoneNumberValid(value)) {
        isValid = false;
        invalidFieldsArray.push(name);
      }
    });

    if (!isValid) {
      setNextClicked(true);
      setInvalidFields(invalidFieldsArray);
      updateErrorMessage("Please Enter required fields data");

      formInputs.forEach((input) => {
        const { name } = input;
        input.classList.toggle("error", invalidFieldsArray.includes(name));
        input.classList.toggle("clrinput", !invalidFieldsArray.includes(name));
      });
    } else {
      setCurrentStep(currentStep + 1);
      setNextClicked(false);
      setInvalidFields([]);
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
    <>
      <h1>Lead Notifications</h1>
      <div>
        Please enter the contact details where new patient lead notifications
        should be sent. This contact should monitor their email constantly and
        be responsible for following up on any appointment inquiries in a timely
        fashion. Only one email can be connected at a time but can be changed at
        any point.
      </div>
      <div className="FieldDiv">
        <input
          type="text"
          placeholder="name"
          required
          className={`${
            nextClicked && invalidFields.includes("leadname") ? "error" : "clrinput"
          }`}
          value={formData?.leadname}
          name="leadname"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="email"
          required
          className={`${
            nextClicked && invalidFields.includes("leadEmail") ? "error" : "clrinput"
          }`}
          value={formData?.leadEmail}
          name="leadEmail"
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="(201) 555-0123"
          required
          className={`${
            nextClicked && invalidFields.includes("leadmobilenumber") ? "error" : "clrinput"
          }`}
          value={formData?.leadmobilenumber}
          name="leadmobilenumber"
          onChange={handleInputChange}
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
    </>
  );
};

export default SecondForm;
