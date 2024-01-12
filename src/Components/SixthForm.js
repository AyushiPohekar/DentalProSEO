import React, { useContext, useEffect, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import { useNavigate } from "react-router-dom";
import { FiRefreshCw } from "react-icons/fi";
const SixthForm = () => {
  const navigate = useNavigate();
  const [checkboxclicked, setCheckBoxClicked] = useState(false);
  const { currentStep, setCurrentStep } = useContext(MultiStepFormContext);
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

  const handleSubmit = () => {
    const expectedAnswer = randomNumbers.num1 + randomNumbers.num2;

    if (parseInt(userAnswer) === expectedAnswer) {
    
      setIsAnswerCorrect(true);
      

      // Move to the next route
      navigate("/success");
    } else {
      // User's answer is incorrect, handle accordingly (e.g., show an error message)
      setIsAnswerCorrect(false);
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
          <span className="termslink">
            <a
              href="https://onboarding.rankroverpro.com/terms-and-conditions-onboarding"
              target="_blank"
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
            <FiRefreshCw onClick={handleRefresh} className="refreshicon"/>
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
