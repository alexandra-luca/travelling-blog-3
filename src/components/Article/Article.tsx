import React from "react";

interface IArticle {
    id: number;
    title: string;
    tag: string;
    author: string;
    date: string;
    imgUrl: string;
    saying: string;
    content: string;
}

interface IArticleProps {
    article: IArticle;
    editCallback: (number) => void;
    deleteCallback: (number) => void;
}

export default function Article(props: IArticleProps) {
    return <article>
        <h2 className="title">{props.article.title}</h2>
        <ul className="info__container">
            <li className="info__item">{props.article.tag}</li>
            <li className="info__item">Added by&nbsp; 
                <span className="info__mark">{props.article.author}</span>
            </li>
            <li className="info__item">{props.article.date}</li>
        </ul>
        <div className="actions__container">
            <button type="button" className="actions__btn" onClick={props.editCallback}>Edit</button>
            <button type="button" className="actions__btn" onClick={props.deleteCallback}>Delete</button>
        </div>

        <img src={props.article.imgUrl} alt="Bike" />
        <div className="content__container">
            <p>{props.article.content}</p>
        </div>
        <div className="readmore__container">
            <button type="button" className="button">Read More</button>
        </div>
    </article>
}