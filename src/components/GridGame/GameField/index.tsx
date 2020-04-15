import React from "react"
import gameStore from "../../../stores/GameStore/gameStore"
import data from "../GameLevels/index.json"
import Cell from "../Cell"
import { observable } from "mobx"
class GameField extends React.Component{
    @observable level=data[0].gridWidth;
 render(){
       gameStore.setGridCells()
        const allCells=gameStore.currentLevelGridCells
       return(<div  className="flex flex-wrap">
            {allCells.map(eachCell=>
                <Cell eachCell={eachCell}/>
            )}
        </div>)
}
}
export default GameField
/*Props
cells
onCellClick
level
*/