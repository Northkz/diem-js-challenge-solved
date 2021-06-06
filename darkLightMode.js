function changeTextColor(text_color)  {

    let elements = document.getElementsByClassName('container');
    for(let i = 0; i < elements.length; i++){
        elements[i].style.color = text_color;
    }

}
function changeColor_light(){
    document.getElementById('container').style.backgroundColor = "#f8f9fa"
    document.getElementById("themeOutput").innerHTML = "You chose Light Mode!"
    changeTextColor('black')
}
function changeColor_dark(){
    document.getElementById('container').style.backgroundColor = "#343A40"
    document.getElementById("themeOutput").innerHTML = "You chose Dark Mode!"
    changeTextColor("white")
}