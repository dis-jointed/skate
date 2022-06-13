
import './App.css';
import Header from './Header';
import Home from './Home';

function App(
  
) {
  return (
    <div className="App" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/black.jpg'})`
      }}>
       
        <Home/>

     
      
    
    </div>
  );
}

export default App;
