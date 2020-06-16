import React ,{useState} from "react";
import "./room.css";

function Room () {
    let [isLit , setLit] = useState(false);
    let [istemp , setTemp] = useState(24);
    return (
        <div className ={` room ${isLit? "lit" :"dark"}`}>
            <br/>
            <button className="button1" onClick ={() => setLit(!isLit)}>ONN OFF</button>
            <br/>
            <br/>
            <button className="button2" onClick ={() => {
            console.log("Temprature increases onclick");
              setTemp(++istemp);}}>+Temprature</button>
              <br/>
              <br/>
              <br/>
              Temp = {istemp}
              <br/>
              <br/>
              <br/>
               <button className="button3" onClick ={() => {
            console.log("Temprature decreases onclick");
              setTemp(--istemp);}}>-Temprature</button>
      
        </div>
    );
} 
export default Room;

 