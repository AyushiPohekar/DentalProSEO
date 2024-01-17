import React, { useContext, useState } from "react";
import "./AdressLocation.css";
import MultiStepContext from "../MultiStepFormContext";

const AddressLocation = (props) => {
  console.log(props)
  const { formData, setFormData} = useContext(MultiStepContext);
  const [nextClicked, setNextClicked] = useState(false);
  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    props.onChange({ [name]: value });
  };
  return (
    <>
      <div className="FirstFormDiv adressloactionDiv">
        <div className="locationtitle">
          <span>Location{props?.number}</span>
        </div>
        <input
          type="text"
          placeholder="Street Address"
          className={nextClicked ? "error" : "clrinput"}
          value={formData?.streetaddress_location && formData?.streetaddress_location[props?.number] || ""}

          onChange={handleInputChange}
          name={`streetaddress_location[${props?.number}]`}
        />
        <input
          type="text"
          placeholder="Street Address 1(optional)"
          className={nextClicked ? "error" : "clrinput"}
          value={formData?.streetaddress1_location[props?.number]||""}
          onChange={handleInputChange}
          name={`streetaddress1_location[${props?.number}]`}
        />
        <input
          type="text"
          placeholder="City"
          className={nextClicked ? "error" : "clrinput"}
          value={formData?.City_location[props?.number]||""}
          onChange={handleInputChange}
          name={`City_location[${props?.number}]`}
        />
        <input
          type="text"
          placeholder="State"
          className={nextClicked ? "error" : "clrinput"}
          value={formData?.State_location[props?.number]||""}
          onChange={handleInputChange}
          name={`State_location[${props?.number}]`}
        />
        <input
          type="text"
          placeholder="zip"
          className={nextClicked ? "error" : "clrinput"}
          value={formData?.Zip_location[props?.number]||""}
          onChange={handleInputChange}
          name={`Zip_location[${props?.number}]`}
        />
        <input
          type="text"
          placeholder="(201) 555-0123"
          className={nextClicked ? "error" : "clrinput"}
          value={formData?.number_location[props?.number]||""}
          onChange={handleInputChange}
          name={`number[${props?.number}]`}
        />
      </div>
    </>
  );
};

export default AddressLocation;
