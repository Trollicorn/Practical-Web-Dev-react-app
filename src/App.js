import Clock from './components/Clock';
import Content from './components/Content';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Clock/>
      <Content/>
    </div>
  );
}
/*
ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
);
*/
export default App;
