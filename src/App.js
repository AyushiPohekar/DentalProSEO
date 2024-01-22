import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MultiStepForm from "./Components/MultiStepForm";
import Rankover from "./Components/Rankroverdiv/Rankover";
import FormSubmiitted from "./Components/formsubmitted/FormSubmiitted";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <div className="Rankroverdiv">
        <Rankover />
      </div>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<FormSubmiitted />} />
      </Routes>

      <div className="footer">
        Copyright © 2024 Dentapro Digital. All rights Reserved.
      </div>
    </div>
  );
}

export default App;
