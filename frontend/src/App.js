import {BrowserRouter,Routes,Route} from 'react-router-dom'


//pages and component
import Home from './pages/Home'
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
                <Route
                  path='/'
                  element={<Home />} 
                />
                <Route 
                path="*"
                element = {<NotFound />} 
                />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
