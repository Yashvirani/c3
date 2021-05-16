import React from 'react';
import './Warmup4.css';

function Warmup4() {
    return (
        <div className="warmup1game">
            <div className="jmn">
                <p>Arrange the cards to make the following true:</p>
                <ul>
                    <li>The king is in one of the two middle spaces.</li>
                    <li>The queen is left of the jack and right of the ace.</li>
                    <li>The ace is directly next to the queen.</li>
                </ul>
                <p>(Note: Left and right are from the player's perspective).</p>
            </div>
            <div className="box">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
                <div className="box3"></div>
            </div>
            <div className="images">
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/d0bJPuBGB9-black-ace.png" alt="" />
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/PZCNroQ2XB-black-king.png" alt="" />
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/Y43G7ol9AD-black-queen.png" alt="" />
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/rcij15XKXP-black-jack.png" alt="" />
            </div>
            <div className="but">
                <button className="but1">Show Explanation</button>
                <button className="but2">Check Answer</button>
            </div>
        </div>
    )
}

export default Warmup4;
