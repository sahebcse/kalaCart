import './App.css';
import Home from '../src/components/Home/Home'
import {BrowserRouter,Switch,Route } from 'react-router-dom'
import About from '../src/components/pages/About/About'
import Testimonial from '../src/components/pages/Testimonial'
import Contact from '../src/components/pages/Contact'
import Artwork from '../src/components/pages/Artwork'
import Blog from '../src/components/pages/Blog'

function App() {
  return(
     <BrowserRouter>
     <Switch>
       <Route exact path="/"><Home/></Route>
       <Route path="/About"><About/></Route>
       <Route path="/Artwork"><Artwork/></Route>
       <Route path="/Blog"><Blog/></Route>
       <Route path="/Testimonial"><Testimonial/></Route>
       <Route path="/Contact"><Contact/></Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
