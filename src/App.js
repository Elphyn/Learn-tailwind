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
      </Card>
    </div>
  );
}

function Card(props){
  return(
    <div className="w-1/5 bg-gray-100 h-[90%] rounded-2xl">
      {props.children}
    </div>
  )
}

function Info(){
  return(
    <div className="flex-col" >
      <img src={girl}/>
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

export default App;
