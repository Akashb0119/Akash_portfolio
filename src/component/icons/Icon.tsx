import { Grid } from "@mui/material";
import { FaGithub, FaInstagramSquare, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import "./Icon.css"
import whatsapp from "../../static/whatsapp.png"
import insta from "../../static/insta.png"
import linkedin from "../../static/Linkedin.png"
import git from "../../static/git.png"
 export const Icons=()=>{
    return(<>

        <div className="Icons">
        <Grid 
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    columnGap={8}
    
    >
    <a href="https://wa.me/8778010985?text=Hello ?" target="_blank"><img src={whatsapp} alt="" /></a>
    <a href="https://www.instagram.com/d_u_k_e_r___b_o_y__ak_as_h/" target="_blank"><img src={insta} alt="" /></a>
    <a href="https://www.linkedin.com/in/akash-bhoopathy-6941042a7" target="_blank"><img src={linkedin} alt="" /></a>
    <a href="https://github.com/Akashb0119" target="_blank"><img src={git} alt="" /></a>
        </Grid>
        </div>

    
    </>
        
    );
 }