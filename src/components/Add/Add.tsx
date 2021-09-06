import React from "react";

interface IAddProps {
    callback: () => void;
}

export default function Add({callback}: IAddProps) {
    return <div className="add__container">
        <button type="button" className="button" onClick={callback}>
            <i className="fas fa-plus me-1"></i>
            <span> Add Article</span>
        </button>
    </div>
}
