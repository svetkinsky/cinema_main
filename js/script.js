let films = [
    ['10:00', 'Человек-паук', 0, 1, 2],
    ['12:00', 'Собачья жизнь 2', 3, 4, 5],
    ['14:00', 'История игрушек 4', 6, 3, 5],
    ['16:00', 'Люди в черном: Интернэшнл', 0, 1, 5],

]

let ganars = ['фантастика', 'боевик', 'приключения', 'фэнтези', 'драма', 'комедия', 'мультфильм']

let table = document.getElementById('table')


for (let i = 0; i <= films.length - 1; i++) {

    let even = i % 2 ? 'evenline' : 'oddline' 

    let tr = '<tr class="block-3__'+even+'">' +
    '<td  class="block-3__table__firstcolumn">' + films[i][0] + '</td>' +
        '<td  class="block-3__table__secondcolumn">' + films[i][1] + '</td>' +
        '<td  class="block-3__table__thirdcolumn">' + ganars[films[i][2]] + ' '+ganars[films[i][3]]+' '+ganars[films[i][4]]+'</td>' +
        '<td class="block-3__table__fouthcolumn">' +
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"' +
                'width=1.65rem height=1.65rem viewBox="0 0 33 33">' +
        '<path fill-rule="evenodd" fill="rgb(255, 255, 255)"' +
                'd="M16.505,32.994 C7.393,32.994 0.005,25.607 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.607 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.777 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z" />' +
    '</svg>' +
'</td >' +
'</tr > '

table.innerHTML += tr

    
}

