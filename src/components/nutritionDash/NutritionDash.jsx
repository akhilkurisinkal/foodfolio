import React from "react";
import styles from "./NutritionDash.module.css"

const NutritionDash=()=>{
    return(
        <div className={styles.nutri_info}>
                <div>
                    Calories
                </div>
                <div>
                    <div>
                        Protein
                    </div>
                    <div>
                        Carbs
                    </div>
                    <div>
                        Fat
                    </div>
                </div>
            </div>
    )
}


export default NutritionDash;