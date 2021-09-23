import React from 'react';
import { Button } from 'carbon-components-react';
import "./Jobs.css";
import { iconAddSolid, iconSearch } from 'carbon-icons';
import Infomation from './Information';

  const Jobs = () => {
      return(
       <div>
         <form>
        <h2 style={{color:'#0072c3',paddingTop:'20px',paddingLeft:'80px',height:'80px'}}><strong>Database Schema Recommendation Tool</strong></h2>
        </form>
        <div >
        <h6 style={{paddingLeft:'80px'}}>This demo shows the schema recommendations obtained after running logic analysis on data.</h6>
       </div>
       <Infomation/>
       <Button kind="primary">Submit</Button>
       </div>
      );
  }
  export default Jobs;