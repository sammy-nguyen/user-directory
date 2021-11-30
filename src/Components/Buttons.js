import React, {Component} from "react"

 class Buttons extends Component {
   state = {

   };


   render() {
     return (
       <div className="black">
         <section className="button">
         <button className="previous" onClick={this.props.previousButton}>
           Previous
         </button>
         <button className="new" onClick={this.props.newButton}>
           New
         </button>

         <button className="next" onClick={this.props.nextButton}>
           Next
         </button>
         </section>
       </div>
     );
   }
 }

 export default Buttons;
