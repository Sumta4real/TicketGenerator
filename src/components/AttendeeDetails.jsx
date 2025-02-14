import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function AttendeeDetails(props) {
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [loading, setLoading] = useState(false)

  
  const handleFileChange = (event) => {
    event.preventDefault
    const file = event.target.files[0]
    handleFileUpload(file)
  };

  const handleFileUpload = (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ImageAvatarForConference"); // replace with your preset

    fetch("https://api.cloudinary.com/v1_1/dbrseiwly/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setAvatarUrl(data.secure_url);
        props.setValue("avatar", data.secure_url);
      })
      .catch((err) => {
        console.error("Error uploading file:", err);
        alert("File upload failed, please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="pageBody">
      <form onSubmit={props.handleSubmit}>
        <div className="pageTitle">
          <p className="text">Attendee Details</p>
          <p>Step 2/3</p>
        </div>
        <div className="progressBar"></div>
        <div className="container">
          <div className="segment">
            <label
              htmlFor="avatar"
              className="smallText"
              tabIndex="0"
              aria-label="Upload an avatar of choice"
            >
              Upload Profile Photo
            </label>
            <div className="imgUploaderContainer" tabIndex="0" role="button">
              <input
                type="file"
                id="avatar"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <div
                className="imgUploader"
                style={{ padding: avatarUrl ? "0" : "24px" }}
                onClick={() => document.getElementById('avatar').click()}
              >
                {avatarUrl ? (
                  <img
                    className="imagePreview"
                    src={avatarUrl}
                    alt="Profile"
                  />
                ) : (
                  <>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faCloudDownloadAlt}
                    />
                    <p className="">Drag & drop or click to upload</p>
                  </>
                )}
              </div>
            </div>
            {loading && <p className="smallText">Loading...</p>}
            {props.errors.avatar && (
              <p className="error" role="alert">
                Please upload a profile picture.
              </p>
            )}
          </div>

          <div className="horizontalLine"></div>

          <div>
            <label
              htmlFor="fullName"
              className="smallText"
              tabIndex="1"
              aria-label="Enter your name"
            >
              Enter your name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="segment input"
              {...props.register("fullName", {
                required: "Please fill in your name",
                minLength:{
                  value:2,
                  message: "Please type your first and last name"
                },
              })}
              aria-describedby="nameError"
            />
            {props.errors.fullName && (
              <p className="error" role="alert">
                {props.errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="smallText"
              tabIndex="2"
              aria-label="Enter your email"
            >
              Enter your email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="segment input"
              placeholder="✉ hello@avioflagos.io"
              {...props.register("email", {
                required: "Please fill in your email",
              })}
              aria-describedby="emailError"
            />
            {props.errors.email && (
              <p className="error" role="alert">
                {props.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="specialRequest"
              className="smallText"
              tabIndex="3"
              aria-label="Enter your special request"
            >
              Special Request?
            </label>
            <textarea
              name="specialRequest"
              id="specialRequest"
              className="segment"
              placeholder="Textarea"
              cols="3"
              {...props.register("specialRequest")}
              aria-describedby="specialRequestError"
            >
            </textarea>
            {props.errors.specialRequest && (
              <p className="error" role="alert">
                {props.errors.specialRequest.message}</p>)}
                </div>
            <div className="buttons">
                    <button className="button buttonReady" type="submit" disabled={!props.isValid || !avatarUrl} onClick={props.next}> Get My Free Ticket </button>
                    <button className="button" onClick={props.back}>Back</button>
                </div>
            

</div>
</form>
</div> )}
