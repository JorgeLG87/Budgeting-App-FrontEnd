import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styling/ShowPage.css";


export default function ShowPage({ Delete }) {

    const API = import.meta.env.VITE_MY_API_URL
    const { id } = useParams();
    const navigate = useNavigate();


    const [ transaction, setTransaction ] = useState({});
    const [ typeUpperCase, setTypeUpperCase ] = useState("");

    useEffect(() => {
        fetch(`${API}${id}`).then(response => { return response.json()})
        .then(res => setTransaction(res))
        .catch(() => {
            navigate('/notfound');
        })
    }, []);

    
    console.log(transaction.id);

    return (
        <div className="transaction-container">
            <h1 className="transaction-title">Transaction {transaction.id}</h1>
            <div className="table">
            <div className="transaction-title-box">
                <p className="title-date">Date</p>
                <p className="title-type">Type</p>
                <p className="title-category">Category</p>
                <p className="title-from">From</p>
                <p className="title-amount">Amount</p>
            </div>
            <div className="transaction-box">
                <p className="transaction-date">{transaction.date}</p>
                <p className="transaction-type">{transaction.typeTransaction}</p>
                {/* <p className="transaction-id">{transaction.id}</p> */}
                <p className="transaction-category">{transaction.category}</p>
                <p className="transaction-from">{transaction.from}</p>
                <p className="transaction-amount">$ {transaction.amount}</p>
            </div>
            </div>
            <div className="btns2-container">
                <Link style={{display:"content", width:"10%"}} to={`/${transaction.id}/edit`}><button className="edit-btn" type="button">Edit</button></Link>
                <Delete id={id}/>
            </div>
        </div>
    )
}