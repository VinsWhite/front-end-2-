import './App.css';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome'
import MyNav from './components/MyNav';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
