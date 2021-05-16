import React  from 'react' ; 
import './formitems.css';
const FormItems = (props)=>{
    return (
      <div className="FormItems">
          <form onSubmit={props.Add}>
           <input onChange={props.myupdate} value={props.current}/>
           <input type="submit" value="Add New Language" />
           </form>
      </div>
    );
  }
export default FormItems;