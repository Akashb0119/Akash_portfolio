import "../All Pages/Allpages.css"
 export type IALlPages={
img:any;
}
export const WebPage=(props:IALlPages)=>{
    return(<>
    <div className="TabBar">
        <img src={props.img} alt="" />
    </div>
    </>
    );
}