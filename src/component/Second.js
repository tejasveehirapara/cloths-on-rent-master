import React from 'react'


function Second({nextStep, prevStep, step}) {

    const handleNext = () => {
        if(step < 2) {
            nextStep()
        }}

const handlePrev = () => {
    prevStep()
}

  return (
    <div>
           <div className='mainDiv'>

second
</div>
<div className='buttons'>
    <button onClick={handlePrev}>Prev</button>
    <button onClick={handleNext} >Next</button>
</div>

    </div>
  )
}

export default Second