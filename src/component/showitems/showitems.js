import { render } from '@testing-library/react';
import React , {Component, Fragment} from 'react' ; 
import './showitems.css';

class ShowItems extends Component {
  state ={
    main_state:true , 
    new_value :''
  }
    
    delete=(index)=>{
      this.props.delete(index);
    }
    change_state =()=>{
      let TheState = this.state.main_state ; 
      this.setState({main_state : !TheState});
    }
    savechange = (e)=>{
      e.preventDefault();
      this.props.update(this.props.key_anas , this.state.new_value);
      this.change_state();
    }
    takeNewValue =(e)=>{
       let newVaule = e.target.previousSibling.value ;
       this.setState({new_value :newVaule});
    }


    rendermain = () =>{
      return(
        <div className="showitems">
        <li >{this.props.courseinfo}</li> <input type="submit" value="Delete" onClick={()=>this.delete(this.props.key_anas)}/>
        <input type="submit" value="Update" onClick={this.change_state}/>
        </div>
      );
    }

    renderupdate =() =>{
      return(
        <div className="showitems1">
            <form onSubmit={this.savechange} >
            <input defaultValue={this.props.courseinfo} />
           <input type="submit" value="Save"  onClick={this.takeNewValue}/>
            </form>
        </div>
      )
    }

    render(){ 
     
    return(
         <Fragment >
           {this.state.main_state ? this.rendermain() : this.renderupdate() }
         </Fragment>
    )
    }
}
export default ShowItems ; 