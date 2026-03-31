import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import "./User.css";
import UserImg from "./../../../IMG/user-in.png";

function User() {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // للتبديل بين التسجيل والدخول
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");

  // حالات المدخلات
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleMode = () => setIsLogin(!isLogin);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("يرجى ملء جميع الحقول");
      return;
    }
    localStorage.setItem("userName", formData.name);
    localStorage.setItem("userEmail", formData.email);
    localStorage.setItem("userPassword", formData.password);
    setIsLogin(true); // حوله لصفحة الدخول بعد التسجيل
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("userEmail");
    const storedPass = localStorage.getItem("userPassword");

    if (formData.email === storedEmail && formData.password === storedPass) {
      const name = localStorage.getItem("userName");
      setUserName(name);
      handleClose();
    } else {
      alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <>
      <div className='user-trigger' onClick={handleShow}>
        <div className='user-avatar'>
          <img src={UserImg} alt="user" />
        </div>
        <div className='user-info-text'>
          <h6>{userName || "Sign In"}</h6>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered className="user-modal">
        <Modal.Header closeButton className="border-0 pb-0"></Modal.Header>
        <Modal.Body className="px-4 pb-4">
          <div className="text-center mb-4">
            <h3 className="fw-bold">{isLogin ? "Welcome Back" : "Create Account"}</h3>
            <p className="text-muted">{isLogin ? "Enter your details to login" : "Join our car community"}</p>
          </div>

          <Form onSubmit={isLogin ? handleLogin : handleSignUp}>
            {!isLogin && (
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="text" name="name" placeholder="John Doe" 
                  onChange={handleInputChange} required 
                />
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control 
                type="email" name="email" placeholder="name@example.com" 
                onChange={handleInputChange} required 
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" name="password" placeholder="••••••••" 
                onChange={handleInputChange} required 
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 py-2 fw-bold shadow-sm">
              {isLogin ? "Login" : "Register Now"}
            </Button>
          </Form>

          <div className="text-center mt-4">
            <p className="small mb-0">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span className="text-primary ms-2 cursor-pointer fw-bold" onClick={toggleMode} style={{cursor: 'pointer'}}>
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default User;
