import React from "react"
import gameStore from "../../../stores/GameStore/gameStore"
import themeStore from "../../../stores/ThemeStore/themeStore"
import image from"./winneris.png"
type resultProps={
level:number
playAgain:Function
}
class GameResult extends React.Component<resultProps>{
    play=()=>{
        const{playAgain}=this.props
        //playAgain()
        gameStore.onPlayAgainClick()
    }
    render(){
        const{level}=this.props
        return(<div className="min-h-screen">
        
            <div className="flex flex-col items-center justify-center min-h-screen ">
            <img className="w-64" src={image}/*"C:\Users\HI\Desktop\winneris.jpg"*/ alt="image"/>
    <p className={themeStore.selectedTheme?"text-4xl font-bold text-white":"text-4xl font-bold text-blue-900"}>{gameStore.level}</p>
            <p  className="font-bold py-3 text-3xl text-green-600">Congratulations</p>
            <p style={{color:themeStore.selectedTheme?"white":"black"}} className="text-xl">{gameStore.playerName}</p>
            <button className="m-4 bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded" onClick={this.play}>PlayAgain</button>
            </div></div>)
    }
}
export default GameResult
/*Props
onPlayAgainClick
level
selectedTheme
*/
