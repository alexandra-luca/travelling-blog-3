import React from "react";

interface IModalProps {
    cancelCallback: () => void;
    saveCallback: () => void;
}

export default function Modal(props: IModalProps) {
    return <div className="modal__overlay">
        <div className="modal">
            <div className="modal__content">
                <h2 className="title">Add/Edit article</h2>
                <div className="inputs__container">
                    <input type="text" className="input" placeholder="Please enter title"/>
                    <input type="text" className="input" placeholder="Please enter tag"/>
                    <input type="text" className="input" placeholder="Please enter author"/>
                    <input type="text" className="input" placeholder="Please enter date"/>
                    <input type="text" className="input" placeholder="Please enter image url"/>
                    <input type="text" className="input" placeholder="Please enter saying"/>
                </div>
                <textarea className="textarea" name="content" cols={28} rows={7}
                    placeholder="Please enter content"></textarea>
                <div className="modal__buttons">
                    <button type="button" className="button" onClick={props.cancelCallback}>Cancel</button>
                    <button type="button" className="button button--pink" onClick={props.saveCallback}>Save</button>
                </div>
            </div>
        </div>
    </div>
}
