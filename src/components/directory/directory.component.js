import React from 'react'

//maintain state in react component
class Directory extends React.Component {

    constructor(){

        super();
        this.state = {
            
            categories: [
                "electronics","groceries","mobiles"
            ]
        }
    }


    
  render() {
      
    return (
      <div className="directory-component">
          {
              this.state.categories.map((category)=> <p>{category}</p>)
          }
      </div>
    );
  }
}

export default Directory;