let movies = [
    {
        movieId: 101,
        movieName: "hero",
        tyoe: 'action'
    },
    {
        movieId: 102,
        movieName: 'Ram Lakhan',
        tyoe: 'drama'
    },
    {
        movieId: 103,
        movieName: "Nayak",
        tyoe: 'Drema'
    },
    {
        movieId: 104,
        movieName: "Iqbal",
        tyoe: 'motivational'
    },
]
let Cinemas = [
    {
        MovieId: 101,
        hallName: 'regal'
    },
    {
        MovieId: 101,
        hallName: 'Maya Cineplex'
    },
    {
        MovieId: 102,
        hallName: 'Jublee Talkies'
    },
    {
        MovieId: 102,
        hallName: 'Miraj Talkies'
    },
    {
        MovieId: 102,
        hallName: 'Kamal Cinema'
    },
]
function getMovie(id) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(()=> {
            let movie = movies.find((movie)=> movie.movieId === id);
            if(movie) {
                resolve(movie);
            }else {
                reject("movie not found in database...");
            }
        },3000)
    });
    return pr;
}
function getCinema(MovieId) {
    let pr = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            let movieCinemas = Cinemas.filter((Cinema)=> Cinema.MovieId === MovieId);
            if(movieCinemas){
                resolve(movieCinemas);
            }else{
                reject(" no Cinema hall found ...");
            }
        },3000)
    });
    return pr;
}
function getTicket(CinemaName) {
    let pr = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(CinemaName == 'regal'){
                resolve({
                    Diamond: 600,
                    Gold: 400,
                    Silver: 300
                });
            }else{
                reject("no Cinema hall found...");
            }
        },3000)
    })
    return pr;
}
async function movieSummary() {
    try {
        let movie = await getMovie(101)  //4 sececond
        let Cinema = await getCinema(movie.movieId) //2 second
        let ticket = await getTicket(Cinema[0].hallName)
        console.log(ticket);
    } catch (err) {

    }
}