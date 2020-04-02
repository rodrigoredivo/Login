import React, { useState } from 'react';
import { FiMail , FiUnlock, FiLogIn } from 'react-icons/fi';
import perfilImg from '../../asset/perfil.jpg';

import loginAcess from '../../utils/loginAcess';

import './styles.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email,
      password
    }

    if ( data.email === loginAcess.email && data.password === loginAcess.password){
      alert(`Access Released `+ data.email);
    } else {
      alert("Access Denied, Sign Up")
    }
  }
  return (
    <div className="logon-container" >
      <section className="form">
        <img src={perfilImg} alt="perfil"/>

        <form onSubmit={handleSubmit}>
          <h1>
          <FiMail className="fiIcons" size={24} color="#f3403b"/>
          </h1>
          <input
            type="email"
            placeholder="E-mail"
            className="inputLogin"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
          <h1>
          <FiUnlock className="fiIcons" size={24} color="#f3403b"/>
          </h1>
          <input
            type="password"
            placeholder="Password"
            className="inputLogin"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />

          <input type="checkbox" name="Register" />
          <a href="/" >Register Login</a>

          <a href="/" className="ultimo">Forgout Password</a>
          <FiLogIn className="fiLogin" size={24} color="#f3403b"/>
          <button className="button" type="submit">Login</button>
        </form>

      </section>
    </div >
  );
}