import React from 'react'
import MultiStepForm from './MultiStepForm'

const Form = () => {
  return (
    <div className="form_div">
    <h1 className="formtitle">RankRover Pro Onboarding Form</h1>

    <div className="individualForms">
      <MultiStepForm />
    </div>
  </div>
  )
}

export default Form