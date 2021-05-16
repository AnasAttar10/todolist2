import React ,{Component} from 'react' ; 
import ShowItems from './component/showitems/showitems' ; 
import FormItems from './component/formitems/formitems' ;
import './main.css';
class App extends Component{
   
  state = {
    courses :['Html' , 'Css' , 'Javascript' , 'Bootstrap'],
    current : ''
  }
  myupdate =(e)=>{
    let newvalue = e.target.value;
    this.setState({current : newvalue});
  } 
  Add = (e)=>{
    e.preventDefault();
     let arr =  this.state.courses;
     let value = this.state.current ;
     let anaslangs = arr.push(value);
     //let anaslangs = arr.push({name:value});
     this.setState({courses : arr ,current:''});
  }
  delete =(index)=>{
     let temp = [... this.state.courses] ; 
     let remove = temp.splice(index , 1 );
     this.setState({courses : temp});
  }
  update = (index , newvalue)=>{
    let temp = [... this.state.courses] ; 
    temp[index]=newvalue ; 
    this.setState({courses:temp});
  }

  render(){
   // const {courses} = this.state;
   const courses =this.state.courses ; 
    const courseList = courses.map((course , index) =>{
      return(
        <ShowItems courseinfo = {course} key = {index} key_anas ={index} delete = {this.delete} update={this.update}/>
      )
    })

    return (
      <div className="App">
        <div className="App-child">
        <div className="counter">
        <h2>Add courses</h2>
        <FormItems current={this.state.current} myupdate = {this.myupdate} Add ={this.Add} />
       <ul> {courseList}</ul>      
      </div>
      </div>
      </div>
    );
  }
  }
export default App;
