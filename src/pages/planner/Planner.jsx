import React from "react";
import styles from "./Planner.module.css";
import PlannerChild from "../../components/plannerChild/PlannerChild";
import NutritionDash from "../../components/nutritionDash/NutritionDash";

const Planner=()=>{

    const [breakfast,setBreakfast]={};
    const [morningSnack,setMorningSnack]={};
    const [lunch,setLunch]={};
    const [eveningSnack,setEveningSnack]={};
    const [dinner,setDinner]={};

    const set

    return(
        <div className={styles.planner}>

            <h3>Create meal plan</h3>

      
            <PlannerChild title="Breakfast" calories="390" />
            <PlannerChild title="Morning snacks" calories="200"/>
            <PlannerChild title="Lunch" calories="550"/>
            <PlannerChild title="Evening snacks" calories="200"/>
            <PlannerChild title="Dinner" calories="680"/>
            
            <div>
                this is a popup for adding meals
                <h4>Add meal</h4>
                <label htmlFor="mealName">Name</label>
                <input type="text" name="mealName" id="mealName" /><br/>
                <label htmlFor="cal">Calories</label>
                <input type="text" name="cal" id="cal"/><br/>
                <button onClick={}>Add meal</button>
            </div>

        </div>
    )
}

export default Planner;