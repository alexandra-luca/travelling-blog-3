import React from 'react';
import {useEffect} from 'react';
import './details.css';
import {IArticle} from "../../models/IArticle";

interface IDetailsProps {
    articles: IArticle[];
    selectedArticleId: number;
}

export default function Details(props: IDetailsProps) {
    const article = props.articles.find((a) => a.id === props.selectedArticleId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return <div className="page-details">
        <h1>Details</h1>
        <div className="container">
            <main>
                {article !== undefined &&
                    <article>
                        <h2 className="title title--details">{article.title}</h2>

                        <ul className="info__container info__container--details">
                            <li className="info__item">{article.tag}</li>
                            <li className="info__item">Added by&nbsp;
                                <span className="info__mark">{article.author}</span>
                            </li>
                            <li className="info__item">{article.date}</li>
                        </ul>

                        <img src={article.imgUrl} alt="Image"/>

                        <div className="content__container">
                            <p>{article.content.slice(0, article.content.indexOf('.', article.content.length/2) + 1)}</p>
                            <p className="saying">{article.saying}</p>
                            <p>{article.content.slice(article.content.indexOf('.', article.content.length/2) + 2)}</p>
                        </div>
                    </article>
                }
            </main>

            <footer className="footer">
                <button className="footer__link">previous article</button>
                <button className="footer__link footer__link--next">next article</button>
            </footer>
        </div>
    </div>
}
