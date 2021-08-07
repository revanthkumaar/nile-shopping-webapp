import React from 'react'

//maintain state in react component
class Directory extends React.Component {

    constructor(){

      super();
       this.state = {
         sections: [
           {
             title: "veggies",
             imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
             id: 1,
             linkUrl: "veggies",
           },
           {
             title: "jackets",
             imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
             id: 2,
             linkUrl: "",
           },
           {
             title: "sneakers",
             imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
             id: 3,
             linkUrl: "",
           },
           {
             title: "womens",
             imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
             size: "large",
             id: 4,
             linkUrl: "",
           },
           {
             title: "mens",
             imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
             size: "large",
             id: 5,
             linkUrl: "",
           },
         ]
       };
    }


    
  render() {
      
    return (
      <div className="directory-component">
          {
              this.state.sections.map(({id, ...otherSectionProps}) => {
                  console.log(otherSectionProps);
              })
          }
      </div>
    );
  }
}

export default Directory;





