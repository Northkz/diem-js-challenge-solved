const btnAdd = document.getElementById("html")
const btnAdd1 = document.getElementById("css")
const btnAdd2 = document.getElementById("javascript")
const button_container = document.getElementById("nothing");
btnAdd.addEventListener("click", function (){ createButton1('HTML')});
btnAdd1.addEventListener("click",function (){ createButton1('CSS')});
btnAdd2.addEventListener("click",function (){ createButton1('Javascript')});


let limit = 1
let amount_hmtl = 0
let amount_css = 0
let amount_java = 0

function createButton1(name){
    if (name == "HTML"){
        if (amount_hmtl < limit){
            let newBtn = document.createElement("BUTTON");
            newBtn.classList.add('btn_style')// Create a <button> element
            newBtn.innerHTML = name;                   // Insert text
            button_container.appendChild(newBtn);
            document.getElementById("html").style.visibility = "hidden"
            newBtn.setAttribute('id', 'html_2')
            amount_hmtl++
            newBtn.addEventListener('mouseover', function (){ change_to_red('html_2')})
            newBtn.addEventListener('mouseleave', function (){ change_to_green('html_2')})
            newBtn.addEventListener('click', function (){ remove('html_2')})
        }}
    else if (name == "CSS"){
        if (amount_css < limit){
            let newBtn = document.createElement("BUTTON");
            newBtn.classList.add('btn_style')
            newBtn.innerHTML = name;
            document.getElementById("css").style.visibility = "hidden"
            button_container.appendChild(newBtn);
            newBtn.setAttribute('id', 'css_2')
            amount_css++
            newBtn.addEventListener('mouseover', function (){ change_to_red('css_2')})
            newBtn.addEventListener('mouseleave', function (){ change_to_green('css_2')})
            newBtn.addEventListener('click', function (){ remove('css_2')})
        }
    }
    else {
        if (amount_java < limit){
            let newBtn = document.createElement("BUTTON");
            newBtn.classList.add('btn_style')
            newBtn.innerHTML = name;
            document.getElementById("javascript").style.visibility = "hidden"
            button_container.appendChild(newBtn);
            newBtn.setAttribute('id', 'javascript_2')
            amount_java++
            newBtn.addEventListener('mouseover', function (){ change_to_red('javascript_2')})
            newBtn.addEventListener('mouseleave', function (){ change_to_green('javascript_2')})
            newBtn.addEventListener('click', function (){ remove('javascript_2')})
        }
    }
}


function remove(btn_name){
    let main_btn_name = ''
    let elem = document.getElementById(btn_name);

    if (btn_name=='html_2'){
        main_btn_name = 'html'
        amount_hmtl--
    }
    else if(btn_name == 'css_2'){
        main_btn_name = 'css'
        amount_css--
    }
    else{
        main_btn_name = 'javascript'
        amount_java--
    }
    elem.parentNode.removeChild(elem);
    document.getElementById(main_btn_name).style.visibility = "visible"
}

function change_to_red(btn_name){
    document.getElementById(btn_name).style.backgroundColor = "red"
}
function change_to_green(btn_name){
    document.getElementById(btn_name).style.backgroundColor = "#28a745"
}