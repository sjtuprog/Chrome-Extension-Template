/*
** file: js/main.js
** description: javascript code for "html/main.html" page
*/

function init_main () {
    $('html').hide().fadeIn('slow');
    


    
}

//bind events to dom elements

console.log('aaa');

document.addEventListener('DOMContentLoaded', init_main);

//replace css
var cssLink = $('link[href*="jobsearch_all.css"]');
cssLink.replaceWith('<link href="../css/template.css" type="text/css" rel="stylesheet">');


// replace images with cats
var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}