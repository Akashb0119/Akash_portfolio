
import "./Allpages.css"
 export type IALlPages={
img:any;
}
export const ALLPages=(props:IALlPages)=>{
    return(<>
    <div className="TabBar">
        <img src={props.img} alt="" />
    </div>
    </>
    );
}