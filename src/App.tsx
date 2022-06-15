import './App.css';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import Menu from './Components/Layout/Menu/Menu';
import MenuToGo from './Components/Layout/Main/MenuToGo/MenuToGo';
import View from './Components/Layout/Main/View/View';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <MenuToGo/>
      <View/>
      <Footer/> 
    </div>
  );
}

export default App;
