import React from"react"
import {observer} from "mobx-react"
import gameStore from "../../../stores/GameStore/gameStore"
import themeStore from "../../../stores/ThemeStore/themeStore"
import data from "../GameLevels/index.json"
import Header from"../Header"
import GameField from"../GameField"
import GameResult from "../GameResult"
@observer
class GridMemoryGame extends React.Component{
    componentDidMount(){
        alert(1)
    }
    componentWillMount(){
        alert(localStorage.level)
       
    }
    // data
    // topLevel
//     componentDidMount=()=>{
//        themeStore.selectedTheme=localStorage.document
//        alert(localStorage.document)
// //         this.data=JSON.parse(localStorage.getItems("document"))
// //         this.topLevel=JSON.parse(localStorage.getItems("level"))
// //    alert(data)
//      }
    render(){
        //localStorage.setItem("document",themeStore.selectedTheme)
      
        // localStorage.setItem("document",JSON.stringify(themeStore.selectedTheme))
        // localStorage.setItem("level",JSON.stringify(gameStore.topLevel))
        //alert(themeStore.selectedTheme)
        //alert(gameStore.topLevel)
      return(<div style={{backgroundColor:themeStore.selectedTheme==="true"?"#1a202c":"white"}} className="flex  flex-col items-center justify-center min-h-screen bg-gray-100">
                <div ><Header/></div>
               
                <div>
                
                   {gameStore.level===data.length-1?<GameResult level={gameStore.level} playAgain={gameStore.onPlayAgainClick}/>:<div >{gameStore.isGameCompleted?
               <p>Congrats</p>:<GameField level={gameStore.level} cells={gameStore.currentLevelGridCells} onCellClick={gameStore.onCellClick}/>}

                </div>}
                </div>
        </div>)
    }
}
export default GridMemoryGame