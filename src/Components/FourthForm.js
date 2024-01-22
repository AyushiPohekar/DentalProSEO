import React, { useContext, useEffect, useState } from "react";
import "./Firstform.css";
import { FiRefreshCw } from "react-icons/fi";

import MultiStepFormContext from "./MultiStepFormContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FourthForm = ({ onChange }) => {
  const navigate = useNavigate();

  const { formData, setFormData, errorMessage, updateErrorMessage } =
    useContext(MultiStepFormContext);
  const [nextClicked, setNextClicked] = useState(false);

  const { currentStep, setCurrentStep } = useContext(MultiStepFormContext);
  const [randomNumbers, setRandomNumbers] = useState({});
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const generateRandomNumbers = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setRandomNumbers({ num1, num2 });
  };

  const handleRefresh = () => {
    generateRandomNumbers();
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    onChange({ [name]: value });
  };

  const handleSubmit = async () => {
    const expectedAnswer = randomNumbers.num1 + randomNumbers.num2;

    if (parseInt(userAnswer) === expectedAnswer) {
      setIsAnswerCorrect(true);

      const updatedFormData = { ...formData };
      updatedFormData.masterId = "123";
      updatedFormData.childMasterId = "123";


    
     console.log(updatedFormData)
      try {
        const response = await axios.post(
          "http://localhost:3001/ppc-rankrover/create",
         updatedFormData
        );

        if (response.status===201) {
           alert("Form submitted successfully!");

           navigate("/success");
        } else {
          console.error("Failed to submit the form");
        }
      } catch (error) {
        console.error("Error occurred while submitting the form", error);
      }
    } else {
      setIsAnswerCorrect(false);
      alert("Incorrect captcha");
    }
  };

 
  return (
    <div className="FirstFormDiv">
      <h1>SEO</h1>

      <div className="FieldDiv">
        <div className="innerDiv">
          <label>
          Has your website been optimized for SEO in the past? If yes, please describe how it was optimized i.e. via an agency, and any details on what they worked on in terms of SEO.
          </label>
          <input
            type="text"
            placeholder="Enter here..."
            required
            className='clrinput'
            value={formData?.web_optimisedbyseo || ""}
            onChange={handleInputChange}
            name="web_optimisedbyseo"
          />
        </div>
        <div className="innerDiv">
          <label>
          For optimization purposes, please provide target keywords or phrases that pertain to the business and industry. This list does not have to be exhaustive for now.
          </label>
          <input
            type="text"
            placeholder="Enter here..."
            required
            className='clrinput'
            value={formData?.optimisation_target_keys || ""}
            onChange={handleInputChange}
            name="optimisation_target_keys"
          />
        </div>
        <div className="innerDiv">
          <label>
          If applicable, please share any reporting, keyword research, and audit information from previous companies you've worked with for SEO.
          </label>
          <input
            type="text"
            placeholder="Enter here..."
            required
            className='clrinput'
            value={formData?.reporting_keyword_auditinfo || ""}
            onChange={handleInputChange}
            name="reporting_keyword_auditinfo"
          />
        </div>
      </div>

      <div className="randomdiv">
            <span className="randomnumspan">
              {randomNumbers.num1} + {randomNumbers.num2} = ?
            </span>
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <FiRefreshCw onClick={handleRefresh} className="refreshicon" />
          </div>

          <div className="btndiv">
            <button className="Submitbtn" onClick={handleSubmit}>
              Submit
            </button>
          </div>

          <div className="btns">
            <button className="prev" onClick={handlePrev}>
              prev
            </button>
            <button className="next disbledbtn" disabled>
              next
            </button>
          </div>
    </div>
  );
};

export default FourthForm;
