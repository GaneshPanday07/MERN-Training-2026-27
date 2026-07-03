let movies = [
    {
        movieId: 101,
        movieName: 'man',
        type: 'drama',
        acter: 'Amir khan'
    },
    {
        movieId: 102,
        movieName: 'khiladi 786',
        type: 'drama',
        acter: 'akshay kumar'
    },
    {
        movieId: 103,
        movieName: 'krish',
        type: 'drama',
        acter: 'ritik roshan'
    },
    {
        movieId: 104,
        movieName: 'chak de india',
        type: 'nation',
        acter: 'srk'
    },
]

function getmovie(Id, callback) {
    setTimeout(()=> {
        let movie = movies.find((movie)=> movie.movieId === Id);
        console.log(movie);
        callback(movie);
    },5000)
}
function getcinema(movieName, callback) {
    setTimeout(() => {
    let cinema = ['v3s','delight','crossriver','star'];
    console.log(cinema);
    callback(cinema);
    },2000)
}
function getTicket(cinema) {
    let Ticket = {
        Primum: 600,
        Gold: 300,
        Diamond:200
    }
    console.log(Ticket);
}
getmovie(101, (movie) => {
    getcinema(movie.movieName, (cinema) => {
        getTicket(cinema[3])
    })
});