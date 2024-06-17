import React, { createContext, useState } from "react";
export const AppContext=createContext();
export const AppProvider=(props)=>{
    const [plan,setPlan]=useState({breakfast:{mname:"tuna",mcal:"200"},morningSnacks:{mname:"tuna",mcal:"200"},lunch:{mname:"tuna",mcal:"200"},eveningSnacks:{mname:"tuna",mcal:"200"},dinner:{mname:"tuna",mcal:"200"}});
    const [selectedMealType,setSelectedMealType]=useState("break");
    const [addMealActive,setAddMealActive]=useState(false);
    const [dayPlan,setDayPlan]=useState([{mealType:"Breakfast",mealItems:[{name:"Tuna sandwich", calories:"355"},{name:"Banana Shake", calories:"150"}]}]);

    return(
        <AppContext.Provider value={{plan,setPlan,selectedMealType,setSelectedMealType,addMealActive,setAddMealActive,dayPlan,setDayPlan}}>
            {props.children}
        </AppContext.Provider>
    )
}