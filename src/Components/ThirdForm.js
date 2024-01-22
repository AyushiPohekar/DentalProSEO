import React, { useContext, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import Popup from "./Popup/Popup";

const ThirdForm = ({ onChange }) => {
  const { formData, setFormData, errorMessage, updateErrorMessage } =
    useContext(MultiStepFormContext);
  const [nextClicked, setNextClicked] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);
  const [openmodal, setOpenModal] = useState(false);
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
      // setCurrentStep(currentStep + 1);
      setOpenModal(true);
      setNextClicked(false);
      setInvalidFields([]);
      updateErrorMessage("");
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const closePopup = () => {
    setOpenModal(false);
    setCurrentStep(currentStep + 1);
  };
  const handleInputChange = (e) => {
    //console.log(e);
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    onChange({ [name]: value });
  };
  return (
    <div className="FirstFormDiv">
      <h1>Website Information</h1>

      <div className="FieldDiv">
        <div className="innerDiv">
          <label>
            How do you measure the success of your website/platform?
          </label>
          <input
            type="text"
            placeholder="Enter here..."
            required
            className={`${
              nextClicked && invalidFields.includes("success_of_your_website")
                ? "error"
                : "clrinput"
            }`}
            value={formData?.success_of_your_website || ""}
            onChange={handleInputChange}
            name="success_of_your_website"
          />
        </div>
        <div className="innerDiv">
          <label>
            Why do you think somebody who may land on your website does not
            convert?
          </label>
          <input
            type="text"
            placeholder="Enter here..."
            required
            className={`${
              nextClicked && invalidFields.includes("does_not_convert")
                ? "error"
                : "clrinput"
            }`}
            value={formData?.does_not_convert || ""}
            onChange={handleInputChange}
            name="does_not_convert"
          />
        </div>
        <div className="innerDiv">
          <label>
          Which actions on the website are most important to you? I.e. apart from calling to book an appointment, is there another action you want visitors to take when they visit your website?
          </label>
          <input
            type="text"
            placeholder="Enter here..."
            required
            className={`${
              nextClicked && invalidFields.includes("actions_most_imp")
                ? "error"
                : "clrinput"
            }`}
            value={formData?.actions_most_imp|| ""}
            onChange={handleInputChange}
            name="actions_most_imp"
          />
        </div>
        <div className="innerDiv">
          <label>
          Have you invested in any digital marketing activities in the past? This could include Google Adwords, Facebook Ads, etc. If so, please tell us why the investment was successful or not?
          </label>
          <input
            type="text"
            placeholder="Enter here..."
            required
            className={`${
              nextClicked && invalidFields.includes("invested_digitalmarketing_activities")
                ? "error"
                : "clrinput"
            }`}
            value={formData?.invested_digitalmarketing_activities || ""}
            onChange={handleInputChange}
            name="invested_digitalmarketing_activities"
          />
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
      {openmodal && <Popup onClose={closePopup} onNextStep={closePopup} />}
    </div>
  );
};

export default ThirdForm;
