import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <a
        target="_blank"
        href="https://developer.nytimes.com/docs/books-product/1/routes/lists.json/get"
      >
        https://developer.nytimes.com/docs/books-product/1/routes/lists.json/get
      </a>
    </div>
  );
}

export default App;
