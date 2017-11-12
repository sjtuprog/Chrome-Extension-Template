function init_main () {
    $('html').hide().fadeIn('slow');
    


    
}

document.addEventListener('DOMContentLoaded', init_main);

var cssLink = $('link[href*="jobsearch_all.css"]');
cssLink.replaceWith('<link href="../css/jobs_page.css" type="text/css" rel="stylesheet">');