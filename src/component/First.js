import React from 'react'
import {user} from "./data"


function First({nextStep, prevStep, step, setStep}) {

    console.log(user,"user")
const handleNext = () => {
   setStep(step + 1)
}

const handlePrev = () => {
    if(step < 0){
        prevStep()
    }
   
}

  return (
    <div>
        <div className=' row w-100 d-flex justify-content-center '>
{
    user.map((item) => (
        <>
        <div className=' '>
      <div className='userTitle col-sm-6 '>{item.userTitle}</div> 
      </div> 
        </>
    ))
}


        </div>
        {/* <div className='buttons'>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext} >Next</button>
        </div> */}

    </div>
  )
}

export default First