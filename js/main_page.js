/*
** file: js/main.js
** description: javascript code for "html/main.html" page
*/

function init_main () {
    $('html').hide().fadeIn('slow');
    


    
}

//bind events to dom elements


document.addEventListener('DOMContentLoaded', init_main);

//replace css
var cssLink = $('link[href*="jobsearch_all.css"]');
cssLink.replaceWith('<link href="../css/main_page.css" type="text/css" rel="stylesheet">');

var url_img = chrome.extension.getURL('/images/background.png');

console.log(url_img);

/*
var content = document.getElementsByClassName("content");



content[0].style.backgroundImage = url_img;
console.log(content[0]);
alert(content[0].style.backgroundImage);
*/
// replace images with cats
/*
var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}
*/