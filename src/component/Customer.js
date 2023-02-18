import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomer, addRelevent, removeCustomer } from '../redux/actions/actions'
import { v4 as uuid } from 'uuid'

function Customer() {
    const customerdata = useSelector((state) => state.customer)
    console.log(customerdata,"customer")
const dispatch = useDispatch()
const [input, setInput] = useState("")

const handleAddCustomer = () => {
const customerId = uuid()
    dispatch(addCustomer(input, customerId))
    setInput("")
}

const handleRemove = (id, name) => {
dispatch(removeCustomer(id))
// dispatch(addRelevent({id, name, food:[]}))
}

  return (
    <div className='row m-0'>
      <div className="col-6 bg-light" style={{height:"50vh"}}>
{
customerdata.map((data) => {
 return(
  <div style={{padding:"10px",margin:"5px", backgroundColor:"yellowgreen"}}
  onClick={() => handleRemove(data.id, data.name)}
  >{data.name}</div>
   )
})
}


      </div>
      <div className="col-6 bg-dark"></div>
      <div className="col-6 bg-danger "  style={{height:"50vh"}}>
      <input value={input} onChange={(e) => setInput(e.target.value)} /><button onClick={() => handleAddCustomer()}>add</button>

      </div>
      <div className="col-6 bg-info"></div>
    </div>
  )
}

export default Customer