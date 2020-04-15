import {observable, action} from"mobx"
class ThemeStore{
@observable selectedTheme:boolean=false
@action
onChangeSelectedTheme(){
    
}
}
const themeStore=new ThemeStore()
export default themeStore