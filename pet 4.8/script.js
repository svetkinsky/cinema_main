function printInfo(){
    console.log('printInfo', this)
}

const film = {
    name: 'Мстители',
    start: '12:00',
    ganar: 'фантастика, боевик',
    printInfo: printInfo,
    printInfoWindow: printInfo.bind(document),
    logInfo: function(ganar, actor){
        console.group(`${this.name} info film:`)
        console.log(`Название фильма: ${this.name}`)
        console.log(`Начало фильма: ${this.start}`)
        console.log(`Жанр фильма: ${ganar}`)
        console.log(`Актёр: ${actor}`)
        console.groupEnd()
    }
}

const newFilm = {
    name: 'Мстители Финал',
    start: '20:00',
}

film.logInfo.bind(newFilm, 'фантастика, боевик', 'Дауни младший')()
film.logInfo.call(newFilm, 'фантастика, боевик', 'Дауни младший')

let arr = ['фантастика, боевик', 'Дауни младший']
film.logInfo.apply(newFilm, arr)
