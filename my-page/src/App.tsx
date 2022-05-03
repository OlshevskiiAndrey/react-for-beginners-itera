import React from 'react';
// import logo from './logo.svg';
import './App.css';

const myInfo = {
  firstName: 'Andrei',
  biography: 'I am 27 years old and working as a barman',
  phone: '+380930006658',
  email: 'some.andy@gmail.com',
}
const Bio = () => (
  <div className="App">
    <h1>Welcome to the My World!</h1>
    <h2>Hello! My name is {myInfo.firstName}. <br></br>
      {myInfo.biography}.</h2>
    <p className='textAlighn'>
      My contacts: <br></br>
      Phone: {myInfo.phone} <br></br>
      Email: {myInfo.email}
    </p>
  </div>
)


export default Bio;