import React from "react"
import {observer} from "mobx-react"
//import { observable } from "mobx"
import StudentsPage from "../SudentAdd"
import {studentStore} from "../../../stores/StdentsStore"
import StudentComponent from "../StudentsList"

@observer
class StudentPage extends React.Component{

    onStudentAdd=(studentName:string,gender?:string)=>{
        studentStore.addStudent(studentName,gender)
    }
    renderStudentsList=()=>{
        return studentStore.studentList.map(eachStudent=>{return <StudentComponent key={eachStudent.id} student={eachStudent}/>})
    }
    render(){
        return(
            <div>
            <StudentsPage onStudentAdd={this.onStudentAdd}/>
            {this.renderStudentsList()}
            {/* {studentStore.studentList.map(eachStudent=>
                <StudentComponent student={eachStudent} key={eachStudent.id}/>)
            } */}
            </div>
            )
    }
}
export default StudentPage