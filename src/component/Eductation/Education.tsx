import React from 'react'
import BE from "../../static/BE.png"
import HSC from "../../static/12th.jpg"
import SSLC from "../../static/10th.jpg"
import "./education.css"

function Education() {
  return (<>
  <div className="container_Edu">
    <center>
    <div className="tooltip BE">
        <img src={BE} alt="BE" /><span className='T_BE'>Bachelor of Engineering</span>
        <div className="toottext context-1">
            <h3>MECHANICAL ENGINEERING</h3>
            <p>OCTOBER 2020 </p>
            <p>PRINCE SVP ENGINEERING COLLEGE</p>
            <p>CHENNAI-600127</p>
        </div>
        </div>
        <div className="tooltip HSC">
        <div className="line"></div>
        <img src={HSC} alt="HSC" /><span className='T_HSC'>HSC</span>
        <div className="toottext context-2">
            <p>APRIL 2016</p>
            <p>VAILANKANNI MATRICULATION AND HIGHER SECONDARY SCHOOL</p>
            <p>BARGUR-635104</p>
        </div>
        </div>
        <div className="tooltip SSLC">
        <div className="line"></div>
        <img src={SSLC} alt="SSLC"/><span className='T_SSLC'>SSLC</span>
        <div className="toottext context-3">
            <p>MARCH 2014</p>
            <p>BOSTON MATRICULATION HIGHER SECONDARY SCHOOL</p>
            <p>JOLARPET-635851</p>
        </div>
        <div className="line"></div>





    </div>
    </center>
  </div>
  </>
    
  )
}

export default Education