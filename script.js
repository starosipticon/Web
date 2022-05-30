function hoverOnHome(){
    document.getElementById("div_catalog").classList.add("active")
    document.getElementById("div_tel").classList.add("active")
    document.getElementById("div_about").classList.add("active")
    document.getElementById("div_list").classList.add("active")
}
function hoverOffHome(){
    document.getElementById("div_catalog").classList.remove("active")
    document.getElementById("div_tel").classList.remove("active")
    document.getElementById("div_about").classList.remove("active")
    document.getElementById("div_list").classList.remove("active")
}

function hoverOnCatalog(){
    document.getElementById("div_home").classList.add("active")
    document.getElementById("div_tel").classList.add("active")
    document.getElementById("div_about").classList.add("active")
    document.getElementById("div_list").classList.add("active")
}
function hoverOffCatalog(){
    document.getElementById("div_home").classList.remove("active")
    document.getElementById("div_tel").classList.remove("active")
    document.getElementById("div_about").classList.remove("active")
    document.getElementById("div_list").classList.remove("active")
}

function hoverOnTel(){
    document.getElementById("div_home").classList.add("active")
    document.getElementById("div_catalog").classList.add("active")
    document.getElementById("div_about").classList.add("active")
    document.getElementById("div_list").classList.add("active")
}
function hoverOffTel(){
    document.getElementById("div_home").classList.remove("active")
    document.getElementById("div_catalog").classList.remove("active")
    document.getElementById("div_about").classList.remove("active")
    document.getElementById("div_list").classList.remove("active")
}

function hoverOnAbout(){
    document.getElementById("div_home").classList.add("active")
    document.getElementById("div_catalog").classList.add("active")
    document.getElementById("div_tel").classList.add("active")
    document.getElementById("div_list").classList.add("active")
}
function hoverOffAbout(){
    document.getElementById("div_home").classList.remove("active")
    document.getElementById("div_catalog").classList.remove("active")
    document.getElementById("div_tel").classList.remove("active")
    document.getElementById("div_list").classList.remove("active")
}

function hoverOnList(){
    document.getElementById("div_home").classList.add("active")
    document.getElementById("div_catalog").classList.add("active")
    document.getElementById("div_tel").classList.add("active")
    document.getElementById("div_about").classList.add("active")
}
function hoverOffList(){
    document.getElementById("div_home").classList.remove("active")
    document.getElementById("div_catalog").classList.remove("active")
    document.getElementById("div_tel").classList.remove("active")
    document.getElementById("div_about").classList.remove("active")
}