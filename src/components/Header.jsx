import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <img 
            src="/logo.png" 
            alt="Event Icon" 
            />
            <div className="tabs">
                <ul className="hidden">
                <li> Event </li>
                <li> My Tickets </li>
                <li> About Project  </li>
            </ul>
            </div>
            <Link to="/" className='ticket-btn'> MY TICKETS ⟶ </Link>
        </div>
    )
}