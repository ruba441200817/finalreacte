import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Courss from './components/Courss';
import Footer from './components/Footer';
import M1 from './images/m1.png'
import M2 from './images/m2.jpeg'
import M3 from './images/m3.png'
import M4 from './images/m4.png'
import M5 from './images/m5.png'

function App() {
  return (
    <div>
     <Nav/>
     <div className='container'>
     <Courss text={1} img={M1}/>
     <Courss text={2} img={M2}/>
      
      <Courss text={3} img={M4}/> 
      <Courss text={4}  img={M5}/>
      <Courss text={5} img={M1}/>
     <Courss text={6} img={M2}/>
      <Courss text={7} img={M3}/> 
      <Courss text={8} img={M4}/> 
      <Courss text={9} img={M5}/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
