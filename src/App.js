import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsPrevNextBut from './components/NewsPrevNextBut';
import {BrowserRouter, Route, Routes} from 'react-router-dom';//for router-com v6
import LoadingBar from 'react-top-loading-bar';

class App extends Component {
  
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWSBAAP_APIKEY;

  state = {
    progess:0
  }

  setProgress = (progess) => {
    this.setState({progess:progess});
  }

  render() {
    //https://newsapi.org for getting new api.
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progess}
          />
          <Routes>
            {/* agar same component use kr rhe saare routes pe to bina key lagaye reload nhi hoga. */}
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKeyStr={this.apiKey} key="general" pageSize={this.pageSize} country='in' category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKeyStr={this.apiKey} key="business" pageSize={this.pageSize} country='in' category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKeyStr={this.apiKey} key="entertainment" pageSize={this.pageSize} country='in' category="entertainment" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKeyStr={this.apiKey} key="health" pageSize={this.pageSize} country='in' category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKeyStr={this.apiKey} key="science" pageSize={this.pageSize} country='in' category="science" />}></Route>
            <Route exact path="/sports" element={<NewsPrevNextBut key="sports" pageSize={this.pageSize} country='in' category="sports" />}></Route>
            <Route exact path="/technology" element={<NewsPrevNextBut key="technology" pageSize={this.pageSize} country='in' category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;