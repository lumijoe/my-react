// list2-2-4(p62)1127


import React from 'react';                        // React本体ライブラリ
import ReactDOM from 'react-dom/client';          // React本体ライブラリ
import './index.css';                             // アプリ固有
import App from './App';                          // アプリ固有
import reportWebVitals from './reportWebVitals';  // パフォーマンス監視サービス

// 描画：<React.StrictMode>厳格モードでAppコンポーネントを実行してroot要素に描画させる
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* JSX内コメント */}
    <p /*タグ内コメント*/ >Hello!World!</p>
    <App />
  </>
);

// 有効化：パフォーマンス監視サービス
reportWebVitals(); // ()内にconsole.logを記述でロギング可能

// // 1000ミリ秒単位の出力(画面占領)
// setInterval(() => {
//   root.render(
//     <p>現在時刻：{(new Date()).toLocaleString()}</p>
//   );
// }, 1000);
