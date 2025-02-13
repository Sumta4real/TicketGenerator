import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons"

export default function AttendeeDetails(props){

    function TriggerFileInput(){
        return(document.getElementById('avatar').click())
    }

    function handleDrop(event){
        event.preventDefault();
        const file = event.target.files[0]
        validateFile(file);
    }
    function handleFileChange(event){
        event.preventDefault();
        const file = event.target.files[0]
        validateFile(file);
    }
    function validateFile(file){
       (file && file.type.startsWith("image/")) ?
            props.setImage(URL.createObjectURL(file)) :
            alert("Please upload a valid image file")

    }

    return(
        <div className='pageBody'>
            <div className="pageTitle">
            <p className="text"> Attendee Details </p>
            <p>Step 2/3 </p>
            </div>
            <div className="progressBar"> </div>
            <div className="container">
                <div className="segment">
                    <label htmlFor="avatar" className="smallText">Upload Profile Photo</label>
                    <div 
                        className="imgUploaderContainer"
                        onClick={() => TriggerFileInput()}
                        onDrag={(event) => event.preventDefault()}
                        onDrop={handleDrop}
                    >
                        <div className="imgUploader ">  
                         <Link className='imgUploader smallText'> 
                                <FontAwesomeIcon className='icon' icon={faCloudDownloadAlt}/>
                                Drag & drop or click to upload 
                        </Link>
                            <input 
                                type="file" 
                                name="avatar"
                                id="avatar"
                                accept="image/*" 
                                onChange={handleFileChange}
                                className="hide"
                                {...props.register("avatar",
                                    {required:'Please fill in your name'}
                            ) }
                        />
                        </div>
                        {props.errors.avatar && 
                            <p className="error">Please upload an image</p>
                        }
                   </div>
                </div>
                <div className="horizontalLine"> </div>
                <div>
                    <label  htmlFor='' className="smallText">Enter your name</label>
                    <input 
                        type='text' 
                        name="fullName" 
                        id='fullName'
                        className="segment input"
                        {...props.register("fullName",
                            {required:'Please fill in your name'}
                        )}
                    />
                    {props.errors.fullName && <p className="error">Please fill in your name</p>}
                </div>
                <div>
                    <label htmlFor="email" className="smallText">Enter your email*</label>
                    <input 
                        type='email' 
                        name="email"
                        id="email"
                        className="segment input" 
                        placeholder="✉ hello@avioflagos.io"
                        {...props.register("email",
                            {required:'Please fill in your email'}
                        )}
                    />
                    {props.errors.email && <p className="error">Please fill in your name</p>}
                </div>
                <div>
                    <label htmlFor="specialRequest" className="smallText">Special Request ?</label>
                    <textarea  
                        name="specialRequest"
                        id="specialRequest"
                        className="segment" 
                        placeholder="Textarea" 
                        cols='3'
                        {...props.register("specialRequest",
                            {required:'Please fill in your email'}
                        )}
                    >
                    </textarea>
                    {props.errors.specialRequest && <p className="error">Please fill in your name</p>}
                    
                    
                </div>
                <div className="buttons">
                    <button className="button" disabled={!props.isValid} onClick={props.next} > Get My Ticket </button>
                    <button className="button"  onClick={props.back} >Back</button>
                </div>
            </div>
        </div>
       
        )

}