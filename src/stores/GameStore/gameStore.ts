import {observable,action} from "mobx"
import CellModel from "../../stores/Models/cell"
import data from "../../components/GridGame/GameLevels/index.json"
class GameStore{
    @observable levels=data
    @observable level:number=0
    @observable topLevel:number=0
    @observable currentLevelGridCells:Array<CellModel>=[]
    @observable selectedCellCount:number=0
    @observable isGameCompleted:boolean=false
@action
shuffelCells(){
for(let i=0;i<this.levels[0].hiddenCellCount;i++){
    this.currentLevelGridCells[i].isHidden=true
}
let shuffledCells=this.currentLevelGridCells.slice().sort(()=>Math.random()-0.5)
this.currentLevelGridCells=shuffledCells
}
@action
onCellClick(){

}
@action
setGridCells(){
let currentLevel=this.levels[this.level].gridSize;
let noOfCells=currentLevel*currentLevel
for(let i=0;i<noOfCells;i++){
    let cellObject=new CellModel()
    this.currentLevelGridCells.push(cellObject)
}
this.shuffelCells()
}
@action
goToNextLevelAndUpdateCells(){

}
@action
goToInitialLevelAndUpdateCells(){

}
@action
resetSelectedCellsCount(){

}
@action
incrementSelectedCellsCount(){

}
@action
onPlayAgainClick(){

}
@action
resetGame(){

}
@action
setTopLevel(){

}
}
const gameStore =new GameStore()
export default gameStore