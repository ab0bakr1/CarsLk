import React, { useState } from 'react'
import "./User.css"
import UserImg from "./../../../IMG/user-in.png"

function User() {
  const [Overlay, setOverlay] = useState("overlay");
  const [Login , setLogin] = useState("login");
  const [SignUp, setSignUp] = useState("signUp");
  const handleUser=()=>{
    SignUp === "signUp active" ? setSignUp("signUp") : setSignUp("signUp");
    Login === "login" ? setLogin("login active") : setLogin("login");
  }
  const handleSignUp=()=>{
    SignUp === "signUp" ? setSignUp("signUp active") : setSignUp("signUp");
    Login === "login active" ? setLogin("login") : setLogin("login");
    Overlay === "overlay active" ? setOverlay ("overlay active") : setOverlay("overlay active");
  }
  const handleoverlay =()=>{
    Overlay === "overlay active" ? setOverlay ("overlay") : setOverlay("overlay");
    SignUp === "signUp active" ? setSignUp("signUp") : setSignUp("signUp");
    Login === "login active" ? setLogin("login") : setLogin("login");
  }
  const handleSubmit = e =>{
    e.preventDefault();
  }


  const Name = document.getElementById("name");
  const Email = document.getElementById("email");
  const Password = document.getElementById("password");
  const signUpBtn =() =>{
    if(Name.value==="" || Email.value==="" || Password.value===""){
      alert("Please fill out all fields!");
    }else if(Email.value === localStorage.getItem("userEmail")){
      alert("This email is already in use.");
    }else{
      localStorage.setItem("userName", Name.value);
      localStorage.setItem("userEmail", Email.value);
      localStorage.setItem("userPassword", Password.value);
      handleUser();
    }
  }
  const [NameToUser, setNameToUser] = useState("");
  const logInBtn =()=>{
    if(localStorage.getItem("userEmail") !== Email.value || localStorage.getItem("userPassword") !== Password.value){
      alert("Wrong email or password!");
    }else{
      handleoverlay();
      window.scrollTo(0, 0);
      setNameToUser (localStorage.getItem("userName"));
    }
  }
  return (
    <>
    {NameToUser === "" ? (
      <button onClick={handleSignUp} className='user'>
          <div className='user-img'>
              <img src={UserImg}></img>
          </div>
          <div className='user-name'>
            <h6>sign Up</h6>
          </div>
      </button>) : (
      <button className='user'>
          <div className='user-img'>
              <img src={UserImg}></img>
          </div>
          <div className='user-name'>
            <h6>{NameToUser}</h6>
          </div>
      </button>
      )}
      <div className={Login}>
        <form onSubmit={handleSubmit} className='px-2'>
          <h6 className='m-0 pt-4'>Email</h6>
          <input className='w-100 p-2' type='email' name='email' placeholder='Email'/><br/>
          <h6 className='m-0'>Password</h6>
          <input className='w-100 p-2' type='password' name='password' placeholder='Password'/><br/>
          <button className='w-100 py-2 mt-4' onClick={logInBtn} type="submit">Login</button>
          <p className='mt-4'>Don't have an account? <a onClick={handleSignUp} href='#'>Sign Up</a></p>
        </form>
      </div>
      <div className={SignUp}>
        <form onSubmit={handleSubmit} className='px-2'>
          <h6 className='m-0 pt-4'>Username</h6>
          <input className='w-100 p-2' type='text' name='name' placeholder='Username' id='name'/><br/>
          <h6 className='m-0'>Email</h6>
          <input className='w-100 p-2' type='email' name='email' placeholder='Email' id='email' required/><br/>
          <h6 className='m-0'>Password</h6>
          <input className='w-100 p-2' type='password' name='password' placeholder='Password' id='password'/><br/>
          <button className='w-100 py-2 mt-4' onClick={signUpBtn} id='signupBtn' type="submit">Sign Up</button>
          <p className='mt-4'>Already have an account? <a onClick={handleUser} href='#'>Login</a></p>
        </form>
      </div>
      <div className={Overlay} onClick={handleoverlay}></div>
    </>
  )
}

export default User