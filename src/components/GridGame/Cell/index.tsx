import React from "react"
import {observable} from "mobx"
import CellModel from "../../../stores/Models/cell"
import gameStore from "../../../stores/GameStore/gameStore"
import data from "../GameLevels/index.json"
import { observer } from "mobx-react"
import themeStore from "../../../stores/ThemeStore/themeStore"
type cellProps={
eachCell:CellModel

}
@observer
class Cell extends React.Component<cellProps>{
    @observable shouldShowHiddenCells:boolean=true
    @observable isClickedOnCell:boolean=false
    id
    id1
   // @observable color="green"
   // @observable hide:boolean=true
   
   onCellClick =()=>{
        const {eachCell}=this.props
//         if(eachCell.isHidden)
//         {
//    this.isClickedOnCell=true
// }onCellClick
//    else
//    {
//        this.isClickedOnCell=false
//        alert("rde")
//    }
this.isClickedOnCell=true
        gameStore.onCellClick(eachCell)
       // gameStore.onCellClick(eachCell)
        
    }
    componentDidMount(){
    //     const{eachCell}=this.props
    //    // console.log("div>>",eachCell)
  //clearTimeout(this.id)
  //clearTimeout(this.id1)
        this.id1= setTimeout(()=>{
         if(gameStore.playerName!=="")
         {
            this.shouldShowHiddenCells=false
         }
            },data[gameStore.level].gridSize*1000);
           
          // this. id=setTimeout(()=>{gameStore.resetGame()},data[gameStore.level].gridSize**2*1000)
          }
    render(){   
      const{eachCell}=this.props
     // alert(this.isClickedOnCell)
      // console.log("render>>",eachCell)
      //let cellWidth=data[gameStore.level].gridWidth/data[gameStore.level].hiddenCellCount-20+"px"
      //alert(cellWidth)
      let cellWidth=data[gameStore.level].gridWidth/data[gameStore.level].hiddenCellCount-8+"px"
      //alert(cellWidth)
        return(<button className="m-1" disabled={this.shouldShowHiddenCells} 
             style={{width:cellWidth,height:cellWidth,backgroundColor:"#4a5568" /*eachCell.isHidden&&this.shouldShowHiddenCells?themeStore.selectedTheme?"#4ecbc0":"#42a671":eachCell.isHidden&&this.isClickedOnCell?themeStore.selectedTheme?"#4ecbc0":"#42a671":eachCell.isHidden===false&&this.isClickedOnCell?"#e53e3e":themeStore.selectedTheme?"#2a4363":"#4a5568"*/}} 
             onClick={this.onCellClick}><div  style={{width:cellWidth,height:cellWidth,transform:"scale(1)",transition:"all 0.6s",
             backgroundColor: eachCell.isHidden&&this.shouldShowHiddenCells?themeStore.selectedTheme==="true"?"#4ecbc0":"#42a671":eachCell.isHidden&&this.isClickedOnCell?themeStore.selectedTheme==="true"?"#4ecbc0":"#42a671":eachCell.isHidden===false&&this.isClickedOnCell?"#e53e3e":themeStore.selectedTheme==="true"?"#2a4363":"#4a5568"}} ></div></button>)
    }
}
export default Cell
/*Props
cell
selectedTheme
onCellClick
level
*/
//black-g-4ecbc0-g-2a3263