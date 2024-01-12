import React, { useContext, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import AddressLocation from "./AddressLocation/AddressLocation";

const ThirdForm = ({ onChange }) => {
  const { formData, setFormData,errorMessage, updateErrorMessage} = useContext(MultiStepFormContext);
  const [tooglelocation, setToggleLocation] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

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
      setCurrentStep(currentStep + 1);
      setNextClicked(false);
      updateErrorMessage("Please Enter required fields data");
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    onChange({ [name]: value });
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
          placeholder="Business name"
          required
          className={nextClicked ? "error" : "clrinput"}
          value={formData?.businessname}
          onChange={handleInputChange}
          name="businessname"
        />
        <input
          type="text"
          placeholder="Street Address"
          required
          className={nextClicked ? "error" : "clrinput"}
          value={formData?.streetadd}
          onChange={handleInputChange}
          name="streetadd"
        />
        <input
          type="text"
          placeholder="Street Address 2 (optional)"
          className={nextClicked ? "error" : "clrinput"}
          value={formData?.streetadd2}
          onChange={handleInputChange}
          name="streetadd2"
        />
        <div>
          <input
            type="text"
            placeholder="city"
            className={nextClicked ? "error" : "clrinput"}
            value={formData?.city}
            onChange={handleInputChange}
            name="city"
          />
          <input
            type="text"
            placeholder="State"
            className={nextClicked ? "error" : "clrinput"}
            value={formData?.State}
            onChange={handleInputChange}
            name="State"
          />
          <input
            type="text"
            placeholder="Zip"
            className={nextClicked ? "error" : "clrinput"}
            value={formData?.primaryzip}
            onChange={handleInputChange}
            name="primaryzip"
          />
        </div>
      </div>

      <input
        type="text"
        placeholder="(201) 555-0123"
        className={nextClicked ? "error" : "clrinput"}
        value={formData?.primarycontact}
        onChange={handleInputChange}
        name="primarycontact"
      />

      <input
        type="text"
        placeholder="Business Website"
        className={nextClicked ? "error" : "clrinput"}
        value={formData?.businessWebsite}
        onChange={handleInputChange}
        name="businessWebsite"
      />

      <button
        className="AddLocation"
        onClick={() => setToggleLocation(!tooglelocation)}
      >
        + Add Location
      </button>

      {tooglelocation && (
        <>
          <AddressLocation number={1}/>
          <AddressLocation number={2}/>
          <AddressLocation number={3}/>
        </>
      )}

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

export default ThirdForm;
