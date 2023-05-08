import './App.css';
import { Home, LandingPage, Form, Detail } from './views';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/create' component={Form} />
      <Route exact path='/home/:id' component={Detail} />
    </div>
  );
}

export default App;
