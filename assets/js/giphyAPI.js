/*

// Javascript + JQuery / AJAX for Giphy API Homework 6

URL: https:// + api.giphy.com
+
PATH: /v1/gifs/…
+
SEARCH CRITERIA: search=ryan+gosling
+
API KEY: &api_key=YOUR_API_KEY: QngcthEf2wRQds5Zw0YnWw4hXvm259zV
+
RESULT LIMIT: &limit=20
    
*/

// Create array (partially populated with defaults) of Giphy parameters

$(document).ready(async function(){

    $("button").click(function () {
        searchTerm = $('#searchGiphy').val();
        $("#searchSubmit").attr("data-term",searchTerm);   
        var term = $(this).attr("data-term");  
        console.log(term);       
    
        $.ajax({       
            url: "http://api.giphy.com/v1/gifs/search?q=" + "comic " + term +  "&api_key=QngcthEf2wRQds5Zw0YnWw4hXvm259zV",
            type: "GET"
        
        })
    
        
        .then(function(response) {
    
            for (let i = 0; i < response.data.length; i++) {
                var imageAlt = response.data[i].title;
                var imageUrl = response.data[i].images.downsized.url;
                var imageElement = $("<img>");
            // Attaches API provided img to created img element
                var fourthWidth = $("<div class=\"col-md-4\">");
                imageElement.attr("src", imageUrl);
                imageElement.attr("alt", imageAlt);
                imageElement.attr("class","img-responsive");
            // Places latest catImage above #images element
                $("#gifs").prepend(fourthWidth);
                $(fourthWidth).append(imageElement);
            }
        });
    
    
    
    });

    
   
   
 
});
