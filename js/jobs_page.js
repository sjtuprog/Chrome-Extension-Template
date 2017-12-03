function init_main () {
    $('html').hide().fadeIn('slow');
    


    
}

document.addEventListener('DOMContentLoaded', init_main);

var cssLink = $('link[href*="jobsearch_all.css"]');
cssLink.replaceWith('<link href="../css/jobs_page.css" type="text/css" rel="stylesheet">');



    //Appending to DOM 


	
var resultList=document.getElementsByClassName("row  result");
var i;
for(i=0;i<resultList.length;i++)
{
	this.img = document.createElement("img");
	var span = resultList[i].getElementsByClassName("company");
	var space=" ";
	var comma=",";
	var companyNameLong;
	var companyName;
	if(span[0].childNodes.length>1)
	{
		/*console.log(span[0].childNodes[1].innerText);*/
		companyNameLong=span[0].childNodes[1].innerText.split(comma);
	}
	else
	{
		companyNameLong=span[0].innerText.split(comma);

		
	}
	companyNameLong=companyNameLong[0].split(space);
	companyName=companyNameLong[0];
	this.img.src = "https://logo.clearbit.com/"+companyName+".com";
	
	this.img.style.width="40px";
	resultList[i].appendChild(this.img);
}
