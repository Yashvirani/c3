import React from 'react';
import './Courses.css';
import { BrowserRouter as Router ,Switch,Route,Link } from 'react-router-dom';
import Card from '../Card/Card';
import {useState} from 'react';

function Courses() {
    const [intro,setIntro] = useState({})
    return (
        <div className="courses">
            <div className="first">
                <div className="first_one">
                    <p className="p1"> Back to all courses</p>
                    <p className="p2">Logic</p>
                    <p className="p3">Stretch your analytic muscles with knights, knaves, logic gates, and more!</p>
                    <p className="p4">The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.</p>
                    <p className="p5">You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges!Read more </p>
                    <Link className="lk">View prerequisites and next steps</Link>
                </div>
                <div className="first_two">
                <div class="card gh">
                    <div class="card-body">
                        <img className="img1" src="po.jpg" alt="" />
                        <div className="fp">
                            <div className="cardtxt1">
                                <p className="num1">37</p>
                                <p className="txt1">Interactive quizzes</p>
                            </div>
                            <div className="cardtxt2">
                                <p className="num1">
                                    265+
                                </p>
                                <p className="txt1">
                                    Concepts and exercises
                                </p>
                            </div>
                        </div>
                        <button type="submit" className="btn3">Start Course</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="second">
                <div className="second_">
                    <div className="second1">
                        <p className="co">1</p>
                    </div>
                    <div className="second2">
                        <p className="second_txt1">Introduction</p>
                        <p className="second_txt2">Put your logic to the test with these warmups!</p>
                    </div>
                </div>
                <div className="intro">
                    <Card 
                    image="1.jpg"
                    title="Warmup Puzzles"
                    text="Get started with some logic warmups"/>
                    <Card 
                    image="2.jpg"
                    title="Truth Seeking"
                    text="Who or what is telling the truth?"/>
                    <Card 
                    image="3.jpg"
                    title="Strategic Deductions"
                    text="Strech the information you're given as far as it can go!"/>
                </div>
            </div>
        </div>
    )
}

export default Courses;
