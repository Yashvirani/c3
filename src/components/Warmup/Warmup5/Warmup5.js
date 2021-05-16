import React from 'react';
import './Warmup5.css';

function Warmup5() {
    return (
        <div className="warmup5game">
            <div className="jmn">
                <p>Five friends competed in a race.</p>
                <div class="card hn">
                    <div class="card-body">
                        <ul>
                            <li className="rfv">Pyrrha finished faster than Blake.</li>
                            <li className="rfv">The smallest difference in finishing times was between Pyrrha and Ruby.</li>
                            <li className="rfv">The largest difference in finishing times was between Ruby and Weiss.</li>
                            <li className="rfv">Yang finished either 1st or 3rd.</li>
                        </ul>
                    </div>
                </div>
                <p>Drag the characters into the dotted boxes.</p>
            </div>
            <div className="box">
                <div className="box1"><p className="boxhj">1st</p></div>
                <div className="box2"><p className="boxhj">2nd</p></div>
                <div className="box3"><p className="boxhj">3rd</p></div>
                <div className="box3"><p className="boxhj">4th</p></div>
                <div className="box3"><p className="boxhj">5th</p></div>
            </div>
            <div className="images">
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/Qbk64lDKVy-runner-11.png" alt="" />
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/LGyRi7z1Ze-runner-21.png" alt="" />
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/odaceGNNt0-runner-31.png" alt="" />
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/HC30gn3BdV-runner-4-1.png" alt="" />
                <img src="https://ds055uzetaobb.cloudfront.net/uploads/Q6Q6wE9Sqw-runner-52.png" alt="" />
            </div>
            <div className="but">
                <button className="but1">Show Explanation</button>
                <button className="but2">Check Answer</button>
            </div>
        </div>
    )
}

export default Warmup5;
