// list2-2-3(p60)1127
import logo from './logo.svg';
import './App.css';

// Appコンポーネント
function App() {
  // 描画生成
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a 
          className='App-link'
          href='https://reactjs.org'
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header>
    </div>
  );
}

// App関数のエクスポート
export default App;