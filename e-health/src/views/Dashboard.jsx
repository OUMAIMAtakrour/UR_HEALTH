
import React from "react";
import {Navigate} from "react-router-dom";
import Aside from "../Components/aside";
import Dash_navbar from "../Components/Dash_navbar";
import PatientTable from "../Components/PatientTable";
import VisitsChart from "../Components/Chart";
import Stats from "../Components/Stats";
import { userStateContext } from "../contexts/ContextProvider";
import router from "../router";


export default function Dashboard(){
  const {currentUser,userToken}= userStateContext();
  if (!userToken){
    return <Navigate to='signup'/>
  }
    return(
        <div>
       <Dash_navbar/>
       <Aside/>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-400 border-dashed h-full rounded-lg  mt-14">
           
<Stats/>

            <div className=" h-70 mb-4 rounded  ">
              <p className="text-2xl text-gray-400 ">
                <VisitsChart/>
              </p>
            </div>
         
          
              <p className="text-2xl text-gray-400 dark:text-gray-500">
              <PatientTable/>
              </p>
           
          
          </div>
        </div>
       
      </div>
    )
}