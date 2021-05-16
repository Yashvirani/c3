import React , {useEffect,useState} from 'react';
import './Warmup.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Warmup1 from './Warmup1/Warmup1';
import Warmup2 from './Warmup2/Warmup2';
import {Avatar,IconButton} from "@material-ui/core";

function Warmup() {
    let [count,setCount] = useState(0);
    let [disabled1,setDisabled1] = useState(false);
    let [disabled2,setDisabled2] = useState(false);

    let content = <Warmup1 />
    if(count == 2){
        content = <Warmup2 />
    }

    

    return (
        <div className="warmup">
            <div className="warmup1">
                <p className="warmup1txt">Back</p>
                <p className="warmup2txt">Logic</p>
            </div>
            
            <div className="warmup2">
                {content}
            </div>
            <div className="warmup3">
                <div className="kl">
                    <div className="warmup3p">
                        <p className="warmuptxt31">Lesson 1</p>
                        <p className="warmuptxt32">WARMUP PUZZLES</p>
                    </div>
                        
                    <div className="content">
                        <IconButton onClick={() => {
                            setCount(count = count - 1);
                            setDisabled2(false);
                            if(count<=1){
                                setDisabled1(true);
                                setCount(1);
                                setDisabled2(false);
                            }
                            else{
                                setDisabled2(false);
                            }
                            console.log(count);
                            console.log(disabled1);
                        }} disabled={disabled1}>
                            <ChevronLeftIcon />
                        </IconButton>
                        <span  style={{background:(count == 1) ?'yellow':'lightgray',height:'3vh',width:'3vw'}}></span>
                        <span  style={{backGround:(count == 2) ?"yellow":"red",height:'3vh',width:'3vw'}}></span>
                        <div  style={{backGroundColor:(count == 3) ?'yellow':'lightgray',height:'3vh',width:'3vw'}}></div>
                        <div  style={{backGroundColor:(count == 4) ?'yellow':'lightgray',height:'3vh',width:'3vw'}}></div>
                        <div  style={{backGroundColor:(count == 5) ?'yellow':'lightgray',height:'3vh',width:'3vw'}}></div>
                        <div  style={{backGroundColor:(count == 6) ?'yellow':'lightgray',height:'3vh',width:'3vw'}}></div>
                        <IconButton onClick={() => {
                            setCount(count = count + 1);
                            setDisabled1(false);
                            console.log(count);
                            if(count >= 6){
                                setCount(6);
                                setDisabled2(true);
                                setDisabled1(false);
                                console.log(disabled2)
                            }
                            else{
                                setDisabled2(false);
                            }
                        }} disabled={disabled2}>
                            <ChevronRightIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Warmup;
