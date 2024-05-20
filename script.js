// let currentSong = new Audio();

// async function getSongs() {
//     let a = await fetch("http://127.0.0.1:3000/songs/")
//     let response = await a.text();
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a")
//     songs = []
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             let songName = element.href.split("/").pop().replace("SpotifyMate.com%20-", "");
//             songs.push(songName.replaceAll("%20", " "))
//         }
//     }
//     return songs
// }

// const playMusic = (track) => {
//     currentSong.Src = "/songs/" + track
//     currentSong.play()
//     play.src= "pause.svg"
// }


// async function main() {
//     //get the list of all the songs
//     let songs = await getSongs()

//     //show all the songs in the playlist
//     let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
//     for (const song of songs) {
//         songUL.innerHTML = songUL.innerHTML + `<li><img class="invert "src="music.svg" alt="">
//                             <div class="info">
//                                 <div>${song}</div>
//                                 <div>Pranit</div>
//                             </div>
//                             <div class="playnow">
//                                 <span>Play Now</span>
//                                 <img class="invert" src="play.svg" alt="">
//                             </div></li>`;
//     }

//     Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
//         e.addEventListener("click", element => {
//             console.log(e.querySelector(".info").firstElementChild.innerHTML)
//             playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
//             track = e.querySelector(".info").firstElementChild.innerHTML.trim()
//         })
//     })

//     //attach an event listener to play, next and previous
//     play.addEventListener("click",()=>{
//         currentSong.src = `/songs/` + track
//         currentSong.play()
//         document.querySelector(".songinfo").innerHTML= track
//         document.querySelector(".songtime").innerHTML= "00:00 / 00:00"


//     })











// }

// main()
let currentSong = new Audio();
let track;

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            let songName = element.href.split("/").pop().replace("SpotifyMate.com%20-", "");
            songs.push(songName.replaceAll("%20", " "))
        }
    }
    return songs
}

const playMusic = (track) => {
    currentSong.src = "/songs/" + track
    currentSong.play()
    document.querySelector(".playnow img").src= "pause.svg"
    document.querySelector(".songinfo").innerHTML= track
    document.querySelector(".songtime").innerHTML= "00:00 / 00:00"
}


async function main() {
    //get the list of all the songs
    let songs = await getSongs()

    //show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert "src="music.svg" alt="">
                            <div class="info">
                                <div>${song}</div>
                                <div>Pranit</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="play.svg" alt="">
                            </div></li>`;
    }

    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
            track = e.querySelector(".info").firstElementChild.innerHTML.trim()
        })
    })

    //attach an event listener to play, next and previous
    let play = document.querySelector(".playnow img")
    play.addEventListener("click",()=>{
        currentSong.src = `/songs/` + track
        currentSong.play()
        document.querySelector(".songinfo").innerHTML= track
        document.querySelector(".songtime").innerHTML= "00:00 / 00:00"
    })

}

main()