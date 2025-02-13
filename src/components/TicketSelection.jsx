import TicketFrame from "./TicketFrame"
import data from '../ticketTypeData'
import { nanoid } from 'nanoid'

export default function TicketSelection(props){

    return(
        <div className="pageBody">
                <div className="pageTitle">
                    <p className="text"> Ticket Selection </p>
                    <p> Step 1/3 </p>
                </div>
                <div className="progressBar"> </div>
                <div className="container">
                    <div className="EventSegment">
                        <div className="eventTitleDescription">
                            <h1 className='eventTitle'> Techember Fest "25</h1>
                            <p className="eventDesciption">
                            Join us for an unforgettable experience at
                            <br/>[Event Name]! Secure your spot now.
                            </p>
                        </div>
                        <div className="eventdateLocation">
                        <p className="eventLocation">  
                            📍 [Event Location] </p>
                        <p className="hidden"> || </p>
                        <p className="eventDate"> March 15, 2025 | 7:00 PM </p>
                        </div>
                    </div>
                    <div className="horizontalLine"> </div>
                    <div>
                    <label htmlFor='e' className="smallText">Select Ticket Type:</label>
                    <div className="segment tickets">
                       {data.map( (ticket) => {
                        return(
                            <TicketFrame 
                                key={nanoid()}
                                ticketType = {ticket.ticketType}
                                numberLeft = {ticket.numberLeft}
                                amount = {ticket.amount}/>
                        )
                       })}
                    </div>
                    </div>
                    <div>
                <label htmlFor='NumberOfTickets' className="smallText">Number of Tickets </label>
                <select 
                    name="NumberOfTickets" 
                    id='NumberOfTickets' 
                    className="input segment"
                    {...props.register(
                        'NumberOfTickets',
                        {required:'Please select the number of tickets you want'}
                    )}
                >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    </div>
                    <div className="buttons">
                    <button className="button" onClick={props.next}> Next </button>
                    <button className="button" onClick={props.cancel}>Cancel</button>
                    </div>
                </div>
            </div>
    )
}