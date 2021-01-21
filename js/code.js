// section about
function verschijn() {
    document.getElementById("about").style.display = "block";
}

// favicon gif
var favicon_imgarr = [
        'img/favicon-01.png',
        'img/favicon-02.png',
        'img/favicon-03.png',
        'img/favicon-04.png',
        'img/favicon-05.png',
        'img/favicon-06.png',
        'img/favicon-07.png',
        'img/favicon-08.png',
        'img/favicon-09.png'
    ],
    image_counter = 0;


setInterval(function() {
    // verwijder favicon
    if (document.querySelector("link[rel='icon']") !== null)
        document.querySelector("link[rel='icon']").remove();
    if (document.querySelector("link[rel='shortcut icon']") !== null)
        document.querySelector("link[rel='shortcut icon']").remove();

    // voeg toe
    document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href=" ' + favicon_imgarr[image_counter] +
        '" type="image/gif">');

    console.log(favicon_imgarr[image_counter]);

    // als laatste in Array, ga terug naar eerste
    // anders volgende    
    if (image_counter == favicon_imgarr.length - 1)
        image_counter = 0;
    else
        image_counter++;
}, 1000);