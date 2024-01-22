import React, { useContext, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";

const SecondForm = ({ onChange }) => {
  const { formData, setFormData, errorMessage, updateErrorMessage } =
    useContext(MultiStepFormContext);

  const [nextClicked, setNextClicked] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);
  const { currentStep, setCurrentStep } = useContext(MultiStepFormContext);

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
      <h1>Customers & Competition</h1>

      <div className="FieldDiv">
        <div className="innerDiv">
          <label>
            Who are your ideal customers? Please define your target audience.
          </label>
          <input
            type="text"
            placeholder="Enter here..."
            required
            className={`${
              nextClicked && invalidFields.includes("ideal_customers")
                ? "error"
                : "clrinput"
            }`}
            value={formData?.ideal_customers || ""}
            onChange={handleInputChange}
            name="ideal_customers"
          />
        </div>
        <div className="innerDiv">
          <label>Why do your best customers choose you?</label>
          <input
            type="text"
            placeholder="Enter here..."
            required
            className={`${
              nextClicked && invalidFields.includes("why_customers_choose")
                ? "error"
                : "clrinput"
            }`}
            value={formData?.why_customers_choose || ""}
            onChange={handleInputChange}
            name="why_customers_choose"
          />
        </div>
        <div className="innerDiv">
          <label>What makes you different from your competitors?</label>
          <input
            type="text"
            placeholder="Enter here..."
            required
            className={`${
              nextClicked && invalidFields.includes("what_makes_you_diff")
                ? "error"
                : "clrinput"
            }`}
            value={formData?.what_makes_you_diff || ""}
            onChange={handleInputChange}
            name="what_makes_you_diff"
          />
        </div>
        <div className="innerDiv">
          <label>
            Who are your main competitors? Please share their website URLs, if
            possible.
          </label>
          <div className="secondforminnerdiv">
            <input
              type="text"
              placeholder="Enter here..."
              required
              className={`${
                nextClicked && invalidFields.includes("main_competitors")
                  ? "error"
                  : "clrinput"
              }`}
              value={formData?.main_competitors || ""}
              onChange={handleInputChange}
              name="main_competitors"
            />
            <input
              type="text"
              placeholder="Enter here..."
              required
              className={`${
                nextClicked && invalidFields.includes("main_competitors_url")
                  ? "error"
                  : "clrinput"
              }`}
              value={formData?.main_competitors_url || ""}
              onChange={handleInputChange}
              name="main_competitors_url"
            />
          </div>
        </div>
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
