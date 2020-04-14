import React from "react"
import {observer} from "mobx-react"
import { observable } from "mobx"
import StudentModel from "../../../stores/StudentsModel"
type studentProps={
student:StudentModel
}
@observer
class StudentComponent extends React.Component<studentProps>{
    @observable name:string=""
    @observable gender?:string=""
    onUpdateName=(event)=>{
        const {student}=this.props
        student.updateName(event.target.value)
     
    }
    render(){
        const {student}=this.props
        return(<div>
            <input type="text" onChange={this.onUpdateName} defaultValue={student.name}></input>
        {student.gender?<p>{student.gender}</p>:""}
        </div>)
    }
}
export default StudentComponent