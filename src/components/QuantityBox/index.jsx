import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { useState } from "react";
const QuantityBox=()=>{
    const [inputVal,setinputVal]=useState(1);
    const minus=()=>{
        if(inputVal<=1){
            setinputVal(1)
        }else{
            setinputVal(inputVal-1);
        }
    }
    const plus=()=>{
        setinputVal(inputVal+1);
    }
    return(
        <div className="quantityDrop d-flex align-items-center">
            <Button onClick={minus}><FiMinus /></Button>
            <input type="text" value={inputVal} />
            <Button onClick={plus}><FaPlus /></Button>

        </div>

    )
}
export default QuantityBox;