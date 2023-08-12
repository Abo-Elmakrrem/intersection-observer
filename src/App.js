import './App.css';
import travel_01 from './assets/travel-01.jpg';
import travel_02 from './assets/travel-02.jpg';
import travel_03 from './assets/travel-03.jpg';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Navbar from './components/Navbar';


const navBarLinks = [
{url :"#" , title:'Home'} ,
{url :"#" , title:'Trips'} ,
{url :"#" , title:'Rewards'}
];


function App() {
  return (
    <div className="App">
      <Navbar navBarLinks={navBarLinks}/>
        < Hero imageSrc={travel_01}/>

        <Slider imageSrc={travel_02} 
        title={"Be an Explorer"} 
        subtitle={'Our Platform Offers a Wide of uniqe Travel Location.'}
        flipped={true}
        />

        <Slider imageSrc={travel_03} 
        title={"Memories of Lifetime"} 
        subtitle={'Your Dreams vaction is a few Clicks away.'}
        
        />
        
    </div>
  );
}

export default App;
