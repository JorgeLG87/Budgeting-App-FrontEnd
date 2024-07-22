import "../Styling/CreateForm.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

export default function CreateForm() {

    const navigate = useNavigate();

    const [ transactionsArrLength, setTransactionsArrLength ] = useState(null);
    const [ newTransaction, setNewTransaction ] = useState({
        id: null,
        typeTransaction: "",
        amount: null,
        date: "",
        from: "",
        category: ""
    });

    useEffect(() => {
        fetch("http://localhost:4000/").then(response => {
            return response.json();
        })
        .then(res => setTransactionsArrLength(res.length));
    },[])

    // console.log(transactionsArrLength);

    function create() {
        setNewTransaction({
            id: transactionsArrLength+1,
            typeTransaction: document.getElementById("createform-type").value || "None",
            amount: Number(document.getElementById("createform-amount")).value || 0,
            date: document.getElementById("createform-date").value || "None",
            from: document.getElementById("createform-from").value || "None",
            category: document.getElementById("createform-category").value || "None"
        })
    }


    function handleSubmit(e) {
        
        e.preventDefault();

        console.log(transactionsArrLength, "Line 19");

        fetch("http://localhost:4000/", {
            method: "POST",
            body: JSON.stringify(newTransaction),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            navigate("/index");
        })
        .catch(error => console.error(error));

        // console.log(newTransaction, "Line 58");

    }

    return (
        <div className="createform-mother-container">
            <p className="createform-title">Create Transaction</p>

            <form className="createform-container" onSubmit={handleSubmit}>
                <label className="createform-label">
                    Date: 
                    <input id="createform-date" className="createform-input" type="date"/>
                </label>
                <label className="createform-label">
                    Category:
                    <select id="createform-category" className="createform-select">
                        <option value="None">---Choose One---</option>
                        <option>Food</option>
                        <option>Bill</option>
                        <option>Travel</option>
                        <option>Income</option>
                        <option>Healthcare</option>
                    </select>
                </label>
                <label className="createform-label">
                    From: 
                    <input id="createform-from" className="createform-input" type="text"/>
                </label>
                <label className="createform-label">
                    Type of Transaction:
                    <input id="createform-type" className="createform-input" type="text"/>
                </label>
                <label className="createform-label">
                    Amount:
                    <input id="createform-amount" className="createform-input" type="number"/>
                </label>
                <button className="createform-btn" type="submit" onClick={() => {
                    create();
                    handleSubmit();
                }}>Create</button>
            </form>
        </div>
    )
}