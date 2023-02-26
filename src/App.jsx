import React from 'react';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';
import myImage from  "./myImage.png";
import Child from './Components/Child';
import Btn from './Components/btn';
import ModeToggler from './ModeToggler';


function Logo(props){
  const userPic  = <img src={myImage} />
  return userPic;
}
const App = () => {
  const date = new Date()
  return (
    <div>
    <Header name="Khaled" color='Purple' />
    <Btn/>
    <div>
      <Child message={date.toLocaleTimeString()}/>
    </div>
    <ModeToggler/>
    <Logo/>
    <Section title="HELLO TRADERS" />
    <Footer logs= "THIS IS THE FOOTER SIDE" />
    </div>
  )
}

export default App
