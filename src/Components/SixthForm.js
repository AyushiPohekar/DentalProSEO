import React, { useContext, useEffect, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import { useNavigate } from "react-router-dom";
import { FiRefreshCw } from "react-icons/fi";
import axios from "axios";

const SixthForm = () => {
  const navigate = useNavigate();
  const [checkboxclicked, setCheckBoxClicked] = useState(false);
  const { formData, currentStep, setCurrentStep } =
    useContext(MultiStepFormContext);
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

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

  // const handleSubmit = async () => {
  //   const expectedAnswer = randomNumbers.num1 + randomNumbers.num2;

  //   if (parseInt(userAnswer) === expectedAnswer) {
  //     setIsAnswerCorrect(true);
  //     const updatedFormData = { ...formData };
  //     // updatedFormData = {
  //     //   ...updatedFormData,
  //     //   newKey3: 'value3',
  //     //   newKey4: 'value4'
  //     // };

  //     updatedFormData.masterId = "123";
  //     updatedFormData.childMasterId = "123";
  //     updatedFormData.pdf =
  //       "https://onboarding.rankroverpro.com/terms-and-conditions-onboarding";

  //           const formDataObject = new FormData();
  //           Object.keys(updatedFormData).forEach((key) => {
  //             formDataObject.append(key, updatedFormData[key]);
  //           });
  //     // console.log(formDataObject)
  //     // console.log(updatedFormData);
  //     try {
  //       const response = await fetch("http://localhost:3001/rmployee/create", {
  //         method: "POST",
  //         body: formDataObject,
  //       });

  //       if (response.ok) {
  //         alert("Form submitted successfully!");

  //         navigate("/success");
  //       } else {
  //         console.error("Failed to submit the form");
  //       }
  //     } catch (error) {
  //       console.error("Error occurred while submitting the form", error);
  //     }
  //   } else {
  //     setIsAnswerCorrect(false);
  //     alert("Incorrect captcha");
  //   }
  // };

  const handleSubmit = async () => {
    const expectedAnswer = randomNumbers.num1 + randomNumbers.num2;

    if (parseInt(userAnswer) === expectedAnswer) {
      setIsAnswerCorrect(true);

      const updatedFormData = { ...formData };
      updatedFormData.masterId = "123";
      updatedFormData.childMasterId = "123";
      updatedFormData.pdf =
        "https://onboarding.audiologyplus.com/terms-and-conditions-onboarding";

      const formDataObject = new FormData();
      Object.keys(updatedFormData).forEach((key) => {
        formDataObject.append(key, updatedFormData[key]);
      });
     console.log(updatedFormData)
      try {
        const response = await axios.post(
          "http://localhost:3001/rmployee/create",
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
    <div>
      <p className="para">
        Thank you for completing our Onboarding Form. Our team will review and
        be in touch on next steps. We are excited to have you join the RankRover
        Pro family.
      </p>
      <div className="checkboxdiv">
        <input
          type="checkbox"
          onClick={() => setCheckBoxClicked(!checkboxclicked)}
        />
        <p>
          By electronically executing this agreement, you agree to all of the
          above
          <span >
            <a
              href="https://onboarding.audiologyplus.com/terms-and-conditions-onboarding"
              target="_blank"
              className="termslink"
            >
              terms and conditions
            </a>
          </span>
        </p>
      </div>
      {checkboxclicked && (
        <>
          <div className="quizdiv">
            <img
              src="https://onboarding.rankroverpro.com/img/secure.png"
              className="verifydiv"
            />
            <p>
              To verify your identity, please solve the following problem and
              provide your answer in the space provided.
            </p>
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
        </>
      )}
    </div>
  );
};

export default SixthForm;
