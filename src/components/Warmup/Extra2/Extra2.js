import React from 'react';
import './Extra2.css';

function Extra2() {
    return (
        <div className="extra2">
            <div className="b">
                <input className="rad" type="radio" />
                <label className="lab" htmlFor="">Black</label>
            </div>
            <div className="b">
                <input className="rad" type="radio" />
                <label className="lab" htmlFor="">White</label>
            </div>
            <div className="b">
                <input className="rad" type="radio" />
                <label className="lab" htmlFor="">There isn't enough information to be certain.</label>
            </div>
            <button className="but2 bn">Submit</button>
            <button className="but1">Show Explanation</button>
            

        </div>
    )
}

export default Extra2;
