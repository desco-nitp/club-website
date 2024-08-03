import React ,{useRef,useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../App.css"
import Image from "./MapImage.jpg";
import Vector from "./Vector.png";
import Vector1 from "./Vector1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const GetInTouch = () => {
    const form = useRef();
    const [username,setusername]=useState("");
    const [useremail,setuseremail]=useState("");
    const [userphone,setuserphone]=useState("");
    const [userquery,setuserquery]=useState("");
    
    const errorToast=(msg)=>{
        toast.warn(msg,
            {
                position:"top-right"
            }
        )
    }
  const sendEmail = (e) => {
    
    e.preventDefault();
    if(username.length===0){
        errorToast("Please enter your name");return;
    }
    if(useremail.length===0){
        errorToast("Please enter your email");return;
    }
    if(userphone.length<10){
        errorToast("Please enter correct phone number");return;
    }
    if(userquery.length===0){
        errorToast("Please enter your query");return;
    }

    setuseremail("");
    setusername("");
    setuserphone("");
    setuserquery("");
    
    
    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
            toast.success("Message sent Successfully !", {
                position:"top-right"
              });
        },
        (error) => {
          toast.error("Some error occurred, please resubmit the form !",{
            position:"top-right"
          })
        },
      );
    
  };
    return (
        <div className="bg-[#E0767F]  flex flex-col sm:flex sm:flex-row mt-[50rem] md:mt-[40rem] h-fit py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
            
            <div className="flex flex-col sm:w-1/2 px-10 sm:px-12 md:px-14 lg:px-[5rem] xl:px-20">
                <div className="font-bold text-white text-3xl md:text-4xl lg:text-5xl pb-2 md:pb-3 lg:pb-4 xl-pb-6">
                    <span className="text-white syne-fon">Get in </span>
                    <span className="text-[#222020] syne-fon">Touch</span>
                </div>
                <div className="text-white text-[0.8rem] sm:text-[0.6rem] md:text-[0.7rem] lg:text-sm xl:text-base pb-2 md:pb-3 lg:pb-4 xl-pb-6" style={{ lineHeight: '1.2' }}>
                Feel free to get in touch with us. We are open to discuss new projects, creative ideas or opportunities to be part of your visions.
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="w-11/12">
                        <div className="pb-1 lg:pb-2 xl:pb-3">
                            <TextField value={username} onChange={(e)=>setusername(e.target.value)} name="name" label="Name" variant="outlined" fullWidth />
                        </div>
                        <div className="pb-1 lg:pb-2 xl:pb-3">
                            <TextField value={useremail} onChange={(e)=>setuseremail(e.target.value)} name="email" label="Email" type="email" variant="outlined" fullWidth />
                        </div>
                        <div className="pb-1 lg:pb-2 xl:pb-3">
                            <TextField value={userphone} type="number" onChange={(e)=>setuserphone(e.target.value)} name="phone" label="Phone number" variant="outlined" fullWidth />
                        </div>
                        <div className="pb-1 lg:pb-2 xl:pb-3">
                            <TextField value={userquery} onChange={(e)=>setuserquery(e.target.value)} name="message" label="Question?"
                                multiline
                                rows={4}
                                variant="outlined" 
                                fullWidth />
                        </div>
                        <div>
                            <Button  type="submit" variant="contained" fullWidth
                                style={{backgroundColor: "#322E2E"}}
                            >
                            Send</Button>
                        </div>
                        <ToastContainer />
                    </div>
                </form>
                <div className="flex flex-row pt-3 lg:pt-6">
                    <div className="flex flex-row w-1/2">
                        <div className="pr-2">
                        <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="flex flex-col text-[0.7rem] sm:text-[0.5rem] md:text-[0.65rem] lg:text-[0.7rem] xl:text-sm">
                            <div className=" text-black font-medium">PHONE</div>
                            <div className="text-white font-light">03 5432 1234</div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="pr-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="flex flex-col text-[0.7rem] sm:text-[0.5rem] md:text-[0.65rem] lg:text-[0.7rem] xl:text-sm">
                            <div className=" text-black font-medium">EMAIL</div>
                            <div className="text-white font-light">desco.club@nitp.ac.in</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden sm:flex sm:w-1/2 relative justify-center items-center">
                <div className="absolute xl:top-0 lg:top-[3rem] md:top-[5rem] sm:top-[6rem] sm:left-0 md:left-[0.5rem] lg:left-[1.5rem] xl:left-[3.5rem] sm:w-[3rem] md:w-16 lg:w-24 xl:w-28 z-0">
                    <img
                    src={Vector}
                    alt="Vector">
                    </img>
                </div>
                <div className="relative sm:w-9/12 md:w-8/12 lg:w-7/12 z-10">
                    <img
                    src={Image}
                    alt="MapImage">   
                    </img>
                </div>
                <div className="absolute bottom-0 right-[1.5rem] sm:w-[3rem] md:w-[3.8rem] lg:w-[5.5rem] xl:w-[7rem] ">
                <img
                    src={Vector1}
                    alt="Vector">
                    </img>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;


