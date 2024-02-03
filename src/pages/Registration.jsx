// RegistrationForm.jsx
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { auth, googleProvider } from "../config/firebase";



const Registration = () => {
  const [error, setError] = useState(null);

  function handleRegistration(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Datos", email, password);
    registrarUsurio(email,password);

    
  }

  async function registrarUsurio(email,password){
    
    const infoUsuario =await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })

  }

  return (
    <div className='container1 reg'>
      <h1>Registration</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form>
        <label>Email:</label><br/>
        <input type="email" id="email" />
        <br/><br/>
        <label>Password:</label><br/>
        <input type="password" id="password" />
        <br/><br/>
        <button className="btn btn-success mb-2" onClick={handleRegistration}>Register</button><br/>
      </form>
      <a href="/"><button className="btn btn-primary mb-2">Return to Home</button></a>
    </div>
  );
};

export default Registration;
