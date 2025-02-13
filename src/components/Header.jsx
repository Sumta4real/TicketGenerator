import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <img 
            src="./ticket-icon.png" 
            alt="Event Icon" 
            />
            <ul className="hidden">
                <Link> </Link>

            </ul>
            <Link to="/selectTicket" className='ticket-btn'> MY TICKETS ⟶ </Link>
        </div>
    )
}