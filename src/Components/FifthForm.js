import React, { useContext, useState } from "react";
import { Steps } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";
import Popup from "./Popup/Popup";

const { Step } = Steps;

const FifthForm = ({onChange}) => {
  const { formData, setFormData,errorMessage, updateErrorMessage } = useContext(MultiStepFormContext);
  const [nextClicked, setNextClicked] = useState(false);
  const [openmodal, setOpenModal] = useState(false);
  const { currentStep, setCurrentStep } = useContext(MultiStepFormContext);

  const handleNext = () => {
    const formInputs = document.querySelectorAll(".FieldDiv input");
    let isValid = true;

    formInputs.forEach((input) => {
      if (input.hasAttribute("required") && !input.validity.valid) {
        isValid = false;
      }
    });

    if (!isValid) {
      setNextClicked(true);
      updateErrorMessage("Please Enter required fields data");
    } else {
      setOpenModal(true);
      updateErrorMessage("");
      //setCurrentStep(currentStep + 1);
      //setNextClicked(false);
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
    console.log(e);
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    onChange({ [name]: value });
  };
  return (
    <div className="FirstFormDiv">
      <h1>Logo</h1>

      <div>
        Please upload the logo for your practice. Accepted file formats include
        .jpeg and .png. If you do not have a logo, or have it in an accepted
        file format, please skip this section for now and email the file to us
        at support@rankroverpro.com
      </div>
      <div>
        <h1>Upload Image</h1>
        <input
          type="file"
          className="fileinput"
          value={formData?.file}
          onChange={handleInputChange}
          name="file"
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

      {openmodal && <Popup onClose={closePopup} onNextStep={closePopup} />}
    </div>
  );
};

export default FifthForm;
