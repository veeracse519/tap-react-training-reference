import React from"react"
import Header from"../Header"
import GameField from"../GameField"
class GridMemoryGame extends React.Component{
    render(){
        return(<div><Header/>
        {setInterval(()=>{
            <GameField/>
        },9000)}
        </div>)
    }
}
export default GridMemoryGame