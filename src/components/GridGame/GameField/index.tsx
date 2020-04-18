import React from "react"
import {observer} from "mobx-react"
import gameStore from "../../../stores/GameStore/gameStore"
import data from "../GameLevels/index.json"
import themeStore from "../../../stores/ThemeStore/themeStore"
import Cell from "../Cell"
import { observable } from "mobx"
import CellModel from "../../../stores/Models/cell"
type gameFielsProps={
cells:Array<CellModel>
onCellClick:Function
level:number
}
@observer
class GameField extends React.Component<gameFielsProps>{
    @observable name:string=""
    display:any;
    constructor(props){
        super(props)
        this.display=localStorage.currentName===undefined?false:localStorage.currentName
    }
    handleInput=(event)=>{
        this.name=event.target.value
        if(event.keyCode===13)
        {     
        gameStore.playerName=this.name
        localStorage.setItem("name",gameStore.playerName)
       this.name=""
        // event.target.value=""
        }
        if(gameStore.playerName!==""){
            this.display=true
            localStorage.setItem("currentName",this.display)
        }
    }
 render(){
        const allCells=gameStore.currentLevelGridCells 
        let gridwidth=data[gameStore.level].gridWidth+"px"
       return(
        <div  style={{width:gridwidth,height:gridwidth}} className="m-0 flex flex-row flex-wrap justify-center">
        <div className="flex justify-center"  style={{display:this.display&&gameStore.playerName!==""?"none":"flex"}}>
              <p  style={{color:themeStore.selectedTheme==="true"?"white":"black"}}>Enter YourName:</p>
            <input type="text" className="border border-solid border-black" defaultValue={this.name} onKeyDown={this.handleInput}></input>
        </div>
        {gameStore.playerName===""?<p style={{width:"98%",color:themeStore.selectedTheme==="true"?"white":"black"}}className="mt-4 text-center border border-solid border-red-900">Please Enter Name to Start Game</p>:<p style={{width:"98%",color:themeStore.selectedTheme==="true"?"white":"black"}}className="mt-4 text-center border border-solid border-red-900">Now Playing:{gameStore.playerName}</p>}
        {allCells.map(eachCell=>
 <Cell eachCell={eachCell} key={Math.random()}/>
)}
</div>
           
          
)
}
}
export default GameField
/*Props
cells
onCellClick
level
 <div style={{width:gridwidth,transform:"scale(1)",transition:"all 1.0s"}} className="transition duration-1000 ">
{/* <div className="flex justify-center">
              <p  style={{color:themeStore.selectedTheme?"white":"black"}}>Enter YourName:</p>
               <input type="text" className="border border-solid border-black" onChange={this.handleInput}></input>
            </div> 
 */