import React from 'react'

export default function Forms() {
    return (
        <form action="">
        <div className = "container" style = { {height: "800px",width : "400px",position: "absolute", backgroundColor: "white", textAlign: "left", marginTop: "-800px", marginLeft: "1000px"}} >

           <img src="./images/Capture1.png" alt="cap" style = {{marginLeft: "25px" , marginTop: "20px"}} />
           <h3 style= {{marginLeft: "130px", marginTop: "-70px" ,  fontWeight: "900"}}>ORDER A </h3><h3  style = {{marginLeft: "134px", marginTop: "-40px"}}><span> <br/>WASHÉ</span></h3>
        <img src="./images/Capture3.png" alt="logos"  style = {{marginLeft: "25px" , marginTop: "20px"}}  />
            <div className="form-floating mb-3" style = {{width: "370px", marginTop: "20px"}}>
  <input type="text" className="form-control" id="floatingInput" placeholder="First Name"/>
  
  <label for="floatingInput" style = {{paddingLeft: "20px", position: "absolute"}}  > <img  src = "./images/username.png" alt = "user1" />  First Name   </label>
</div>  
<div className="form-floating" style = {{width: "370px", marginBottom: "20px"}}>
  <input type="text" className="form-control" id="floatingPassword" placeholder="Last Name"/>
  <label for="floatingPassword">  <img  src = "./images/username.png" alt = "user"  /> Last Name</label>
</div>
<div className="form-floating mb-3" style = {{width: "370px", marginBottom: "20px"}}>
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput"><img src = "./images/email.png" alt = "e"/> Email address</label>
</div>
<div className="form-floating mb-3" style = {{width: "370px", marginBottom: "20px"}}>
  <input type="number" className="form-control" id="floatingInput" placeholder="Phone Number"/>
  <label for="floatingInput"><img src = "./images/phone.png" alt = "phone"/> Phone Number</label>
</div>

<select class="form-select" multiple aria-label="multiple select example">
  <option value="1" style = {{marginTop : "10px", marginLeft: "30px"}}>Requested Services</option>
  <option value="2 " style = {{marginTop : "5px", marginLeft: "30px"}}>Deep interior Detail</option>
  <option value="3" style = {{marginTop : "5px", marginLeft: "30px"}}>Polish/Paint Correction</option>
</select>

<div className="form-floating mb-3" style = {{width: "370px", marginTop: "20px"}}>
  <input type="text" className="form-control" id="floatingInput" placeholder="City"/>
  <label for="floatingInput"><img src = "./images/city.png" alt = "phone"/> City</label>
</div>

<select class="form-select" aria-label="Default select example">
   { <img src="./images/state.png" alt="" srcset="" /> }
  <option selected>State</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

        </div>
        </form>
    )
}
