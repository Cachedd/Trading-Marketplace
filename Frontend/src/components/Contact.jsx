// For all references please see references.txt file in repository (Frontend folder)
import React, { useState, useRef } from "react";
import api from "../api/posts";
import { CircularProgress } from "@material-ui/core";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Makes a POST request to the /contact enpoint to add the contact form info to database
  const addMessage = () => {
    api
      .post("/contact", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
      })
      .then(() => {
        console.log("success");
      })
      .catch((err) => console.log(err));
  };

  const formRef = useRef(null);
  const [sendBtn, setSendBtn] = useState("SEND");

  const handleSendClick = () => {
    if (formRef.current) {
      // This is a function to submit the form. I am preventing the submission for now. Also has a loading icon with that transforms to message sent.
      // formRef.current.submit();
      setSendBtn(<CircularProgress className="fade-in" color="inherit" />);
      setTimeout(() => {
        setSendBtn(<CircularProgress className="fade-out" color="inherit" />);
        setTimeout(() => {
          setSendBtn("MESSAGE SENT");
        }, 1000);
      }, 1000);
    }
  };

  // To explain briefly, this function is used to check if the user has entered a first name. If they have, the border will turn green and a tick will appear.
  // If they haven't, the border will turn red and the tick will disappear. onBlur() just means when the user clicks out of the input box.

  // First Name
  const firstNameRef = useRef(null);
  const [showTick, setShowTick] = useState(false);
  const checkFirstName = () => {
    const firstname = firstNameRef.current;
    if (firstname.value === "" || firstname.value === null) {
      firstname.style.border = "3px solid #db4437";
      setShowTick(false);
    } else {
      firstname.style.border = "3px solid #76ba1b";
      setShowTick(true);
    }
  };
  // Last Name
  const lastNameRef = useRef(null);
  const [showTickLastName, setShowTickLastName] = useState(false);
  const checkLastName = () => {
    const lastname = lastNameRef.current;
    if (lastname.value === "" || lastname.value === null) {
      lastname.style.border = "3px solid #db4437";
      setShowTickLastName(false);
    } else {
      lastname.style.border = "3px solid #76ba1b";
      setShowTickLastName(true);
    }
  };
  // Email Address (Only difference with this vs the other functions is input must include an @ symbol)
  const emailRef = useRef(null);
  const [showTickEmail, setShowTickEmail] = useState(false);
  const checkEmail = () => {
    const email = emailRef.current;
    if (
      (email.value !== "" && email.value.includes("@")) ||
      (email.value !== null && email.value.includes("@"))
    ) {
      email.style.border = "3px solid #76ba1b";
      setShowTickEmail(true);
    } else {
      email.style.border = "3px solid #db4437";
      setShowTickEmail(false);
    }
  };
  // Message
  const messageRef = useRef(null);
  const checkMessage = () => {
    const message = messageRef.current;
    if (message.value === "" || message.value === null) {
      message.style.border = "3px solid #db4437";
    } else {
      message.style.border = "3px solid #76ba1b";
    }
  };

  // This function will be used to check if all the fields are filled out correctly. If they are, the form will submit. If not, the form will not submit.
  const contactSendButton = () => {
    if (
      showTick === true &&
      showTickLastName === true &&
      showTickEmail === true &&
      messageRef.current.value !== "" &&
      messageRef.current.value !== null
    ) {
      handleSendClick();
      addMessage();
    }
  };

  return (
    <div
      id="contact"
      className="h-screen w-full flex flex-col justify-center items-center "
    >
      <div className="w-full bg-white rounded-2xl shadow-xl flex justify-center items-center flex-col h-[90%] pb-8">
        <h1 className="text-3xl uppercase font-semibold py-5 md:my-10 w-fit md:w-[33%] text-center">
          CONTACT US
        </h1>
        <div className="flex  bg-gray-200 w-[84%] flex-col h-[70%] rounded-t-xl justify-between items-center ">
          <form
            ref={formRef}
            action="mailto:103389809@student.swin.edu.au"
            className="flex flex-col h-full w-[84%] rounded-t-xl justify-evenly items-center"
          >
            <div className="flex justify-center gap-5 lg:gap-8 items-center flex-col lg:flex-row mt-5 w-[90%] md:w-[75%]">
              <div className="w-full lg:w-[50%] relative h-fit">
                {/* If the showTick state is true, the tick will appear. If not, the tick will disappear. This applies for the other inputs as well. */}
                <BsFillCheckCircleFill
                  style={{ opacity: showTick ? 1 : 0 }}
                  className="text-xl text-[#76ba1b] absolute right-4 top-[50%] translate-y-[-50%] duration-200"
                />
                <input
                  onBlur={checkFirstName}
                  ref={firstNameRef}
                  id="firstname"
                  type="text"
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                  required
                  maxLength={20}
                  placeholder="First Name"
                  className=" h-full w-full p-3 text-sm border-b-4 bg-[#FFFFFF] rounded-xl text-center font-semibold text-[#000000] duration-200"
                />
              </div>

              <div className="w-full lg:w-[60%] relative h-fit">
                <BsFillCheckCircleFill
                  style={{ opacity: showTickLastName ? 1 : 0 }}
                  className="text-xl text-[#76ba1b] absolute right-4 top-[50%] translate-y-[-50%] duration-200"
                />
                <input
                  onBlur={checkLastName}
                  type="text"
                  id="lastname"
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                  ref={lastNameRef}
                  required
                  maxLength={25}
                  placeholder="Last Name"
                  className="w-full h-full p-3 text-sm border-b-4 bg-[#FFFFFF] rounded-xl text-center font-semibold text-[#000000] duration-200"
                />
              </div>
            </div>
            <div className="w-[90%] lg:w-[75%] relative h-fit">
              <BsFillCheckCircleFill
                style={{ opacity: showTickEmail ? 1 : 0 }}
                className="text-xl text-[#76ba1b] absolute right-4 top-[50%] translate-y-[-50%] duration-200"
              />

              <input
                onBlur={checkEmail}
                ref={emailRef}
                id="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
                required
                maxLength={50}
                placeholder="Email Address @"
                className="p-3 w-full text-sm border-b-4 bg-[#FFFFFF] rounded-xl text-center font-semibold text-[#000000] duration-200"
              />
            </div>

            <textarea
              onBlur={checkMessage}
              ref={messageRef}
              id="message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              placeholder="Message"
              required
              rows="4"
              cols="50"
              className="w-[90%] h-[30%] lg:w-[75%] p-3 bg-[#FFFFFF] rounded-md text-sm text-[#000000] font-semibold duration-200"
            ></textarea>
          </form>
        </div>
        {/* Trigger a final check to see if all the fields are filled out correctly. If they are, the form will submit. If not, the form will not submit. 
        This is not operating yet. It will once a back-end is implemented. */}
        <button
          onClick={contactSendButton}
          className="h-20 bg-[#3A71FD] w-[84%] text-white font-semibold text-md rounded-b-xl hover:bg-[#2b335f] duration-200"
        >
          {sendBtn}
        </button>
      </div>
    </div>
  );
};

export default Contact;
