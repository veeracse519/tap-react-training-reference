import React from "react"
import { observer} from "mobx-react"
import gameStore from "../../../stores/GameStore/gameStore"
import themeStore from"../../../stores/ThemeStore/themeStore"
import data from "../GameLevels/index.json"
@observer
class Header extends React.Component{
    onChangeSelectedTheme=()=>{
        themeStore.onChangeSelectedTheme()
    }
    render(){
       // alert(themeStore.selectedTheme)
       let gridwidth=data[gameStore.level].gridWidth+"px"
 
        return(<div style={{ width:gridwidth,color:themeStore.selectedTheme==="true"?"white":"black"}} className=" flex flex-col items-center justify-around">
          <div className="mb-12 text-xl text-center "><p style={{color:themeStore.selectedTheme==="true"?"white":"black"}} className="text-xl text-black">TopLevel: {gameStore.topLevel}</p></div>
    <div className=" flex items-center justify-between mb-4 px-1" style={{width:"100%"}}>
            <p style={{color:themeStore.selectedTheme==="true"?"white":"black"}} className="text-xl">Level:{gameStore.level}</p>
    <button style={{color:themeStore.selectedTheme==="true"?"white":"black",border:themeStore.selectedTheme==="true"?"1px solid white":"1px solid black"}} className=" p-1 text-xl px-2 py-1" onClick={this.onChangeSelectedTheme}>Mode: {themeStore.selectedTheme?"Light":"Dark"}</button>
        </div>
  

        </div>)
    }
}
export default Header
/*Props
selectedTheme
level
topLevel
onChangeSelectedTheme
*/