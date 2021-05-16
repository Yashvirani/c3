import React , {useEffect,useState} from 'react';
import './Warmup.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Warmup1 from './Warmup1/Warmup1';
import Warmup2 from './Warmup2/Warmup2';
import Warmup3 from './Warmup3/Warmup3';
import {Avatar,IconButton} from "@material-ui/core";
import Warmup4 from './Warmup4/Warmup4';
import Warmup5 from './Warmup5/Warmup5';
import Warmup6 from './Warmup6/Warmup6';
import Extra2 from './Extra2/Extra2';
import Extra3 from './Extra3/Extra3';
import Extra4 from './Extra4/Extra4';

function Warmup() {
    let [count,setCount] = useState(0);
    let [disabled1,setDisabled1] = useState(false);
    let [disabled2,setDisabled2] = useState(false);

    let content = <Warmup1 />
    let content2 = null;
    if(count == 2){
        content = <Warmup2 />
        content2 = <Extra2 />
    }
    if(count == 3){
        content = <Warmup3 />
        content2 = <Extra3 />
    }
    if(count == 4){
        content = <Warmup4 />
    }
    if(count == 5){
        content = <Warmup5 />
    }
    if(count == 6){
        content = <Warmup6 />
        content2 = <Extra4 />
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
                        <div  className="sli" style={{backgroundColor:(count == 1) ?'#FFC500':'#C7BFBF',height:'3vh',width:'3vw',marginLeft:'1px'}}></div>
                        <div className="sli"  style={{backgroundColor:(count == 2) ?"#FFC500":"#C7BFBF",height:'3vh',width:'3vw',marginLeft:'1px'}}></div>
                        <div className="sli"  style={{backgroundColor:(count == 3) ?'#FFC500':'#C7BFBF',height:'3vh',width:'3vw',marginLeft:'1px'}}></div>
                        <div className="sli"  style={{backgroundColor:(count == 4) ?'#FFC500':'#C7BFBF',height:'3vh',width:'3vw',marginLeft:'1px'}}></div>
                        <div className="sli"  style={{backgroundColor:(count == 5) ?'#FFC500':'#C7BFBF',height:'3vh',width:'3vw',marginLeft:'1px'}}></div>
                        <div className="sli"  style={{backgroundColor:(count == 6) ?'#FFC500':'#C7BFBF',height:'3vh',width:'3vw',marginLeft:'1px'}}></div>
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
                {content2}
            </div>
            
        </div>
    )
}

export default Warmup;
