import React from 'react'


function Courss(p) {
  return (
    <div >
        <img src={p.img} ></img>
        <div className='c'>
        <p>course : {p.text ?  p.text : "finshed "} </p>
        </div>
        
    </div>
  )
}

export default Courss