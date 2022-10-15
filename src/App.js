import logo from './logo.svg';
import girl from './Girl.png'
import email from './Mail.png'
import twitter from './square-twitter.svg'
import facebook from './images/facebook.svg'
import linkedin from './images/linkedin.svg'
import github from './images/square-github.svg'
import instagram from './images/square-instagram.svg'
import './App.css';


function App() {
  return (
    <div className="flex justify-center bg-secondary h-screen items-center">
      <Card>
        <Info/>
        <Button/>
        <About/>
        <Footer/>
      </Card>
    </div>
  );
}

function Card(props){
  return(
    <div className="h-[90%] w-1/5 bg-gray-100  rounded-2xl">
      {props.children}
    </div>
  )
}

function Info(){
  return(
    <div className="flex-col" >
      <img src={girl} className="" />
      <h1 className='text-center font-Inter'>Laura Smith</h1>
      <h3 className='text-center text-thrid'>Frontend Developer</h3>
      <h4 className='text-center'>laurasmith.website</h4>
    </div>
  );
}

function Button(){
  return(
    <div className='flex justify-center'>
      <a href='#' className='flex justify-center items-center border shadow w-2/3 rounded'>
        <img src={email}/>
        Email
      </a>
    </div>
    
  )
}

function About(){
  return(
    <div>
      <h1 className='font-Inter'>About</h1>
      <p className='text-xs'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      <h1>Interests</h1>
      <p className='text-xs'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
  )
}

function Footer(props){
  return(
    <div className='bg-forth flex justify-evenly rounded-br-2xl rounded-bl-2xl h-12 items-center' >
      <img src={twitter} className="h-7"/>
      <img src={facebook} className="h-7"/>
      <img src={instagram} className="h-7"/>
      <img src={linkedin} className="h-7"/>
      <img src={github} className="h-7"/>
    </div>
  )
}


export default App;
