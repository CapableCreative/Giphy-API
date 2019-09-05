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
    var key = "&api_key=QngcthEf2wRQds5Zw0YnWw4hXvm259zV";
    var apiUrl = "https://api.giphy.com/v1/gifs/search?q=";
    var rating = "&rating=r";
    var defaultSearch = " superhero";
    var title = "&title";
    var limit = "&limit=3";
    $("#searchSubmit").click(function () {
        searchTerm = $('#searchGiphy').val();
        searchTerm = searchTerm.replace(" ","_");
        $("#searchSubmit").attr("data-term",searchTerm);  
        var term = $(this).attr("data-term");  
        $("#buttons").append('<button id=\"'+searchTerm+'\"class=\"button\" data-term=\"' + searchTerm + '\">'); 
        $("#"+ searchTerm).text(searchTerm);
        ajaxCall(term);  
        $("#"+ searchTerm).click(function () {
            var term = $(this).attr("data-term");  
            ajaxCall(term);  
        });  
    });
    $(".button").click(function () {
        var term = $(this).attr("data-term");  
        ajaxCall(term);  
    });
    function ajaxCall(term) {
        $.ajax({       
            url: apiUrl + term + defaultSearch + rating + title + limit + key,
            type: "GET"
        })
        .then(function(response) {
            for (let i = 0; i < response.data.length; i++) {
                var imageAlt = response.data[i].title;
                var imageUrl = response.data[i].images.downsized.url;
                var rated = response.data[i].rating;
                var imageElement = $("<img>");
                var ratingElement = $("<div class=\"rating\">");
                var titleElement = $("<p class=\'title\'>");
            // Attaches API provided img to created img element
                var fourthWidth = $("<div class=\"col-md-4\">");
                ratingElement.text(rated);
                titleElement.text(imageAlt);
                imageElement.attr("src", imageUrl);
                imageElement.attr("alt", imageAlt);
                imageElement.attr("class","img-responsive");
            // Places latest catImage above #images element
                $("#gifs").prepend(fourthWidth);
                $(fourthWidth).append(imageElement);
                $(fourthWidth).append(ratingElement);
                $(fourthWidth).append(titleElement);
            }
        });  
    }  
});
