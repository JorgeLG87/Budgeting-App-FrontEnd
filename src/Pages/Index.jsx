import "../Styling/Index.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Index() {
    
    const API = import.meta.env.VITE_MY_API_URL;
    const [ transactionsArr, setTransactionsArr ] = useState([]);

    useEffect(() => {
        fetch(`${API}`).then(response => response.json())
        .then(res => setTransactionsArr(res));
    },[])

    function sumOfTransactions() {
        return transactionsArr.reduce((accu, transaction) => accu + Number(transaction.amount),0);
    }
    console.log(transactionsArr.length, "Line 17");
    
    return (
        <div className="index-container">
            <p className="index-title">Transactions</p>
            {transactionsArr.map((obj, idx) => <Link style={{textDecoration:"none"}} to={`http://localhost:5173/${obj.id}`}><div className="single-transaction" key={idx}><p>{obj.date}</p><p>{obj.category}</p><p>${obj.amount}</p></div></Link>)}
            <p className="total">Bank Account Total: ${sumOfTransactions().toFixed(2)}</p>
        </div>
    )
}