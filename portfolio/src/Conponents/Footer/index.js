import React from 'react';
import { FaLinkedin,FaInstagram,FaGithubSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import Icon from "../Icons/Icons"
import "./styles.css"

function index(props) {
    return (
        <div className={"zzigi"}>
            <div className="cover-1g9e-vwdhinp">
                <h4>
                    CONNECT WITH ME: 
                </h4>
                <div>
                    <div className="irwrapper-f0hewiond-black-icons-g8rwhvoin">
                            <a href="/socialhandler"><Icon size={"1.5rem"}><FaInstagram /></Icon></a> 
                            <a href="/socialhandler"><Icon size={"1.5rem"}><FaLinkedin /></Icon></a>
                            <a href="/socialhandler"><Icon size={"1.5rem"}><MdEmail /></Icon></a>
                            <a href="/socialhandler"><Icon size={"1.5rem"}><FaGithubSquare /></Icon></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index;
