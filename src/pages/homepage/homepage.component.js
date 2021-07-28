//imports that are needed
import React from 'react';
import Directory from '../../components/directory/directory.component'
//functional component named "HomePage"
const HomePage = () => {

    return(
        <div className="homepage-component">
            <p>this is home page component</p>
            <Directory/>
        </div>
    )

}
//this component must be made importable
export default HomePage;