import './App.css';
import Api from './components/api/Api';

const click=()=>{
  document.getElementById('data').style.display='block'
  document.getElementById('welcome').style.display='none'
}
const back = ()=>{
  document.getElementById('data').style.display='none'
  document.getElementById('welcome').style.display='block'
}

function App() {
  return (
    <>
      <div id='welcome'>
      <h1>Welcome To Sprink</h1>
      <button className="btn-menu" onClick={click}>
        Menu
      </button>
      </div>
      <div id='data'>
        <button className="btn-back" onClick={back}>Back</button>
        <Api/>
      </div>
    </>
  );
}

export default App;
