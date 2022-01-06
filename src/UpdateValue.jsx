import React, { useState } from "react";
import { Lifecycle } from "./Lifecycle";
export function UpdateValue(){
    const [CityValues, setValues] = useState([{
        label: "Chennai",
        value: "Chennai",
      },
      {
        label: "Trichy",
        value: "Trichy",
      },
      {
        label: "Madurai",
        value: "Madurai",
      },
      {
        label: "My Location",
        value: "My Location",
      }])
      const [selectedValue,setSelectedValue] = useState('');
        const handleChange =(e)=>{
        setSelectedValue(e.target.value);
      }

    return(
        <>
        <div>
            <h3>City Names:</h3>
                <select  value={selectedValue} onChange={handleChange}>
                <option value="">Select City</option>
                    {CityValues.map((item)=>(
                        <option value={item.value} key={item.value}>{item.label}</option>
                    )
                    )}
                </select>
        </div>
        <div>
            <Lifecycle selectedValue={selectedValue}/>
        </div>
        
        </>

    )
}