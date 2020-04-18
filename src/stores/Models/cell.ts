import {observable} from "mobx"
// type gameProps={
//     isHidden:boolean
// }

class CellModel{
isHidden:boolean=false
id:string

constructor(){
    this.isHidden=false
    this.id=Math.random().toString()
}
}
export default CellModel