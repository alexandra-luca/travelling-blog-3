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

export default function Article({article} : {article: IArticle}) {
    return <article>
    <h2 className="title">{article.title}</h2>
    <ul className="info__container">
        <li className="info__item">{article.tag}</li>
        <li className="info__item">Added by&nbsp; 
            <span className="info__mark">{article.author}</span>
        </li>
        <li className="info__item">{article.date}</li>
    </ul>
    <div className="actions__container">
        <button type="button" className="actions__btn">Edit</button>
        <button type="button" className="actions__btn">Delete</button>
    </div>

    <img src={article.imgUrl} alt="Bike" />
    <div className="content__container">
        <p>{article.content}</p>
    </div>
    <div className="readmore__container">
        <button type="button" className="button">Read More</button>
    </div>
</article>
}