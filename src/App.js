import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import MultiStepForm from "./Components/MultiStepForm";
import Rankover from "./Components/Rankroverdiv/Rankover";
import FormSubmiitted from "./Components/formsubmitted/FormSubmiitted";
import Form from "./Components/Form";
import Terms from "./Components/TermsAndconditions/Terms";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isTermsPage = location.pathname === "/terms";
  return (
    <div className="App">
      {/* <div className="Rankroverdiv">
      <Rankover />


      </div> */}
           {!isTermsPage && (
        <div className="Rankroverdiv">
          <Rankover />
        </div>
      )}

   

    
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/success" element={<FormSubmiitted/>} />
          <Route path="/terms" element={<Terms/>} />
        </Routes>
     

      <div className="footer">Copyright © 2024 Auxo Innovations. All rights Reserved.</div>
    </div>
  );
}

export default App;


