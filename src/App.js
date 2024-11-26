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
  pageSize = 9;
  country = 'us';
  render() {
    return (
      <div>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="General" pageSize = {this.pageSize} country = {this.country} category="General" />}/>
            <Route exact path="/business" element={<News key="Business" pageSize = {this.pageSize} country = {this.country} category="Business" />}/>
            <Route exact path="/technology" element={<News key="Technology" pageSize = {this.pageSize} country = {this.country} category="Technology" />}/>
            <Route exact path="/entertainment" element={<News key="Entertainment" pageSize = {this.pageSize} country = {this.country} category="Entertainment" />}/>
            <Route exact path="/health" element={<News key="Health" pageSize = {this.pageSize} country = {this.country} category="Health" />}/>
            <Route exact path="/science" element={<News key="Science" pageSize = {this.pageSize} country = {this.country} category="Science" />}/>
            <Route exact path="/sports" element={<News key="Sports" pageSize = {this.pageSize} country = {this.country} category="Sports" />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
