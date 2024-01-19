import React from 'react'
import MultiStepForm from './MultiStepForm'
import "../App.css"

const Form = () => {
  return (
    <div className="form_div">
    <h1 className="formtitle">Audiology Plus Onboarding Form</h1>

    <div className="individualForms">
      <MultiStepForm />
    </div>
  </div>
  )
}

export default Form