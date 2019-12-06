//Тестовые данные (заглушка, моковые данные, стабы) - ответ от сервиса фильмов

films = [
    film1 = {
        name: 'Человек-паук',
        start: '10:00',
        ganar: [0, 1, 2],
        hire: true,
        new: false,
        price: 310,
        description: 'Ad ea esse ex inventore repudiandae, suscipit!',
        image: '../images/mov1.jpg',
        facebookLink: 'http://fb.com',
        twitterLink: 'http://twitter.com',
    }, 
    film2 = {
        name: 'Собачья жизнь 2',
        start: '12:00',
        ganar: [3, 4, 5],
        hire: true,
        new: false,
        price: 320,
        description: 'Ad ea esse ex inventore repudiandae, suscipit!',
        image: '../images/mov2.jpg',
        facebookLink: 'http://fb.com',
        twitterLink: 'http://twitter.com',
    },
    film3 = {
        name: 'История игрушек 4',
        start: '14:00',
        ganar: [6, 3, 5],
        hire: true,
        new: false,
        price: 330,
        description: 'Ad ea esse ex inventore repudiandae, suscipit!',
        image: '../images/mov3.jpg',
        facebookLink: 'http://fb.com',
        twitterLink: 'http://twitter.com',
    },
    film4 = {
        name: 'Люди в черном: Интернэшнл',
        start: '16:00',
        ganar: [0, 1, 5],
        hire: true,
        new: false,
        price: 340,
        description: 'Ad ea esse ex inventore repudiandae, suscipit!',
        image: '../images/mov4.jpg',
        facebookLink: 'http://fb.com',
        twitterLink: 'http://twitter.com',
    },
    film5 = {
        name: 'Оно 2',
        start: '',
        ganar: [0, 1, 5],
        hire: false,
        new: true,
        description: 'Ad ea esse ex inventore repudiandae, suscipit!',
        image: '../images/mov5.jpg',
        facebookLink: 'http://fb.com',
        twitterLink: 'http://twitter.com',
    },
    film6 = {
        name: 'Джокер',
        start: '',
        ganar: [6, 3, 5],
        hire: false,
        new: true,
        description: 'Ad ea esse ex inventore repudiandae, suscipit!',
        image: '../images/mov6.jpg',
        facebookLink: 'http://fb.com',
        twitterLink: 'http://twitter.com',
    },
    film7 = {
        name: 'Семейка Аддамс',
        start: '',
        ganar: [6, 3, 5],
        hire: false,
        new: true,
        description: 'Ad ea esse ex inventore repudiandae, suscipit!',
        image: '../images/mov7.jpg',
        facebookLink: 'http://fb.com',
        twitterLink: 'http://twitter.com',
    },

]

//Справочник жанров
const ganars = [
            'фантастика',   //0
            'боевик',       //1
            'приключения',  //2
            'фэнтези',      //3
            'драма',        //4
            'комедия',      //5
            'мультфильм'    //6
]




// const places = [
//     place1 = {
//         number: 1,
//         price: 100,
//         brone: true,
//     },
//     place2 = {
//         number: 2,
//         price: 100,
//         brone: true,
//     },
//     place3 = {
//         number: 3,
//         price: 100,
//         brone: true,
//     },
//     place4 = {
//         number: 4,
//         price: 100,
//         brone: false,
//     },
//     place5 = {
//         number: 5,
//         price: 100,
//         brone: true,
//     },
//     place6 = {
//         number: 6,
//         price: 100,
//         brone: false,
//     },
//     place7 = {
//         number: 7,
//         price: 100,
//         brone: false,
//     },
//     place8 = {
//         number: 8,
//         price: 100,
//         brone: false,
//     },
//     place9 = {
//         number: 9,
//         price: 100,
//         brone: true,
//     },
//     place10 = {
//         number: 10,
//         price: 100,
//         brone: true,
//     },
// ]

const countPlace = 10
let places = []

for(let i = 0; i < countPlace; i++ ){
    let random = Math.round(0 - 0.5 + Math.random() * 2)
    places[i] = {
        number: i + 1,
        price: (i + 1) > 3 && (i + 1) < 8 ? 150 : 100,
        brone: random == 1 ? true : false,
    }
    
}

//console.log(places)



let placesHTML = document.querySelector('.places')
let cinemaHall = document.createElement('div')
cinemaHall.classList.add('hall')

//console.log(placesHTML) 

//Создание квадратиков мест


function order(event){
    let el = event.target
    let orderNumberPlace = document.getElementById('orderNumberPlace')
    let orderSelect = orderNumberPlace.innerHTML
    let orderFilmCountTiket = document.getElementById('orderFilmCountTiket')
    let countTiket = orderFilmCountTiket.innerHTML
    let orderFilmPrice = document.getElementById('orderFilmPrice')
    let orderFilmTotalPrice = document.getElementById('orderFilmTotalPrice')
    let orderTotalPrice = orderFilmTotalPrice.innerHTML
    if(el.classList.contains('placeFree')){
        countTiket++
        orderFilmCountTiket.innerHTML = countTiket
        orderNumberPlace.innerHTML = orderSelect + ' ' + el.innerHTML
        orderFilmPrice.innerHTML = places[el.innerHTML - 1].price
        orderFilmTotalPrice.innerHTML = Number(orderTotalPrice) + Number(places[el.innerHTML - 1].price)
        //console.log(orderNumberPlace.innerHTML)  
    }
}

function placeToggle(event){
    let el = event.target
    if(el.classList.contains('placeFree')){
        el.classList.remove('placeFree')
        el.classList.add('placeBrone')
    }
    //placeDiv.brone = true
} 

function placeContext(event){
    event.preventDefault()
    let el = event.target
    alert('Стоимость билета: ' + places[el.innerHTML - 1].price)
    
}

function placeHover(event){

    let el = event.target
    if(el.classList.contains('placeFree')){
        if(event.type == 'mouseout')
        {
            el.classList.add('placeSelect')
            console.log(el)
        }
    }
}

// function placeHoverOut(event){
//     let el = event.target
//     if(el.classList.contains('placeFree')){
//         if(event.type == 'mouseout')
//         {
//             el.classList.add(' ')
//             console.log(el)
//         }
//     }
// }




for(place of places){
    let placeDiv = document.createElement('div') 
    placeDiv.innerHTML = place.number
    placeDiv.classList.add('placeDiv')

    if(place.brone){
        placeDiv.classList.add('placeBrone')
       
    } else{
        placeDiv.classList.add('placeFree')
    }

    placeDiv.addEventListener('click', order)
    placeDiv.addEventListener('click', placeToggle)
    placeDiv.oncontextmenu = placeContext
    placeDiv.onmouseout = placeHover

    //placeDiv.addEventListener('oncontextmenu', placeContext)

    
    
    //cinemaHall.insertAdjacentHTML('afterbegin', placeDiv)
    cinemaHall.insertAdjacentElement('beforeend', placeDiv)
    

    
    //console.log(place)
}

placesHTML.append(cinemaHall)

// let orderPlace = document.getElementsByClassName('placeDiv')
// console.log(orderPlace)



//order()


//orderPlace.addEventListener('click', order)






//Для блока "Выберите фильм"
let filmsHire = []

//Для блока "Новинки" слайдер
let filmsNew = []

for(let i = 0; i < films.length; i++){
    if(films[i].hire === true){
        filmsHire.push(films[i])
    }    
    if(films[i].new === true){
        filmsNew.push(films[i])
    }

}

// console.log('Для блока "Выберите фильм"', filmsHire)
// console.log('Для блока "Новинки" слайдер', filmsNew)

//console.log('films', films)

const film = {
    getName: function(){
        return this.name
    },
    getStart: function(){
        return this.start
    },
    getGanar: function(){
        const ganarFilm = this.ganar
        let arrGanars = []
        for(let i = 0; i < ganarFilm.length; i++){
            arrGanars.push(ganars[ganarFilm[i]])
        }
        let strGanars = arrGanars.join(', ')
        return strGanars
    },
    getPrice: function(){
        return this.price
    },
    getImage: function(){
        return this.image
    }, 
    getFbLink: function(){
        return this.facebookLink
    },
    getTwLink: function(){
        return this.twitterLink
    },
}

let orderForm = document.getElementById('orderForm')
let closeOrderForm = document.getElementById('closeOrderForm')
closeOrderForm.onclick = function(){
    orderForm.style.display = 'none'
}

for(let i = 0; i < filmsHire.length; i++){
    const filmName = film.getName.bind(filmsHire[i])()
    const filmStart = film.getStart.bind(filmsHire[i])()
    const filmGanar = film.getGanar.bind(filmsHire[i])()
    const filmPrice = film.getPrice.bind(filmsHire[i])()
    let filmsHireHtml = document.getElementById('filmsHire')

    //console.log(filmsHireHtml)

    let filmHtml = `
        <td class="block-3__table__firstcolumn">${filmStart}</td>
        <td class="block-3__table__secondcolumn">${filmName}</td>
        <td class="block-3__table__thirdcolumn">${filmGanar}</td>
        <td class="block-3__table__fouthcolumn">${filmPrice}</td>`

    let tr = document.createElement('tr')
    tr.className = 'strFilmHire'
    tr.innerHTML = filmHtml
    tr.onclick = function(){
        orderForm.style.display = 'block'
        let orderFilmName = document.getElementById('orderFilmName')
        let orderFilmStart = document.getElementById('orderFilmStart')
        let orderFilmGanar = document.getElementById('orderFilmGanar')
        //let orderFilmPrice = document.getElementById('orderFilmPrice')

        orderFilmName.innerHTML = filmName
        orderFilmStart.innerHTML = filmStart
        orderFilmGanar.innerHTML = filmGanar
        //orderFilmPrice.innerHTML = filmPrice
        //console.log(this)

        //let orderFilmTotalPrice = document.getElementById('orderFilmTotalPrice')
        //let orderFilmCountTiket = document.getElementById('orderFilmCountTiket')

       // orderFilmTotalPrice.innerHTML = filmPrice * orderFilmCountTiket.innerHTML

        // orderFilmCountTiket.onchange = function(){
        //     orderFilmTotalPrice.innerHTML = filmPrice * orderFilmCountTiket.value
        // }
    }



    filmsHireHtml.appendChild(tr)
}

let sendOrder = document.getElementById('sendOrder')
sendOrder.onclick = function(){
    let orderClientName = document.getElementById('orderClientName')

    if(nameGuest.value){
        orderClientName.style.border = '0.05rem solid #bebebe'
    } else{
        orderClientName.style.border = '.05rem solid red'
    }
}



//const listFilms = document.querySelectorAll('.strFilmHire')
//console.log(listFilms)




for(let i = 0; i < filmsNew.length; i++){
    const filmNameNew = film.getName.bind(filmsNew[i])()
    const filmFbLink = film.getFbLink.bind(filmsNew[i])()
    const filmTwLink = film.getTwLink.bind(filmsNew[i])()
    const filmImageNew = film.getImage.bind(filmsNew[i])()
    let filmNewHtml = document.getElementById('filmsNew')

    //console.log(filmNewHtml)

    let filmHtml = `<div class="block-5__item block-5__movie1">
            <div class="block-5__flex__inner">
                <div class="block-5__poster">
                    <img src="${filmImageNew}" alt="${filmNameNew}" />
                </div>
                <div class="block-5__description">
                    <p class="block-5__text1">${filmNameNew}</p>
                    <hr class="block-5__hr" />
                    <p class="block-5__text2">More about selling in the Envato Marketplaces</p>
                    <div>
                        <a href="${filmFbLink}" title="facebook" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="2rem" height="2rem"
                                viewBox="0 0 40 40">
                                <defs>
                                    <filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px"
                                        width="34px" height="34px">
                                        <feOffset in="SourceAlpha" dx="0" dy="1" />
                                        <feGaussianBlur result="blurOut" stdDeviation="1" />
                                        <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                                        <feComposite operator="atop" in="floodOut" in2="blurOut" />
                                        <feComponentTransfer>
                                            <feFuncA type="linear" slope="0.25" />
                                        </feComponentTransfer>
                                        <feMerge>
                                            <feMergeNode />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>

                                </defs>
                                <g filter="url(#Filter_0)">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                        d="M16.350,30.764 C7.872,30.764 1.000,23.882 1.000,15.393 C1.000,6.903 7.872,0.021 16.350,0.021 C24.828,0.021 31.700,6.903 31.700,15.393 C31.700,23.882 24.828,30.764 16.350,30.764 ZM16.721,6.969 C13.254,6.969 14.044,11.088 13.929,12.590 C13.929,12.601 11.809,12.590 11.809,12.590 L11.809,15.384 L13.922,15.384 L13.922,25.220 L17.434,25.220 L17.426,15.384 L19.779,15.384 L20.240,12.574 L17.434,12.605 C17.434,10.610 17.280,9.799 18.445,9.799 C18.549,9.799 20.251,9.795 20.251,9.795 L20.255,6.969 L16.721,6.969 Z" />
                                </g>
                            </svg>
                        </a>
                        <a href="${filmTwLink}" title="twitter" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="2rem" height="2rem"
                                viewBox="0 0 40 40">
                                <defs>
                                    <filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px"
                                        width="34px" height="34px">
                                        <feOffset in="SourceAlpha" dx="0" dy="1" />
                                        <feGaussianBlur result="blurOut" stdDeviation="1" />
                                        <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                                        <feComposite operator="atop" in="floodOut" in2="blurOut" />
                                        <feComponentTransfer>
                                            <feFuncA type="linear" slope="0.25" />
                                        </feComponentTransfer>
                                        <feMerge>
                                            <feMergeNode />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>

                                </defs>
                                <g filter="url(#Filter_0)">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                        d="M16.537,30.747 C8.060,30.747 1.187,23.865 1.187,15.375 C1.187,6.885 8.060,0.003 16.537,0.003 C25.015,0.003 31.887,6.885 31.887,15.375 C31.887,23.865 25.015,30.747 16.537,30.747 ZM24.698,13.855 C23.512,9.722 20.664,9.722 20.664,9.722 C20.664,9.722 21.873,9.034 21.838,8.615 C21.466,8.348 20.720,8.883 20.657,8.883 C20.845,8.751 20.733,8.373 20.489,8.231 C20.129,8.266 19.815,8.930 19.815,8.930 C19.815,8.930 19.638,8.604 19.478,8.604 C17.571,9.128 16.228,13.535 16.234,13.541 C10.007,9.332 9.595,10.141 9.595,10.152 C9.106,11.247 11.001,12.633 11.001,12.633 L10.460,12.649 C10.460,12.649 9.663,12.623 9.837,13.192 C10.015,13.920 10.959,14.674 10.967,14.682 C11.432,14.903 12.013,14.693 12.013,14.693 C12.013,14.693 11.397,15.016 11.007,15.260 C10.364,15.675 10.826,16.044 10.896,16.114 C11.733,17.011 13.048,16.953 13.048,16.953 C13.048,16.953 12.437,17.686 12.432,17.965 C12.432,18.419 12.839,18.699 12.873,18.734 C13.237,18.984 13.776,19.013 13.780,19.013 C10.411,22.588 6.351,18.992 6.351,18.979 C6.804,21.598 10.653,24.125 17.420,23.147 C22.908,22.274 24.663,16.254 24.663,16.254 C24.663,16.254 26.931,16.382 27.187,15.031 C26.477,15.159 25.454,14.950 25.454,14.950 C25.454,14.950 27.198,14.193 27.280,13.285 C26.256,14.076 24.733,13.855 24.698,13.855 Z" />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>`

            let div = document.createElement('div')
            div.innerHTML = filmHtml
            filmNewHtml.appendChild(div)

            //filmNewHtml.innerHTML += filmHtml

}


