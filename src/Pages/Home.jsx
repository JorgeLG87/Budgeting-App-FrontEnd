import "../Styling/Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate()
    return (
        <>
            <p className="home-title">Home Page</p>
            <div className="middle-boxes">
                <div className="alltransactions-container">
                    <p className="alltransactions-text">Always keep track of your financials. Take a closer look at your transactions...</p>
                    <div className="alltransactions-btn-container">
                        <button className="alltransactions-btn" type="button" onClick={() => navigate("/index")}>All Transactions</button>
                    </div>
                </div>
                <div className="budget-container">
                    <p className="budget-title">Budget</p>
                </div>
            </div>
        </>
    )
}