import React from 'react';
import './home.css';
import {useState, useEffect} from 'react';
import Article from "../../components/Article/Article";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    const [articles, setArticles] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const ARTICLES_PER_PAGE = 3;

    useEffect(async () => {
        const result = await fetch("http://localhost:4000/articles");
        const resultjson = await result.json();
        setArticles(resultjson);
    }, [])

    function increasePage() {
        setPageNo(pageNo + 1);
    }

    function decreasePage() {
        setPageNo(pageNo - 1);
    }

    return <div className="page-home">
        <h1>Home</h1>
        <div>
            {articles.slice((pageNo-1) * ARTICLES_PER_PAGE, (pageNo-1) * ARTICLES_PER_PAGE + 3).map((article) =>
                <Article article={article}/>
            )}
        </div>
        <Footer 
            increaseFunc={increasePage} 
            decreaseFunc={decreasePage}
            shouldDisplayPrev={pageNo != 1}
            shouldDisplayNext={pageNo != Math.ceil(articles.length / ARTICLES_PER_PAGE)}
            />
    </div>;
}
