import React, { useContext, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import AddressLocation from "./AddressLocation/AddressLocation";

const ThirdForm = ({ onChange }) => {
  const { formData, setFormData, errorMessage, updateErrorMessage } =
    useContext(MultiStepFormContext);
  const [tooglelocation, setToggleLocation] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
  const [fieldValidations, setFieldValidations] = useState({
    businessname: true,
    streetaddress1: true,
    city1: true,
    state1: true,
    pincode1: true,
    thirdphoneNo: true,
    businessWebsite: true,
  });

  const { currentStep, setCurrentStep } = useContext(MultiStepFormContext);

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^\d{3}-?\d{3}-?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleNext = () => {
    let isValid = true;
    const updatedValidations = { ...fieldValidations };

    Object.keys(updatedValidations).forEach((fieldName) => {
      const fieldValue = formData[fieldName];

      if (fieldName !== "streetaddress2") {
     
        if (
          !fieldValue ||
          (fieldName === "thirdphoneNo" && !isPhoneNumberValid(fieldValue))
        ) {
          isValid = false;
          updatedValidations[fieldName] = false;
        } else {
          updatedValidations[fieldName] = true;
        }
      }
    });

    setFieldValidations(updatedValidations);

    if (!isValid) {
      updateErrorMessage("Please Enter required fields data");
    } else {
      setCurrentStep(currentStep + 1);
      updateErrorMessage("");
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
          className={fieldValidations.businessname ? "clrinput" : "error"}
          value={formData?.businessname}
          onChange={handleInputChange}
          name="businessname"
        />
        <input
          type="text"
          placeholder="Street Address"
          required
          className={fieldValidations.streetaddress1 ? "clrinput" : "error"}
          value={formData?.streetaddress1}
          onChange={handleInputChange}
          name="streetaddress1"
        />
        <input
          type="text"
          placeholder="Street Address 2 (optional)"
          className={"clrinput"}
          value={formData?.streetaddress2}
          onChange={handleInputChange}
          name="streetaddress2"
        />
        <div>
          <input
            type="text"
            placeholder="city"
            className={fieldValidations.city1 ? "clrinput" : "error"}
            value={formData?.city1}
            onChange={handleInputChange}
            name="city1"
            required
          />
          <input
            type="text"
            placeholder="State"
            className={fieldValidations.state1 ? "clrinput" : "error"}
            value={formData?.state1}
            onChange={handleInputChange}
            name="state1"
            required
          />
          <input
            type="text"
            placeholder="Zip"
            className={fieldValidations.pincode1 ? "clrinput" : "error"}
            value={formData?.pincode1}
            onChange={handleInputChange}
            name="pincode1"
            required
          />
        </div>
      </div>

      <input
        type="text"
        placeholder="(201) 555-0123"
        className={fieldValidations.thirdphoneNo ? "clrinput" : "error"}
        value={formData?.thirdphoneNo}
        onChange={handleInputChange}
        name="thirdphoneNo"
        required
      />

      <input
        type="text"
        placeholder="Business Website"
        className={fieldValidations.businessWebsite ? "clrinput" : "error"}
        value={formData?.businessWebsite}
        onChange={handleInputChange}
        name="businessWebsite"
        required
      />

      <button
        className="AddLocation"
        onClick={() => setToggleLocation(!tooglelocation)}
      >
        + Add Location
      </button>

      {tooglelocation && (
        <>
          <AddressLocation number={1} />
          <AddressLocation number={2} />
          <AddressLocation number={3} />
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
