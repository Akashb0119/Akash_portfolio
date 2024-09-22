import "./home.css";
import img from "../../static/pro pic.jpg"
import { Button, Card, Grid, Icon, Link } from "@mui/material";

import python from "../../static/Python.png"
import Html_Css from "../../static/Html css.png"
import JS from "../../static/JS.png"
import Ts from "../../static/TS.png"
import React from "../../static/React.png"
import django from "../../static/django.png"
import mongodb from "../../static/mongodb.jpg"
import { SingleCard } from "../../component/Card/Card";
import { Navbar } from "../../component/Navbar/NavBar";
import { ALLPages } from "../../component/All Pages/All";
import { Header } from "../../component/header/Header";
import { Work_Exp } from "../../component/Work-Exp/Work_exp";
import { Icons } from "../../component/icons/Icon";
import Education from "../../component/Eductation/Education";
import { PdfDownload } from "../../component/CV Download/PdfDownload";



export const Home = () => {
    return <>
        <div className="container" id="home">
            <header>
                <div className="col1 half-styled-text">
                    Portfolio
                </div>
                <div className="col2">
                    <nav>
                        <ul >
                            <li className="Head_tab"><Header label="Home" href={"#home"} /></li>
                            <li className="Head_tab"><Header label="About Me" href={"#AboutMe"} /></li>
                            <li className="Head_tab"><Header label="Skills" href={"#Skills"} /></li>
                            <li className="Head_tab"><Header label="Project" href={"#Project"} /></li>
                            <li className="Head_tab"><Header label="Contact Me" href={"#Contact"} /></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="content">
                <div className="content_left">
                    <div className="item1">
                        <p>Hello</p>
                        <p> <span>I'm Akash</span></p>
                        <h3>Web Developer &</h3>
                        <h3>Full Stack Python Developer</h3>
                    </div>
                    <div className="item buttons">
                    <a className="btn">HIRE ME</a>
                    </div>
                    

                </div>
                <div className="content_right">
                    <img src={img} alt="no img" />
                </div>
            </div>

            <div className="main1">
                <div className="item1">



                    <h1 className="title1" id="AboutMe"><u>Abou</u>t Me</h1>
                    <center>
                        <p>I am an experienced Full-Stack Developer with a diverse skill set and  a proven track record of <br />
                            4+ years in designing, developing, and implementing web applications.I possess proficiency in <br />
                            front-end technologiessuch as HTML, CSS, JavaScript, and React, as well as expertise in back-end <br />
                            frameworks including Python, Django, Express, and MongoDB.</p>
                        <br />
                        <p> I have successfully led projects, including at Sunbelt Rentals,resulting in a 30% performance  <br />
                            improvement and a 45% increase in user engagement. I excel in collaborating with cross-functional <br />
                            teams to deliver high-quality, scalable solutions and possess strong problem-solving abilities, <br />
                            attention to detail, and a commitment to continuous learning and innovation.</p>
                        <div className="buttons ">
                            <a className="btns b1" href={"#Project"}>VIEW WORKS
                    
                            </a>
                            <a className="btns b2" >Download 
                            </a>
                        </div>
                    </center>



                </div>
                <br />
                <br />
                <div className="item1">
                   <h1 className="title1" id="Education"><u>Educat</u>ion</h1>
                    <Education/>
                    </div>
        
                    
                <div className="item2">

                    <h1 className="title1" id="Skills"><u>Skil</u>ls</h1>
                    <center>
                        <p>Adept at creating seamless and dynamic web applications from front-end to back-end.<br />
                         Proficient in HTML and CSS for crafting responsive, accessible user interfaces and JavaScript, <br />
                        including React, for building interactive and performant web components. </p>

                        <p>Skilled in Django and Python to develop robust server-side logic and RESTful APIs,  <br />
                        ensuring efficient data handling and integration.Experienced in implementing complex  <br />
                        business logic and maintaining secure, scalable web applications. </p>

                        <p>Knowledgeable in MongoDB for managing and querying NoSQL databases, designing flexible schemas, <br />
                         and optimizing performance for high-traffic applications.Capable of integrating MongoDB with  <br />
                         back-end technologies for effective data storage and retrieval.</p>

                        <div className="box">
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <SingleCard src={python} Course_Name={"Python"} Des={"Familiar with fundamental Python concepts including syntax, control flow, data types, functions, and object-oriented programming.Able to write scripts and solve programming problems."} />
                                <SingleCard src={Html_Css} Course_Name={"HTML & CSS"} Des={"Proficient in HTML and CSS, with experience in creating well-structured, responsive web pages. Capable of designing layouts, implementing web standards, and optimizing user interfaces for various devices."} />
                                <SingleCard src={JS} Course_Name={"Java Script"} Des={"Experienced in JavaScript for developing interactive web features. Proficient in core concepts including variables, functions, events, and asynchronous programming with promises and async/await. Familiar with DOM manipulation and basic data handling."} />
                                <SingleCard src={Ts} Course_Name={"Type Script"} Des={"Experienced in TypeScript for developing robust and maintainable code with strong typing and advanced object-oriented features. Proficient in using TypeScript to enhance code quality, improve readability, and integrate seamlessly with modern JavaScript frameworks."} />
                                <SingleCard src={React} Course_Name={"React"} Des={"Proficient in React for building dynamic, component-based user interfaces. Experienced in using hooks, context, and state management to create responsive and interactive web applications. Familiar with React Router for navigation and integrating with RESTful APIs or GraphQL."} />
                                <SingleCard src={django} Course_Name={"Django"} Des={"Proficient in Django for developing robust web applications with a focus on clean, maintainable code and rapid development. Experienced in utilizing Django’s ORM for database management, implementing user authentication, and creating RESTful APIs. Familiar with Django’s admin interface and built-in security features."} />
                                <SingleCard src={mongodb} Course_Name={"MongoDB"} Des={"Proficient in performing CRUD operations in MongoDB. Experienced with creating, reading, updating, and deleting documents using MongoDB’s shell commands and drivers. Able to design schemas, manage collections, and ensure efficient data retrieval and manipulation."} />


                            </Grid>

                        </div>

                    </center>
                </div>
                <br />
                <br />
                <div className="item2">

                    <h1 className="title1" id="Project"><u>Lates</u>t Works</h1>
                    <center>
                        <p>Developed several web applications using React, focusing on creating dynamic and responsive user interfaces. <br />
                         Implemented state management with hooks, utilized React Router for navigation, and integrated APIs for real-time data.  <br />
                         Gained practical experience in building and optimizing component-based architectures.</p>

                         <p>Developed robust web applications using Django and Python, with PostgreSQL for efficient data management. <br />
                         Built and maintained RESTful APIs, designed database schemas, and implemented user authentication.  <br />
                         Focused on creating scalable solutions with optimized performance and secure data handling.</p>
                    </center>
                    <div><Navbar /></div>


                </div>
                <br />
                <br />
                <div className="item2">

                    <h1 className="title1"><u>Wor</u>k Experience</h1>
                
                    <div className="box">
                        <div className="work_exp">
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Work_Exp Course_Name={"Tata Consultancy Services"} Des={"Python Developer(03/2024- Present)"} src={"This project aims to create a user-friendly web application using Python and Django, focusing on intuitive UI and engaging UX design.By leveraging Django's framework, we will ensure responsive and accessible interfaces that enhance user satisfaction. "} />
                                <Work_Exp Course_Name={"Tata Consultancy Services"} Des={"System Enginer(03/2022-02/2024)"} src={"As a tester for this project, I will evaluate the customer account management and order processing features built on Salesforce. My focus will be on ensuring the system functions smoothly, meets user requirements, and delivers a seamless experience. Through comprehensive testing, I aim to identify any issues and enhance the overall performance of the platform."} />
                                <Work_Exp Course_Name={"Tenneco Pvt Ltd"} Des={"Quality Control Engineer(11/2020- 03/2022)"} src={"This production company specializes in inspecting products and ensuring the quality of materials used in manufacturing. Our rigorous quality control processes help identify defects and maintain high standards throughout production. By prioritizing quality assurance, we ensure that our clients receive reliable and durable products."} />
                                


                            </Grid>
                        </div>

                    </div>

                </div>

            </div>
            <br />
            <br />

            <footer>
                <div className="top1">
                    <center>
                        <br /><br /><br /><br />
                        <h1 className="head">Have any projects in Mine?</h1>
                        <br />
                        <button className=" btns foot_btn"> HIRE ME</button>
                    </center>
                </div>
                <div className="top2 icons" id="Contact">
                    <Icons />
                </div>
                <div className="top3 ">
                    <div >
                        <nav>
                            <ul>
                            <li><Header label="Home" href={"#home"} /></li>
                            <li><Header label="About Me" href={"#AboutMe"} /></li>
                            <li><Header label="Skills" href={"#Skills"} /></li>
                            <li><Header label="Project" href={"#Project"} /></li>
                            <li><Header label="Contact Me" href={"#Contact"} /></li>
                            </ul>

                        </nav>
                    </div>
                </div>

            </footer>

        </div>

    </>
}