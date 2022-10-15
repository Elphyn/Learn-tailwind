import logo from './logo.svg';
import './App.css';
import girl from './Girl.png'
import email from './Mail.png'

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
      <h1 className='text-center'>Laura Smith</h1>
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
      <h1>About</h1>
      <p className='text-xs'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      <h1>Interests</h1>
      <p className='text-xs'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
  )
}

function Footer(){
  return(
    <div className='flex bg-forth'>


    </div>
  )
}

export default App;
