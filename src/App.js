import './App.css';
import Mahsus from './mahsus';
import Example from './navbar';
import Nimadur from './nimadur';
function App() {
  return (
    <div >
      <div style={{backgroundImage:"url('https://bukhara-news.uz/wp-content/uploads/2022/07/img_20220708_093413_919.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"102vh"}}>
      <Example/>
    </div>
    <Nimadur/>
    <Mahsus/>
    </div>
  );
}

export default App;
