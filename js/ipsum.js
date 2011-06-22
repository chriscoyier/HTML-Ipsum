$("legend").each(function() {

    var clip = new ZeroClipboard.Client();
    var thisObj = $(this);
    clip.glue(thisObj[0]);
    var txt = $(this).parent().find("textarea").text();
    clip.setText(txt);
    
    clip.addEventListener('complete', function(client, text) {
        $("#copied-notice").fadeIn(500, function(){
          $(this).fadeOut(500);  
        });
    });        

}); 