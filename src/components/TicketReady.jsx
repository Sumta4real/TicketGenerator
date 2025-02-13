export default function TicketReady(props){

    return(
        <div className="pageBody">
                <div className="pageTitle">
                    <p className="text"> Ready </p>
                    <p className="smallText">Step 3/3 </p>
                </div>
                <div className="progressBar"> </div>
                <div className="container">
                    <h1 className="TicketReadytext"> Your Ticket is Booked </h1>
                    <p className="smallText"> You can download or Check youe email for a copy</p>                        
                    <div className="actualTicket">

                    </div>
                    <div className="buttons">
                    <button className="button" disabled={!props.isValid} onClick={props.newTicket} > Book another ticket </button>
                    <button className="button" disabled={!props.isValid} onClick={props.completed} > Download ticket </button>
                </div>
                </div>
            </div>
    )
}
