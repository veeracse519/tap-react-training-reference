import React from "react"
class Header extends React.Component{
    onChangeSelectedTheme=()=>{

    }
    render(){
        return(<div className="border border-solid boredr-black"><p className="text-center"><b>TopLevel: </b></p>
        <div className="flex justify-between" >
            <p>Level:</p>
        <button>Mode:</button>
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