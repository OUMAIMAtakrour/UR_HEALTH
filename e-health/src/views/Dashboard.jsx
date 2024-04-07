
import React from "react";
import Aside from "../Components/aside";
import Dash_navbar from "../Components/Dash_navbar";
import PatientTable from "../Components/PatientTable";
import VisitsChart from "../Components/Chart";
import Stats from "../Components/Stats";


export default function Dashboard(){
    return(
        <div>
       <Dash_navbar/>
       <Aside/>
        <div className="">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
           
<Stats/>

          
                <VisitsChart/>
            
         
        
              <PatientTable/>
           
      
          </div>
        </div>
       
      </div>
    )
}