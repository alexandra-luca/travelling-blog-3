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
    refreshArticles: () => void;
}

export default function Home(props: IHomeProps) {
    const [pageNo, setPageNo] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tempArticle, setTempArticle] = useState(undefined);
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
        if (tempArticle.id === props.articles.length + 1) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tempArticle)
            };
            fetch(`http://localhost:4000/articles/`, requestOptions)
            .then(response => {
                props.refreshArticles();
            });
        } else {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tempArticle)
            };
            fetch(`http://localhost:4000/articles/${tempArticle.id}`, requestOptions)
            .then(response => {
                props.refreshArticles();
            });
        }

        setTempArticle({
            id: 0,
            title: "",
            tag: "",
            author: "",
            date: "",
            imgUrl: "",
            saying: "",
            content: "",
        });
    }

    function editArticle(articleId: number) {
        setTempArticle(props.articles.find((a) => a.id === articleId));
        setIsModalOpen(true);
    }

    function deleteArticle(articleId: number) {
        const requestOptions = {
            method: 'DELETE',
        };
        fetch(`http://localhost:4000/articles/${articleId}`, requestOptions)
        .then(response => props.refreshArticles());
    }

    function readMore(articleId: number) {
        props.readMoreClicked(articleId);
        history.push("/details");
    }

    function addArticle() {
        setTempArticle({
            id: props.articles.length + 1,
            title: "",
            tag: "",
            author: "",
            date: "",
            imgUrl: "",
            saying: "",
            content: "",
        });
        openModal();
    }

    return <div className="page-home">
        <h1>Home</h1>
        <Add callback={addArticle}/>
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
                tempArticle={tempArticle}
                setTempArticle={setTempArticle}
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
