import React, {  useState } from "react";
export const Card = () => {
    
    const flag = true;
    
    // state - bien (useState)
    const [count, setCount] = useState(0);
    
    

    const handClick = () => {
        
        setCount((prev) => {
           
            return (prev += 1);
            
        })
        console.log('click', count + 1);
        
    };
    const handOnMouseDown = (evt) => {
        console.log(evt);
    };

    if (flag) return (
        <div>
            Doan Vinh <br />
            <button style={{height: '40px', width: '80px'}} onClick={handClick}>Click</button> 
            <input style={{height: '34px', width: '200px'}} type="text" onMouseDown={handOnMouseDown} />
            <div>{count}</div>
        </div>
    )
    return (
        <div>
           Vinh Doan
        </div>
    

    )
}