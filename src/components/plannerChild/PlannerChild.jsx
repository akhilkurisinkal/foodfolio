import React from "react";
import styles from "./PlannerChild.module.css";

const PlannerChild=(props)=>{
    return(
            <div className={styles.container}>
                            <div>
                                <h4>{props.title}</h4>
                            </div>
                            
                            <div>
                                <div>
                                    {props.calories} Cal
                                </div>
                                <div>
                                    <button>Add meal</button>
                                </div>
                            </div>
            </div>
        
    )
}

export default PlannerChild;