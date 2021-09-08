import React from 'react';
import {useState, useEffect} from 'react';
import './index.css';
import './App.css';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Menu from './components/Menu/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(2);
  
  useEffect(() => {
    async function fetchData() {
      const result = await fetch("http://localhost:4000/articles");
      const resultjson = await result.json();
      setArticles(resultjson);
    }
    fetchData();
  }, [])

  function changeSelectedArticle(articleId: number) {
    setSelectedArticleId(articleId);
  }
  
  return (
    <div className="container">
      <Router>
        <Menu/>
        <Switch>
          <Route path="/details">
            <Details 
              articles={articles} 
              selectedArticleId={selectedArticleId} 
              prevClicked={() => setSelectedArticleId(selectedArticleId-1)} 
              nextClicked={() => setSelectedArticleId(selectedArticleId+1)} />
          </Route>
          <Route path="/">
            <Home articles={articles} readMoreClicked={changeSelectedArticle} />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
