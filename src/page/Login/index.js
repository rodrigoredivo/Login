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
      alert(`Acesso Liberado `+ data.email);
    } else {
      alert("Acesso negado , se cadastre-se")
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
          />

          <input type="checkbox" name="Register" />
          <label for="Register">Register Name</label>

          <label className="ultimo">Forgout Password</label>
          <FiLogIn className="fiLogin" size={24} color="#f3403b"/>
          <button className="button" type="submit">Login</button>
        </form>

      </section>
    </div >
  );
}