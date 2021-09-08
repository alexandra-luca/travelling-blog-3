import React from "react";
import {IArticle} from "../../models/IArticle";

interface IModalProps {
    tempArticle: IArticle;
    setTempArticle: (IArticle) => void;
    cancelCallback: () => void;
    saveCallback: () => void;
}

export default function Modal(props: IModalProps) {
    return <div className="modal__overlay">
        <div className="modal">
            <div className="modal__content">
                <h2 className="title">Add/Edit article</h2>
                <div className="inputs__container">
                    <input type="text" className="input" placeholder="Please enter title" value={props.tempArticle.title} onChange={(event) => props.setTempArticle({...props.tempArticle, title: event.target.value})}/>
                    <input type="text" className="input" placeholder="Please enter tag" value={props.tempArticle.tag} onChange={(event) => props.setTempArticle({...props.tempArticle, tag: event.target.value})}/>
                    <input type="text" className="input" placeholder="Please enter author" value={props.tempArticle.author} onChange={(event) => props.setTempArticle({...props.tempArticle, author: event.target.value})}/>
                    <input type="text" className="input" placeholder="Please enter date" value={props.tempArticle.date} onChange={(event) => props.setTempArticle({...props.tempArticle, date: event.target.value})}/>
                    <input type="text" className="input" placeholder="Please enter image url" value={props.tempArticle.imgUrl} onChange={(event) => props.setTempArticle({...props.tempArticle, imgUrl: event.target.value})}/>
                    <input type="text" className="input" placeholder="Please enter saying" value={props.tempArticle.saying} onChange={(event) => props.setTempArticle({...props.tempArticle, saying: event.target.value})}/>
                </div>
                <textarea className="textarea" name="content" cols={28} rows={7} placeholder="Please enter content" 
                    value={props.tempArticle.content} onChange={(event) => props.setTempArticle({...props.tempArticle, content: event.target.value})}></textarea>
                <div className="modal__buttons">
                    <button type="button" className="button" onClick={props.cancelCallback}>Cancel</button>
                    <button type="button" className="button button--pink" onClick={props.saveCallback}>Save</button>
                </div>
            </div>
        </div>
    </div>
}
