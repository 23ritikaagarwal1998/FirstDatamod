import React from 'react';
import ReactDOM from 'react-dom';
import Jobs from './Landing/jobs';
import '../node_modules/carbon-components/css/carbon-components.css';
const HelloWorld = () => {
    return (
        <div>
            <Jobs/>
        </div>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));