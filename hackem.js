/*
    Welcome to a Hacker News Bookmarklet...
    "Hack'em Up" by Mr Speaker
    v1.0

    jQuery Bookmarklet loader/initialiser
*/

// Loadem Up! 
window.bookmarklet = (function(opts){fullFunc(opts)})({
    css : ["https://github.com/mrspeaker/HackemUp/raw/master/hackemup.css"],
    js  : [
        "https://github.com/mrspeaker/HackemUp/raw/master/hackemup.js",
        "https://github.com/mrspeaker/HackemUp/raw/master/hackemtimer.js"
    ],
    ready : function() {

        // Only works on the main page
        var loc = window.document.location;
        if(loc.hostname !== "news.ycombinator.com" || (loc.pathname !== "/" && loc.pathname !== "/news") ){
            alert("Only works on Hacker News front page:\nhttp://news.ycombinator.com/");
            return;
        };

        // Start the show.
        hackemup.init();
        hnutimer.init(function() {
            // When the timer's done...
            hackemup.fetch();
        });
    }
});

// jQuery bookmarklet magic...
// ... by Brett Barros (& Paul Irish)
// ... http://www.latentmotion.com/downloads/blank-bookmarklet-v1.js
function fullFunc(a){function d(b){if(b.length===0){a.ready();return false}
$.getScript(b[0],function(){d(b.slice(1))})}function e(b){$.each(b,function(c,f){$("<link>")
.attr({href:f,rel:"stylesheet"}).appendTo("head")})}a.jqpath=a.
jqpath||"http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js";
(function(b){var c=document.createElement("script");c.type="text/javascript";c.src=b;
c.onload=function(){e(a.css);d(a.js)};document.body.appendChild(c)})(a.jqpath)};