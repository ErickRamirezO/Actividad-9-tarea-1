// RegistrationForm.jsx
import { useState } from 'react';
import Swal from 'sweetalert2'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { auth} from "../config/firebase";

const Registration = () => {
  const [error, setError] = useState(null);

  function handleRegistration(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log("Datos", email, password);
    registrarUsuario(email,password); 
  }
  async function registrarUsuario(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      Swal.fire({
        icon: 'success',
        title: 'Registro realizado con éxito',
        text: 'En unos segundos será redirigido al inicio de sesión!',
        timer: 3000,
        didClose: () => {
          navigate('/');
        },
      });
    } catch (error) {
      setError(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Registro fallido',
        text: error.message,
      });
    }
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
