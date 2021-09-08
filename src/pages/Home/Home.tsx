import React from 'react';
import './home.css';
import {useState} from 'react';
import Article from "../../components/Article/Article";
import Footer from "../../components/Footer/Footer";
import Add from "../../components/Add/Add";
import Modal from "../../components/Modal/Modal";
import {IArticle} from "../../models/IArticle";
import {useHistory} from "react-router-dom";

interface IHomeProps {
    articles: IArticle[];
    readMoreClicked: (number) => void;
}

export default function Home(props: IHomeProps) {
    const [pageNo, setPageNo] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const history = useHistory();
    const ARTICLES_PER_PAGE = 3;

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

    function readMore(articleId: number) {
        props.readMoreClicked(articleId);
        history.push("/details");
    }

    return <div className="page-home">
        <h1>Home</h1>
        <Add callback={openModal}/>
        <div>
            {props.articles.slice((pageNo-1) * ARTICLES_PER_PAGE, (pageNo-1) * ARTICLES_PER_PAGE + 3).map((article) =>
                <Article 
                    article={article}
                    editCallback={editArticle}
                    deleteCallback={deleteArticle}
                    readMoreCallback={readMore}
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
            shouldDisplayPrev={pageNo !== 1}
            shouldDisplayNext={pageNo !== Math.ceil(props.articles.length / ARTICLES_PER_PAGE)}
            />
    </div>;
}
