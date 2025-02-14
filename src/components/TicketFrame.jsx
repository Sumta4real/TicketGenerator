export default function TicketFrame(props){

        const ticketClass = props.isSelected ? 'ticketFrame ticketSelected' : 'ticketFrame '; 
    
        return (
            <button
                className={ticketClass}
                onClick={props.onClick}
            >
                <p className="TicketAmount">{props.amount}</p>
                <div className="ticketTypeQuantity">
                <p className="smallText ticketType">{props.ticketType} ACCESS</p>
                <p className="TicketNumberLeft smallText">{props.numberLeft}</p>
            </div>
            </button>
        )
}