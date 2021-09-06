import React from "react";

export default function Footer({increaseFunc, decreaseFunc, shouldDisplayPrev, shouldDisplayNext}) {
    return <footer className="footer">
        { shouldDisplayPrev && <button className="footer__link" onClick={decreaseFunc}>previous</button> }
        { shouldDisplayNext && <button className="footer__link footer__link--next" onClick={increaseFunc}>next</button>}
    </footer>
}
