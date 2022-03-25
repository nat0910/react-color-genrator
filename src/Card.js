import React from "react";
import {MdContentCopy} from "react-icons/md";
import { hoverIn,hoverOut,clipBoard } from "./utilitis";

const Card = ({ rgb ,hex, weight ,index,dispatch})=>{

    let bcg = rgb.join(',');
    let hexval= `#${hex}`

    return <>
        <div className={`card ${ index>10 ? 'light':'dark'}`} style={{backgroundColor : `rgb(${bcg})`}}  onMouseEnter={()=>hoverIn(index)} onMouseLeave={()=>hoverOut(index)} >
            <div className="card-content" >
                <div>
                    <p>{weight}%</p>
                    <p>{hexval}</p>
                </div>
                <button className="copy" onClick={()=>clipBoard(hexval,dispatch)} > <MdContentCopy></MdContentCopy> </button>
            </div>
        </div>
    </>
}

export default Card;