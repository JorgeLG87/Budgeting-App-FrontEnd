import "../Styling/EditForm.css";

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditForm () {

    const { id } = useParams();
    const navigate = useNavigate();
    const [ transaction, setTransaction ] = useState({});
    

    useEffect(() => {
        fetch(`http://localhost:4000/${id}`).then(response => { return response.json()})
        .then(res => setTransaction(res))
        .catch(() => {
            navigate('/notfound');
        })
    }, []);
    
    

    const [ editTransaction, setEditTransaction ] = useState({
        id: transaction.id,
        date: "",
        category: "",
        typeTransaction: "",
        from: "",
        amount: null
    })



    console.log(transaction);

    // function handleChange(e) {
    //     setEditTransaction({
    //         ...editTransaction,
    //         [e.target.id]: e.target.value
    //     })
    // }

    function edit() {
        setEditTransaction({
            id: transaction.id,
            date: document.getElementById("date").value || transaction.date,
            category: document.getElementById("category").value || transaction.category,
            typeTransaction: document.getElementById("type").value || transaction.typeTransaction,
            from: document.getElementById("from").value || transaction.from,
            amount: document.getElementById("amount").value || transaction.amount
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        console.log(editTransaction, "Line 49");

        fetch(`http://localhost:4000/${id}`, {
            method: "PUT",
            body: JSON.stringify(editTransaction),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(() => {
            navigate("/index");
        })
        .catch(error => console.error(error));
    }

    console.log(editTransaction, "Line 64");

    return (
        <div className="editform-container">
            <p className="editform-title">Edit Transaction</p>
            <form className="editform" onSubmit={handleSubmit}>
                <label className="editform-label">Transaction ID: <span style={{color:"transparent"}}>---</span>{transaction.id}</label>
                <label className="editform-label">
                    Transaction Date:
                    <input id="date" className="editform-input" placeholder={transaction.date} type="text" />
                </label>
                <label className="editform-label">
                    Transaction Category:
                    <input id="category" className="editform-input" placeholder={transaction.category} type="text" />
                </label>
                <label className="editform-label">
                    Type of Transaction:
                    <input id="type" className="editform-input" placeholder={transaction.typeTransaction} type="text" />
                </label>
                <label className="editform-label">
                    From:
                    <input id="from" className="editform-input" placeholder={transaction.from} type="text" />
                </label>
                <label className="editform-label">
                    Amount:
                    <input id="amount" className="editform-input" placeholder={transaction.amount} type="number" />
                </label>
                <div className="btns-container">
                    <button className="submit-btn" type="submit" onClick={() => {
                        edit();
                        handleSubmit()
                    }}>Save</button>
                    <button className="cancel-btn" type="button" onClick={() => navigate("/index")}>Cancel</button>
                    <button className="delete-btn" type="button">Delete</button>
                </div>
            </form>
        </div>
    )
}