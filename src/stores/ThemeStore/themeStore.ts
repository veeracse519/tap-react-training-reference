import {observable, action} from"mobx"
class ThemeStore{
@observable selectedTheme
constructor(){
   // alert(this.selectedTheme)
   //alert(localStorage.currentTheme)
    this.selectedTheme=localStorage.currentTheme===undefined?"false":localStorage.currentTheme;
}
@action
onChangeSelectedTheme(){
   // this.selectedTheme=!this.selectedTheme
    if(this.selectedTheme==="false"){
        this.selectedTheme="true"
    }
    else{
        this.selectedTheme="false"
    }
    console.log(this.selectedTheme)
    localStorage.setItem("currentTheme",this.selectedTheme)
    console.log(localStorage.currentTheme)

}
}
const themeStore=new ThemeStore()
export default themeStore