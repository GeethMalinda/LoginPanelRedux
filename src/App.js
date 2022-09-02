import React, {useState} from 'react';
import Login from './Components/Login';
import "./App.css"

function App() {
  const [name ,setName] = useState('');
  const [email ,setEmail] = useState('');
  const [passward ,setPassward] = useState('');
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
