import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../App.css"
import Image from "./MapImage.jpg";
import Vector from "./Vector.png";
import Vector1 from "./Vector1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';

const GetInTouch = () => {
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
                <form>
                    <div className="w-11/12">
                        <div className="pb-1 lg:pb-2 xl:pb-3">
                            <TextField label="Name" variant="outlined" fullWidth />
                        </div>
                        <div className="pb-1 lg:pb-2 xl:pb-3">
                            <TextField label="Email" type="email" variant="outlined" fullWidth />
                        </div>
                        <div className="pb-1 lg:pb-2 xl:pb-3">
                            <TextField label="Phone number" variant="outlined" fullWidth />
                        </div>
                        <div className="pb-1 lg:pb-2 xl:pb-3">
                            <TextField label="Question?"
                                multiline
                                rows={4}
                                variant="outlined" 
                                fullWidth />
                        </div>
                        <div>
                            <Button type="submit" variant="contained" fullWidth
                                style={{backgroundColor: "#322E2E"}}
                            >
                            Send</Button>
                        </div>
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
                            <div className="text-white font-light">info@marcc.com.au</div>
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