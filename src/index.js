// list2-2-2(p55)1123


import React from 'react';                        // React本体ライブラリ
import ReactDOM from 'react-dom/client';          // React本体ライブラリ
import './index.css';                             // アプリ固有
import App from './App';                          // アプリ固有
import reportWebVitals from './reportWebVitals';  // パフォーマンス監視サービス

// 描画：<React.StrictMode>厳格モードでAppコンポーネントを実行してroot要素に描画させる
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <p>Hello!World!</p>
  </React.StrictMode>
);

// 有効化：パフォーマンス監視サービス
reportWebVitals(); // ()内にconsole.logを記述でロギング可能
