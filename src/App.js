import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import Demo from './Demo';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 500;
  const person = {name :'rahman', age : 25};
  const link = "www.facebook.com";
 
  return (

    <div className="App">
      <Navbar/> 
      <div className="content">
        <Home/> 
        <Demo/>
      </div>
    </div>
  );
}

export default App;
