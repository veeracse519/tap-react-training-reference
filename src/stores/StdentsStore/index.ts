import {observable,action} from "mobx"
//import studentObjectType from "../StudentsModel"
import StudentModel,{studentObjectType} from"../StudentsModel"

class StudentStore{
@observable studentList:Array<StudentModel>

constructor(){
this.studentList=[]
}
@action
addStudent(name:string,gender?:string){
const studentObject:studentObjectType={
  name:name,
    gender:gender,
    id:Math.random.toString()
}
const studentModel=new StudentModel(studentObject)
this.studentList.push(studentModel)
//console.log(this.studentList)
}
}
const studentStore=new StudentStore()
export{studentStore,StudentStore}