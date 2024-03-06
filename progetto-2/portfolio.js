var words =['Hard work','Sport Lover', 'Html junior', 'Summer','Various hobby','CSS Skill']
var counter=0;
var words= document .getElementById("Carousel-words");
setInterval(update_carousel_words, 1000);
function update_carousel_words(){
    words.innerhtml= words[Counter];
    counter++;
    if(counter >= words.length)[
        counter = 0 
    ]
}

