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
      <h1 className="titlefirst">Practice Information</h1>

      <div className="FieldDiv">
        <div className="innerDiv">
          <label>Please provide a brief description about your practice.</label>
          <input
            type="text"
            placeholder="Enter here..."
            required
            className={`${
              nextClicked && invalidFields.includes("brief_description")
                ? "error"
                : "clrinput"
            }`}
            value={formData?.brief_description || ""}
            onChange={handleInputChange}
            name="brief_description"
          />
        </div>
        <div className="innerDiv">
          <label>
            Provide details about the main services that you provide at your
            practice. Please feel free to include links if descriptions are on
            your website.
          </label>
          <input
            type="text"
            placeholder="Enter here..."
            required
            className={`${
              nextClicked && invalidFields.includes("main_services")
                ? "error"
                : "clrinput"
            }`}
            value={formData?.main_services}
            onChange={handleInputChange}
            name="main_services"
          />
        </div>
        <div className="innerDiv">
          <label>
            Which markets do you operate in (please provide specific locations -
            city and state)?
          </label>
          <input
            type="text"
            placeholder="Location"
            required
            className={`${
              nextClicked && invalidFields.includes("operation_market_location")
                ? "error"
                : "clrinput"
            }`}
            value={formData?.operation_market_location}
            onChange={handleInputChange}
            name="operation_market_location"
          />
          <div className="moreinnerdiv">
            <input
              type="text"
              placeholder="City"
              required
              className={`${
                nextClicked && invalidFields.includes("operation_market_city")
                  ? "error"
                  : "clrinput"
              }`}
              value={formData?.operation_market_city}
              onChange={handleInputChange}
              name="operation_market_city"
            />
            <input
              type="text"
              placeholder="State"
              required
              className={`${
                nextClicked && invalidFields.includes("operation_market_state")
                  ? "error"
                  : "clrinput"
              }`}
              value={formData?.operation_market_state}
              onChange={handleInputChange}
              name="operation_market_state"
            />
            <input
              type="text"
              placeholder="Zip"
              required
              className={`${
                nextClicked &&
                invalidFields.includes("operation_market_pincode")
                  ? "error"
                  : "clrinput"
              }`}
              value={formData?.operation_market_pincode}
              onChange={handleInputChange}
              name="operation_market_pincode"
            />
          </div>
        </div>
        <div className="innerDiv">
        <label>Are there any seasonal trends that affect your business?</label>
        <input
            type="text"
            placeholder="Enter here..."
            required
            className={`${
              nextClicked && invalidFields.includes("seasonal_trends")
                ? "error"
                : "clrinput"
            }`}
            value={formData?.seasonal_trends}
            onChange={handleInputChange}
            name="seasonal_trends"
          />
        </div>
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
