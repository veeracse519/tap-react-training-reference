import React from "react"
import {observer} from "mobx-react"
import { observable } from "mobx"
import {studentStore,StudentStore} from "../../../stores/StdentsStore"
import StudentModel from "../../../stores/StudentsModel"
type addStudentProps={
    onStudentAdd:(name:string,gender?:string)=>void
    //studentStore:StudentModel
}
@observer
class StudentsPage extends React.Component<addStudentProps>{
 
    @observable studentName:string=""
    @observable gender:string=""
    handleStudentName=(event)=>{
        this.studentName=event.target.value
    }
    handleStudentGender=(event)=>{
this.gender=event.target.value
    }
    onKeyDown=(event)=>{
        if(event.keyCode===13){
          
            const{onStudentAdd}=this.props
            onStudentAdd(this.studentName,this.gender)
            this.studentName="";
            this.gender="";
        }
    }
    render(){
        return(<div>
            <input style={{backgroundColor:"green",margin:"10px"}} type="text" onChange={this.handleStudentName} onKeyDown={this.onKeyDown} value={this.studentName}></input>
          <input style={{backgroundColor:"yellow"}} type="text" onChange={this.handleStudentGender} onKeyDown={this.onKeyDown} value={this.gender}></input>
        </div>)
    }
}
export default StudentsPage