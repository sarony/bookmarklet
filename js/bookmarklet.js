// ;(function(){
//   alert('From Github yo!');
// })(window);

(function(){

  // the minimum version of jQuery we want
  var v = "1.3.2";

  // check prior inclusion and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement("script");
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    initMyBookmarklet();
  }
  
  function initMyBookmarklet() {
    $.getScript('127.0.0.1:3000/user');
    var videoLink = ""
    // from code school
    if(window.location.href.search("codeschool")>=0){
      var codeSchool = []
      $("source").each(function(){
        if($(this)[0].getAttribute("type")=="video/mp4"){
          codeSchool.push($(this)[0].getAttribute("src"));
        };
      });
      videoLink=codeSchool[0];
    }
    else if(window.location.href.search("youtube")>=0){
      // from youtube
      videoLink = $("meta[property='og:video']")[0].getAttribute('content');
    }
    else if(window.location.href.search("treehouse")>=0){
      // from treehouse
      $("source").each(function(){
      if($(this)[0].getAttribute("type")=="video/mp4"){
        videoLink = $(this)[0].getAttribute("src");
        };
      });
    };
    alert(videoLink);
  }

})();