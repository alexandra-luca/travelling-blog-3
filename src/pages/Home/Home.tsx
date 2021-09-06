import React from 'react';
import './home.css';
import {useState, useEffect} from 'react';
import Article from "../../components/Article/Article";
import Footer from "../../components/Footer/Footer";
import Add from "../../components/Add/Add";
import Modal from "../../components/Modal/Modal";

export default function Home() {
    const [articles, setArticles] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    function openModal() {
        setIsModalOpen(true);
    }

    function cancelModal() {
        setIsModalOpen(false);
    }

    function saveModal() {
        setIsModalOpen(false);
    }

    function editArticle(articleId: number) {
        setIsModalOpen(true);
    }

    function deleteArticle(articleId: number) {
        // pass
    }

    return <div className="page-home">
        <h1>Home</h1>
        <Add callback={openModal}/>
        <div>
            {articles.slice((pageNo-1) * ARTICLES_PER_PAGE, (pageNo-1) * ARTICLES_PER_PAGE + 3).map((article) =>
                <Article 
                    article={article}
                    editCallback={editArticle}
                    deleteCallback={deleteArticle}
                />
            )}
        </div>
        {isModalOpen && <Modal
                cancelCallback={cancelModal}
                saveCallback={saveModal}
            />}
        <Footer 
            increaseFunc={increasePage} 
            decreaseFunc={decreasePage}
            shouldDisplayPrev={pageNo != 1}
            shouldDisplayNext={pageNo != Math.ceil(articles.length / ARTICLES_PER_PAGE)}
            />
    </div>;
}
