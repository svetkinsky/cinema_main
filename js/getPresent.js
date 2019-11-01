
let name_guest = document.getElementById('name__guest')
let button_send_info = document.getElementById('sendPresentInfo')

console.log('до нажатия кнопки Заказать', name_guest.value)

button_send_info.onclick = function(){
    let name = name_guest.value
    console.log('Имя', name)
}

// console.log(button_send_info)