import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>
          菜单
        </h1>
        <Link to={`table/BBBBBBBBBB`}>page1</Link>
        <Link to={`list`}>page2</Link>
      </div>
    </div>
  );
}

export default App;
