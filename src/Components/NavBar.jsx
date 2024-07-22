import "../Styling/NavBar.css";
import { useNavigate } from "react-router-dom";

export default function NavBar() {

    const navigate = useNavigate()

    return (
        <div className="navbar-container">
            <p className="navbar-title" onClick={() => navigate("/")}>Budgeting App</p>
            <button className="navbar-btn" type="button" onClick={() => navigate("/create")}>New Transaction</button>
        </div>
    )
}