
import { useState } from 'react';
import './App.css';

const App = () => {
  const[user, setUser] = useState("");
  const[password, setPassword] = useState("");
  const[isLogged, setIsLogged] = useState(false);

  const handleLoginClick = () => {
    setIsLogged(true);
  };
  
  function Footer(){
    return <h3> Footer component mostrándose</h3>
  }

  return(
    <div>
      <label>
        User
        <input type="email" value={user} onChange={({target : {value}}) => setUser(value)}></input>
      </label>
      <br/>
      <br/>
      <label>
        Password
        <input type="password" value={password} onChange={({target : {value}}) => setPassword(value)}></input>
      </label>
      <br/>
      <br/>
      <button onClick={handleLoginClick}>
      Iniciar sesión
      </button>
      {isLogged ?  <h2>Logueado exitosamente</h2> : undefined}
      {isLogged &&  <h2>Logueado exitosamente 2</h2>}
      {isLogged &&   <Footer/>}
    </div>
  );
}

export default App;
