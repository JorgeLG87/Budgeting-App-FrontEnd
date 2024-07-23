import "../Styling/Delete.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Delete({ id }) {

    const API = import.meta.env.VITE_MY_API_URL;
    const navigate = useNavigate();

    const [ transactionsArr, setTransactionsArr ] = useState([]);

    useEffect(() => {
        fetch(`${API}`).then(response => response.json())
        .then(res => setTransactionsArr(res));
    },[])

    function handleDelete(id) {
        fetch(`${API}${id}`, { method: "DELETE" })
        .then(() => {
            navigate("/index")
        })
        .catch(error => console.error(error));
    }

    console.log(transactionsArr, "Line 25");

    return (
        <button className="delete-btn" type="button" onClick={() => {
            handleDelete(id);
            // navigate("/index");
        }}>
            Delete
        </button>
    )
}