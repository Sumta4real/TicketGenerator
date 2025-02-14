import { useState } from "react";
import { set } from "react-hook-form";
import { data } from "react-router-dom"

export default function TicketReady(props){
    const [showAlert, setShowAlert] = useState(false)
    const formData = JSON.parse(localStorage.getItem("ticketData"));
    

    function downloadTicket() { 
        setShowAlert(true)
    }
    
    return(
        <div className="pageBody">
                <div className="pageTitle">
                    <p className="text"> Ready </p>
                    <p>Step 3/3 </p>
                </div>
                <div className="progressBar"> </div>
                <div className="container align">
                    <div className="ticketReadyHeader">
                    <h1 className="ticketReadytext"> Your Ticket is Booked </h1>
                    <p className="smallText"> Check your email for a copy or you can <span className="bold">download</span> </p>     
                    </div>                   
                    <div className="actualTicket segment">
                        <img src="/TicketBackground.png" alt="TicketBackground" className="backgroundImage"/>
                        <div className="ticketContent segment">
                        <div className="ticketHeader">
                            <div className="eventTitleDescription ticketReadyDesc t">
                                <h1 className='eventTitle reduced'> Techember Fest "25</h1>
                                <p class="ticketInfo">📍 94 Rumeria Road, Ikoyi, Lagos</p>
                                <p class="ticketInfo">📅 March 15, 2025 | 7:00 PM</p>
                            </div>
                        </div>
                            <div className="imgUploader passportSize" style={{ padding: "0" }}>
                                <img src={formData.avatar} alt="Avatar" className="imagePreview"/>
                            </div>
                            <div className="attendeeData">
                                <div className="dataCard">
                                    <p className="label"> Enter your email* </p>
                                    <p className="value"> {formData.fullName} </p>
                                </div>
                                <div className="dataCard">
                                    <p className="label"> Enter your name </p>
                                    <p className="value"> {formData.fullName} </p>
                                </div>
                                <div className="dataCard">
                                    <p className="label"> Ticket Type: </p>
                                    <p className="value"> {formData.ticketType} </p>
                                </div>
                                <div className="dataCard">
                                    <p className="label"> Ticket for: </p>
                                    <p className="value"> {formData.NumberOfTickets} </p>
                                </div>
                            <div className="dataCard request">
                                    <p className="label" > Special Request?</p>
                                    <p className="value">
                                         {formData.specialRequest !== '' ? 
                                            formData.specialRequest : 
                                         'Nil ? Or the users sad story they write in there gets this whole space, Max of three rows'} 
                                    </p>
                            </div>
                            </div>
                        </div>
                            <div className="barcode">
                                <img src="/BarCode.png" alt="BarCode" />
                            </div>
                            </div>
                    
                </div>
                    {showAlert && 
                        <p className="alert"> Your ticket is downloading </p>
                     } 
                    <div className="buttons"> 
                      <button className="button buttonReady" disabled={!props.isValid} onClick={downloadTicket} > Download ticket </button>
                    <button className="button" disabled={!props.isValid} onClick={props.newTicket} > Book another ticket </button>
                </div>
            </div>
    )
}
