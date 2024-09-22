import  {Icard} from "../Card/Card"
import "./Work_exp.css"

export const Work_Exp=(props:Icard)=>{
    return (
        <div className="flip-cards" >
                
            
                        <h1>{props.Course_Name}</h1>
                        <h4>{props.Des}</h4>
                        <p className="p">{props.src}</p>
                    </div>
             
               

    );
}