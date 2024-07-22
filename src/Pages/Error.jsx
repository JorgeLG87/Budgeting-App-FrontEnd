import "../Styling/Error.css";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="error-container">
            <p className="error-title">Error 404 - No Transaction Found</p>
            <Link to="/index"><button className="back-btn" type="button">Go Back</button></Link>
        </div>
    )
}