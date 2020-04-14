import { observable } from "mobx"
export type studentObjectType={
    id:string
    name:string
    gender?:string
}
class StudentModel{
    id:string
    gender?:string
    @observable name:string
constructor(studentObject:studentObjectType){
  this.id=studentObject.id
  this.name=studentObject.name
 this.gender=studentObject.gender?studentObject.gender:"Others"
}
updateName(updatedName:string){
    this.name=updatedName
}
}
export default StudentModel