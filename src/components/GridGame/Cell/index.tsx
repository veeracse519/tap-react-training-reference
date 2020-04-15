import React from "react"
import {observable} from "mobx"
import CellModel from "../../../stores/Models/cell"
import gameStore from "../../../stores/GameStore/gameStore"
import { observer } from "mobx-react"
type cellProps={
eachCell:CellModel
}
@observer
class Cell extends React.Component<cellProps>{
    @observable shouldShowHiddenCells:boolean=true
    @observable isClickedOnCell:boolean=false
    @observable color="black"
    onCellClick=(e)=>{
        console.log(gameStore.currentLevelGridCells)
//alert(e.target.value)
    }
    componentDidMount=()=>{
        const{eachCell}=this.props
        setTimeout(()=>{
            if(eachCell.isHidden){
            this.color="black"
            }
        },3000);
    if(eachCell.isHidden){
        this.color="green"
    }
    }
   
    render(){
        
        const {eachCell}=this.props
        return(<div style={{width:"50px",height:"50px",backgroundColor:this.color,margin:"10px"}} id={eachCell.id} onClick={this.onCellClick}></div>)
    }
}
export default Cell
/*Props
cell
selectedTheme
onCellClick
level
*/