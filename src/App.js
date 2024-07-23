 import './Components/directory/directory/categories.styles.scss';
 import Directory from './Components/directory/directory/directory.component.jsx';
import Home from "./routes/home/home-component.jsx";

function App() {

  return (
     <Directory categories={Home} />
    // <Home/>
  );
}

export default App;