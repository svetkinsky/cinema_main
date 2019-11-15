
let buttonShowModalPresent = document.getElementById('getPresentModal')
let modalPresentWindow = document.getElementById('modalPresent')
let closePresentWindow = document.getElementById('closeModalPresent')
let sendPresentInfo = document.getElementById('sendPresentInfo')

buttonShowModalPresent.onclick = function(){
    modalPresentWindow.style.display = 'block'
}

closePresentWindow.onclick = function(){
    modalPresentWindow.style.display = 'none'
}

sendPresentInfo.onclick = function(){
    let nameGuest = document.getElementById('name__guest')
    let selectGuest = document.getElementById('select__guest')

    if(nameGuest.value){
        console.log('nameGuest', nameGuest.value)
        nameGuest.style.border = '0.05rem solid #bebebe'
    } else{
        nameGuest.style.border = '.05rem solid red'
    }

    if(selectGuest.value != 0){
        console.log('selectGuest', selectGuest.value)
        selectGuest.style.border = '0.05rem solid #bebebe'
    } else{
        selectGuest.style.border = '.05rem solid red'
    }  
    
    if(selectGuest.value != 0 && nameGuest.value){
        modalPresentWindow.style.display = 'none'
    }
}

let nameGuest = document.getElementById('name__guest')
nameGuest.onchange = function(){
    console.log(nameGuest.value)
}

let selectGuest = document.getElementById('select__guest')
selectGuest.onchange = function(){
    console.log(selectGuest.value)
}