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
            <div className="second">
                <div className="second_">
                    <div className="second1">
                        <p className="co">2</p>
                    </div>
                    <div className="second2">
                        <p className="second_txt1">Rational Detactives</p>
                        <p className="second_txt2">Eliminate the impossible and uncover the truth! Collapse</p>
                    </div>
                </div>
                <div className="intro">
                    <Card 
                    image="4.jpg"
                    title="Riddles of Order"
                    text="What order do these racers finish in?"/>
                    <Card 
                    image="5.jpg"
                    title="Crafty Counting"
                    text="Learn strategies for counting that go for beyond just counting."/>
                    <Card 
                    image="6.jpg"
                    title="Mystery Containers"
                    text="What's in each of these mystery boxes?"/>
                </div>
                <div className="intro">
                    <Card 
                    image="7.jpg"
                    title="Futoshiki"
                    text="Arrange the numbers to match the inequalities."/>
                    <Card 
                    image="8.jpg"
                    title="Shuffles"
                    text="Where did everything get shuffled to?"/>
                    <Card 
                    image="9.jpg"
                    title="False Information"
                    text="Solve problems where the people giving you hints might be lying."/>
                </div>
            </div>
            <div className="second">
                <div className="second_">
                    <div className="second1">
                        <p className="co">3</p>
                    </div>
                    <div className="second2">
                        <p className="second_txt1">Puzzles and Riddles</p>
                        <p className="second_txt2">Even trickier puzzles and the tools you need to solve them. Collapse</p>
                    </div>
                </div>
                <div className="intro">
                    <Card 
                    image="10.jpg"
                    title="Werewolves"
                    text="Who's a werewolf?"/>
                    <Card 
                    image="11.jpg"
                    title="Logical Language"
                    text="Explore the use of logical words and , or and not."/>
                    <Card 
                    image="12.jpg"
                    title="If A, then B"
                    text="If you do this quiz, you will learn about sentences like this one."/>
                </div>
                <div className="intro">
                    <Card 
                    image="13.jpg"
                    title="Elimination Grids."
                    text="Solve classic logic elimination puzzles."/>
                    <Card 
                    image="14.jpg"
                    title="Jigsaw Map"
                    text="Where do the pieces go on the map?"/>
                    
                </div>
            </div>
            <div className="second">
                <div className="second_">
                    <div className="second1">
                        <p className="co">4</p>
                    </div>
                    <div className="second2">
                        <p className="second_txt1">Multi-Level Thinking</p>
                        <p className="second_txt2">If you know that I know that you know... what then? Collapse</p>
                    </div>
                </div>
                <div className="intro">
                    <Card 
                    image="15.jpg"
                    title="Perfect Information"
                    text="What order do these racers finishIf everyone follows the same logic, can you find out what they know? in?"/>
                    <Card 
                    image="16.jpg"
                    title="Crafty Counting"
                    text="Learn strategies for counting that go for beyond just counting."/>
                    <Card 
                    image="17.jpg"
                    title="Mystery Containers"
                    text="What's in each of these mystery boxes?"/>
                </div>
                <div className="intro">
                    <Card 
                    image="18.jpg"
                    title="Futoshiki"
                    text="Arrange the numbers to match the inequalities."/>
                    <Card 
                    image="19.jpg"
                    title="Shuffles"
                    text="Where did everything get shuffled to?"/>
                    <Card 
                    image="20.jpg"
                    title="False Information"
                    text="Solve problems where the people giving you hints might be lying."/>
                </div>
                
            </div>
            <div className="second">
                <div className="second_">
                    <div className="second1">
                        <p className="co">5</p>
                    </div>
                    <div className="second2">
                        <p className="second_txt1">Competitive Games</p>
                        <p className="second_txt2">What will your opponent do? Logic it out! Collapse</p>
                    </div>
                </div>
                <div className="intro">
                    <Card 
                    image="21.jpg"
                    title="Competitive Games"
                    text="Don't take the last chocolate!"/>
                    <Card 
                    image="22.jpg"
                    title="Luk Tsut K'i"
                    text="Find the complete solution to a classic game"/>
                    <Card 
                    image="23.jpg"
                    title="Puppies and Kittens"
                    text="Solve a fuzzier, livelier variant of the poisoned chocolate game."/>
                </div>
                <div className="intro">
                    <Card 
                    image="24.jpg"
                    title="Poisoned Chocolate II"
                    text="What happens when the chocolate comes in rectangles?"/>
                    <Card 
                    image="25.jpg"
                    title="Game Search Algorithms"
                    text="Learn how simple AI systems approach game strategy"/>
                </div>
                
            </div>
            <div className="second">
                <div className="second_">
                    <div className="second1">
                        <p className="co">6</p>
                    </div>
                    <div className="second2">
                        <p className="second_txt1">Logic Machines</p>
                        <p className="second_txt2">Turn logic into arithmetic machines. Collapse</p>
                    </div>
                </div>
                <div className="intro">
                    <Card 
                    image="26.jpg"
                    title="Truth Tables"
                    text="Diagram out the meanings of each logical operator."/>
                    <Card 
                    image="27.jpg"
                    title="Basic Logic Gates"
                    text="How do AND, OR, and NOT gates work?"/>
                    <Card 
                    image="28.jpg"
                    title="Combinations"
                    text="Combine gates together to make complex circuits."/>
                </div>
                <div className="intro">
                    <Card 
                    image="29.jpg"
                    title="Fredkin Gates"
                    text="Take a peek at a gate used in biological and quantum computing."/>
                    <Card 
                    image="30.jpg"
                    title="Binary Numbers and Addition"
                    text="How does computer arithmetic work?"/>
                    <Card 
                    image="31.jpg"
                    title="Creating a Mechanical Adder"
                    text="Use what you've learned about logic gates to create a circuit that adds numbers."/>
                </div>
                
            </div>
            <div className="second">
                <div className="second_">
                    <div className="second1">
                        <p className="co">7</p>
                    </div>
                    <div className="second2">
                        <p className="second_txt1">Advanced Knights and Knaves</p>
                        <p className="second_txt2">Uncover liars on this island of logic! Collapse</p>
                    </div>
                </div>
                <div className="intro">
                    <Card 
                    image="32.jpg"
                    title="Indirection"
                    text="Can you trick a liar into telling you the truth?"/>
                    <Card 
                    image="33.jpg"
                    title="Knights and Knaves En Masse"
                    text="What happens when you try to do logic at a big island party?"/>
                    <Card 
                    image="34.jpg"
                    title="Jokers"
                    text="Solve tricky variants of knights and knaves puzzles where some residents can behave like either."/>
                </div>
                <div className="intro">
                    <Card 
                    image="35.jpg"
                    title="Other Variations"
                    text="Twist your mind around these unusual variants."/>
                    <Card 
                    image="36.jpg"
                    title="Humans and Vampires"
                    text="Now there are four types of island resident: can you still work out the truth?"/>
                    <Card 
                    image="37.jpg"
                    title="Challenges"
                    text="Challenge yourself with our hardest selection of logic puzzles."/>
                </div>
                
            </div>
            <div className="foot">
                <p>NEXT STEPS</p>
                <div className="foot1">
                    
                   <img src="38.jpg" className="footimg"alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Courses;
