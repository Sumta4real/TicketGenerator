export default function TicketFrame(props){
    return(
        <button className="ticketFrame">
            <p className="TicketAmount">{props.amount}</p>
            <div className="ticketTypeQuantity">
                <p className="smallText ticketType">{props.ticketType}</p>
                <p className="TicketNumberLeft smallText">{props.numberLeft}</p>
            </div>
        </button>
    )
}