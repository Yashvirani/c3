import React from 'react';
import './Warmup1.css';

function Warmup1() {
    return (
        <div className="warmup1game">
            <div className="jmn">
                <p>Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:</p>
                <ul>
                    <li>Joseph is not the youngest.</li>
                    <li>Kevin is the oldest.</li>
                    <li>Nicholas is not the oldest.</li>
                </ul>
                <p>Drag the characters into the dotted boxes.</p>
            </div>
            <div className="box">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>
            <div className="images">
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png" alt="" />
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png" alt="" />
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png" alt="" />
            </div>
        </div>
    )
}

export default Warmup1;
