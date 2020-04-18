import {observable,action} from "mobx"
import CellModel from "../../stores/Models/cell"
import data from "../../components/GridGame/GameLevels/index.json"

class GameStore{
    levels=data
     @observable level:any=0
     @observable topLevel:any=0
     @observable levelLifes:number=0
     //@observable color:string="grey"
    @observable currentLevelGridCells:Array<CellModel>=[]
    @observable selectedCellCount:number=0
    @observable isGameCompleted:boolean=false
    ids:Array<string>=[]
    @observable playerName:string=""
    id
    list:any=[]
    //secWaiting:number=9000
    constructor(){

        this.playerName=localStorage.name===undefined?"":localStorage.name
       this.topLevel=localStorage.currentTopLevel===undefined?0:localStorage.currentTopLevel
       this.level=localStorage.level===undefined?0:localStorage.level
       //this.list=(localStorage.getItem("currentGrid"))
       //this.currentLevelGridCells=JSON.parse(this.list)
       this.setGridCells()
        this.levelLifes=data[this.level].hacks
        console.log(data[0].hacks,this.level)
    }
@action
shuffelCells(){
 
for(let i=0;i<this.levels[this.level].hiddenCellCount;i++){
    this.currentLevelGridCells[i].isHidden=true
}

let shuffledCells=this.currentLevelGridCells.slice().sort(()=>Math.random()-0.5)
this.currentLevelGridCells=shuffledCells
}
@action
onCellClick(gameCell:CellModel){
    // if(this.ids.find(id=>id===gameCell.id)){
    // }
    if(!this.ids.find(id=>id===gameCell.id)){
    this.ids.push(gameCell.id)
    console.log(this.ids)
    if(gameCell.isHidden){
        this.incrementSelectedCellsCount()
        if(this.selectedCellCount===this.level+3){
            setTimeout(()=> { 
            this.goToNextLevelAndUpdateCells()
            this.ids=[]
            this.resetSelectedCellsCount()
            this.setGridCells()},200) 
        }
    }
    else if(this.levelLifes!=0){
        
        this.levelLifes-=1
        setTimeout(()=>{
           clearTimeout(this.id)
           this.currentLevelGridCells=[]
           this.setGridCells()

            this.resetSelectedCellsCount()},200)
    }
    else{
        setTimeout(()=>{
        this.setTopLevel()
        this.resetSelectedCellsCount()
        this.goToInitialLevelAndUpdateCells()},200)
    }
}
}
@action
setGridCells(){
clearTimeout(this.id)
let currentLevel=this.levels[this.level].gridSize;
let noOfCells=currentLevel*currentLevel
for(let i=0;i<noOfCells;i++){
    let cellObject=new CellModel()
    this.currentLevelGridCells.push(cellObject)
}

this.shuffelCells()
if(this.level!=data.length-1){
this.id=setTimeout(()=>this.resetGame(),data[this.level].gridSize**2*1000)
}
localStorage.setItem("currentGrid",JSON.stringify(this.currentLevelGridCells))
}
@action
goToNextLevelAndUpdateCells(){
    if(this.level!=data.length-1){
    this.level+=1;  
    this.currentLevelGridCells=[]
    this.levelLifes=data[this.level].hacks
    }
    else{
        this.level=data.length-1; 
        this.isGameCompleted=true;
    }
  localStorage.setItem("level",this.level)
}
@action
goToInitialLevelAndUpdateCells(){
this.level=0
this.currentLevelGridCells=[]
this.setGridCells()

}
@action
resetSelectedCellsCount(){
    this.selectedCellCount=0
}
@action
incrementSelectedCellsCount(){

    this.selectedCellCount+=1;
}
@action
onPlayAgainClick(){
    this.setTopLevel()
    this.resetGame()
}
@action
resetGame(){

this.selectedCellCount=0
this.currentLevelGridCells=[]
this.setTopLevel()
this.level=0
this.isGameCompleted=false
this.setGridCells()
localStorage.setItem("level",this.level)
}

@action
setTopLevel(){
if(this.level>this.topLevel){
    this.topLevel=this.level
    localStorage.setItem('currentTopLevel',this.topLevel)
 
}
}
}
const gameStore =new GameStore()
export default gameStore