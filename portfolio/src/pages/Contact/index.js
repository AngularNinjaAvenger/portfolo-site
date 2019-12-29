import React from 'react'
import Container from "../../Conponents/Container"
import { FaLinkedin,FaInstagram,FaGithubSquare,FaWhatsappSquare,
    FaWhatsapp,
    FaFacebookF,
    FaFacebookSquare,
    FaFacebook,
    FaTwitterSquare,
    FaTwitter} from "react-icons/fa"
import Icon from "../../Conponents/Icons/Icons"
import "./styles.css"
function Index() {
    return (
        <Container>
            <div className="center-g480ino">
                <div>
                    <div>
                        <h5>EMAIL: osayibishop@gmail.com</h5>
                        <div>
                            <a href="/socialhandler"><Icon color={"black"} size={"2.5rem"}><FaGithubSquare /></Icon></a>
                            <a href="/socialhandler"><Icon color={"black"} size={"2.5rem"}><FaLinkedin /></Icon></a>
                            <a href="/socialhandler"><Icon color={"black"} size={"2.5rem"}><FaInstagram /></Icon></a> 
                        </div>
                    </div>
                    <div>
                        <h5>PHONE: +2348104105847</h5>
                        <div>
                            <a href="/socialhandler"><Icon color={"black"} size={"2.5rem"}><FaWhatsappSquare /></Icon></a>
                            <a href="/socialhandler"><Icon color={"black"} size={"2.5rem"}><FaTwitterSquare /></Icon></a>
                            <a href="/socialhandler"><Icon color={"black"} size={"2.5rem"}><FaFacebookSquare /></Icon></a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Index
