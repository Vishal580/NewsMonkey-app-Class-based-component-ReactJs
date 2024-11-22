import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="General" pageSize="6" country="us" category="General" />}/>
            <Route exact path="/business" element={<News key="Business" pageSize="6" country="us" category="Business" />}/>
            <Route exact path="/technology" element={<News key="Technology" pageSize="6" country="us" category="Technology" />}/>
            <Route exact path="/entertainment" element={<News key="Entertainment" pageSize="6" country="us" category="Entertainment" />}/>
            <Route exact path="/health" element={<News key="Health" pageSize="6" country="us" category="Health" />}/>
            <Route exact path="/science" element={<News key="Science" pageSize="6" country="us" category="Science" />}/>
            <Route exact path="/sports" element={<News key="Sports" pageSize="6" country="us" category="Sports" />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
