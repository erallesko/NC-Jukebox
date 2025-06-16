import { useState } from "react";


export default function Balance () {

    let [balance, setBalance] = useState(0);

    function handleClick () {
        setBalance(balance + 1)
    }
  
    return <>
            <p>Current balance: £{balance}</p>

            <button onClick={handleClick}>
                Add balance
            </button>

           </>

};