import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import TopNav from './topNav'
import reportWebVitals from './reportWebVitals';
import './index.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TopNav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route>
          <Roller/>
        </Route> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();