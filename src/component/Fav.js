import React from 'react'
import { useLocation } from 'react-router'

function Fav() {

const location = useLocation()

const datas = location.state
console.log(datas,"locData")
  return (
    
    // <div>{location.state}</div>
    <>
 "okyyyy"
  {
    datas.map((item) => {
      return (
        <>
       <div class="card m-5" style={{width:"18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{item.title}</li>
    <li class="list-group-item">{item.category}</li>
    <li class="list-group-item">{item.price}</li>
  </ul>
</div>
        </>
      )
    })
  }
    </>
  )
}

export default Fav