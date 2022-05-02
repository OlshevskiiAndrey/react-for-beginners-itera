import React from 'react';
import './App.css';
// import { Footer } from './FooterProps';


const info = {
  fullName: 'Andrei Olshevskii',
  phone: '+380930006658',
  email: 'olsh.and@gmail.com',
  biography: "I am 27 years old and I work as a barmans",
}
const Bio = () => (
  <div className="App">
    <h1>It's me</h1>
    <p className='textAlighn'>
      Hello! My name is <i><u>{info.fullName}</u></i>.
      <br></br>
      {info.biography}.
      <br></br>
      My contacts:
      <br></br>
      Phone: {info.phone};
      <br></br>
      Email: {info.email}.
      <br></br>
    </p>
  </div>
)

export default Bio;
