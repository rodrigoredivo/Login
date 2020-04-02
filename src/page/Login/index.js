import React , { useState } from 'react';
import  {FiMail} from 'react-icons/fi';
import perfilImg from '../../asset/perfil.jpg';

import './styles.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  function handleSubmit(event) {
    event.preventDefault();

    const dados = {
      
      email,
      password
    };

    alert(`Seu Email é : ${ dados.email}  Senha: ${dados.password}` )
  }
  return (
    <div className="logon-container">
      <section className="form">        
        <img src={perfilImg} alt="perfil"/>
        
        <form onSubmit={handleSubmit}>
          <label for="Register"><FiMail className="iconeMail" size={20} /></label>

          <input 
            type="email"
            placeholder="E-mail"
            className="inputLogin"
            value={email}
            onChange={event => setEmail(event.target.value)}
          ></input>

          <input 
            placeholder="Password" 
            className="inputLogin"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <input type="checkbox" name="Register"/>
          <label for="Register">Register Name</label>

          <label className="ultimo">Forgout Password</label>

          <button className="button" type="submit">Login</button>
        </form>
      
      </section>
    </div>
  );
}