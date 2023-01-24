import React, { useState } from 'react'
import First from './First'
import Second from './Second'

function AddWork() {

    const [step, setStep] = useState(1)

const nextStep = () => {
    setStep(step + 1)
    console.log(step,"step")
}

const prevStep = () => {
    setStep(step - 1)
}

switch (step) {
    case 1:
      return(
        <First
        nextStep={nextStep}
        prevStep={prevStep}
        step={step}
        setStep={setStep}
        />
      )  
     case 2:
        return(
            <Second
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            />
        ) 

    default:
     return(
        <></>
     )
}

 
}

export default AddWork

