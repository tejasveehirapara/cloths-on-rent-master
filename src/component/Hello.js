import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiOutlineStar} from "react-icons/ai"
import {AiTwotoneStar} from "react-icons/ai"
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

function Hello() {
   const navigate = useNavigate() 
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false)
  const [selctedId, setSelectedId] = useState(null)
  const [favrite, setFavrite] = useState(data)
  

const fetchData = () => {
  axios.get("https://fakestoreapi.com/products")
  .then((res) => {
    console.log(res.data,"res")
    setData(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
}
const handlePush = (temp) => {

    const index = favrite.findIndex((item) => item.id === temp.id)
    console.log(index)
    if(index > -1){
        favrite.splice(index, 1)
        setFavrite(favrite)
    }
    else{
        setFavrite([...favrite,temp])
    }
    // setData({...data,favrite})
// const temp = data.find((item) => item.id === id)

}

console.log(favrite,"favrite")
useEffect(() => {
  fetchData()
},[])

  return (
    <div className="row">
        <Link to={{pathname: "/fav", favrite:favrite}} state={favrite} >Favrite</Link>
        <div className="col-6">
{
  data.map((item) => (
    <>
     <div class="card m-5" >
  <div class="card-header">
  {item.title}
  <div onClick={() => (setShow(!show),handlePush(item), setSelectedId(item.id))}>{favrite.find((fav) => fav.id === item.id) ?<AiTwotoneStar/> : <AiOutlineStar/> }</div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" >{item.description}</li>
    <li class="list-group-item">{item.price}</li>
  </ul>
</div>
    </>
  ))
}
</div>
<div className="col-6">
{/* {
 favrite.map((fav) => {
    return (
        <>
        <div class="card" style={{width:"18rem"}}>
       <div class="card-header">
       {fav.title}
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">{fav.description}</li>
         <li class="list-group-item">{fav.price}</li>
       </ul>
     </div>
         </>
    )
   
 })
} */}
</div>
      {/* {
        data.map((item) => {
          <>
          <div class="card" style={{width:"18rem"}}>
  <div class="card-header">
  {item.title}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>
          </>
        })
      } */}
        
    </div>
  )
}

export default Hello