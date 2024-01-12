import React, { useContext, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";



const SecondForm = ({onChange}) => {
  const{formData, setFormData,errorMessage, updateErrorMessage}=useContext(MultiStepFormContext)
  const [nextClicked, setNextClicked] = useState(false);
  const { currentStep, setCurrentStep } = useContext(MultiStepFormContext);
 
  const handleNext = () => {
    const formInputs = document.querySelectorAll(".FieldDiv input");
    let isValid = true;

    const isEmailValid = (email) => {
   
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const isPhoneNumberValid = (phoneNumber) => {
  
      const phoneRegex = /^\d{3}-?\d{3}-?\d{4}$/;
      return phoneRegex.test(phoneNumber);
    };

    formInputs.forEach((input) => {
      if (input.hasAttribute("required") && !input.validity.valid) {
        isValid = false;
      }
    });
    if (!isEmailValid(formData.ContactEmail)) {
      isValid = false;
    }
  
    if (!isPhoneNumberValid(formData.ContactNumber)) {
      isValid = false;
    }

    if (!isValid) {
      setNextClicked(true);
      updateErrorMessage("Please Enter required fields data");
    } else {
      setCurrentStep(currentStep + 1);
      setNextClicked(true);
      updateErrorMessage("");
    }
  };
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleInputChange = (e) => {
    console.log(e)
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
          className={nextClicked ? "error" : "clrinput"}
          value={formData?.leadName}
          name="leadName"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="email"
          required
          className={nextClicked ? "error" : "clrinput"}
          value={formData?.leadEmail}
          name="leadEmail"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="(201) 555-0123"
          required
          className={nextClicked ? "error" : "clrinput"}
          value={formData?.leadContact}
          name="leadContact"
          onChange={handleInputChange}
        />
      </div>

      <div className="btns">
        <button className="prev" onClick={handlePrev}>prev</button>
        <button className="next" onClick={handleNext}>
          next
        </button>
      </div>
    </>
  );
};

export default SecondForm;
