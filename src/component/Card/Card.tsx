import "./card.css"
export type Icard = {
    Course_Name: String;
    Des: any;
    src: any;
}

export const SingleCard: React.FC<Icard> = (props) => {
    return <>
        
            <div className="flip-card" >
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={props.src} alt="Avatar" />

                    </div>
                    <div className="flip-card-back">
                        <h1>{props.Course_Name}</h1>
                        <p>{props.Des}</p>
                    </div>
                </div>
            </div>
       

    </>
}