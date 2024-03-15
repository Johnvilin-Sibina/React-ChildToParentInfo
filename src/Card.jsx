import React from 'react'
import "./App.css"
function Card({myFunction}) {
let a =10;
  
  return (
    <div className="card" style={{width: "18rem"}}>
  <img src="https://fastly.picsum.photos/id/451/200/200.jpg?hmac=ZxfTfjtPhONiVjaPd1HG3lQuTRy_puiwOF6qStaMe7g" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary" onClick={() => myFunction(a)}>Go somewhere</button>
  </div>
</div>
  )
}

export default Card