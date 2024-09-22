import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Grid, TableContainer } from "@mui/material"
import Tab from "@mui/material/Tab"
import { useState } from "react"
import { ALLPages } from "../All Pages/All"
import { UiDesign } from "../UI design/UI"
import { WebPage } from "../Web pages/WebPage"
import "./Nav.css"
import img1 from "../../static/Web1.png";
import img2 from "../../static/web2.jpeg";
import img3 from "../../static/web3.jpeg";
import img4 from "../../static/web4.jpeg";
import img5 from "../../static/web5.png";
import img6 from "../../static/web6.jpeg";


export const Navbar:React.FC=()=>{
    let [position,setPostion]=useState("0")
    return<>
    <div className="title2">
    <Box>
    
    <TabContext value={position}  >
    <div className="Nav">
       <TabList onChange={(e,num)=>{setPostion(num)}} textColor='inherit'
  indicatorColor="primary" >
        <Tab label="All" value={"0"} ></Tab>
        <Tab label="UI Design" value={"1"}></Tab>
        <Tab label="Web Design" value={"2"}></Tab>

       </TabList>
       </div>
       <div className="NavContext">
       <TabPanel value="0">
       <Grid
    container
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    >
      <ALLPages img={img1}/>
        <ALLPages img={img2}/>
        <ALLPages img={img1}/>
        <ALLPages img={img4}/>
        <ALLPages img={img5}/>
        <ALLPages img={img6}/>
    </Grid>
        
       </TabPanel>
       <TabPanel value="1">
       <Grid
    container
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    >
        <UiDesign img={img1}/>
        <UiDesign img={img1}/>
        <UiDesign img={img1}/>
        <UiDesign img={img1}/>

        <UiDesign img={img1}/>
        <UiDesign img={img1}/>
        <UiDesign img={img1}/>
        <UiDesign img={img1}/>
        </Grid>
        
       </TabPanel>
       <TabPanel value="2">
       <Grid
    container
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    >
        <WebPage img={img2}/>
        <WebPage img={img2}/>
        <WebPage img={img2}/>
        <WebPage img={img2}/>
        <WebPage img={img2}/>
        <WebPage img={img2}/>
        <WebPage img={img2}/>
        </Grid>
       </TabPanel>
       </div>
       
     </TabContext>
    </Box>

    </div>
    
    
   
    
        
        
   
    </>
}