

import React from 'react';
import Dash_navbar from '../Components/Dash_navbar';
import Aside from '../Components/aside';
import Calendar from '../Components/Calendar';
import MedicineTable from '../Components/MedicineTable';
function DashUser(props) {
    return (
        <div>
       <Dash_navbar/>
        <Aside/>
        <div className=''> 
            <MedicineTable/>
            </div>
       
        </div>
    );
}

export default DashUser;