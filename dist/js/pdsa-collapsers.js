$(document).ready(function() {
var pdsaCollapsers = $("[data-pdsa-collapser-name]"); // (1)

for (var i = 0; i < pdsaCollapsers.length; i++) { // (2)
    
    var open = $("#playlists").data("pdsa-collapser-open");
    var close = $("#playlists").data("pdsa-collapser-close");
    
      $("#playlists .pdsa-panel-toggle")
      .addClass(open);
      
      var list = $("#playlists .in");
      for (var i=0; i < list.length; i++) {
      	$("a[href='#" + $(list[i]).attr("id") + "']") 
      	.next(".pdsa-panel-toggle")
      	.removeClass(open)
      	.addClass(close);
      }
    
      $("#playlists").on('hide.bs.collapse', function(e) {
      	$("#" + e.target.id).prev()
      	.find(".pdsa-panel-toggle")
      	.removeClass($("#playlists").data("pdsa-collapser-close"))
      	.addClass($("#playlists").data("pdsa-collapser-open"));
      });
    
      $("#playlists").on('show.bs.collapse', function(e) {
      	$("#" + e.target.id).prev()
      	.find(".pdsa-panel-toggle")
      	.removeClass($("#playlists").data("pdsa-collapser-open"))
      	.addClass($("#playlists").data("pdsa-collapser-close"));
      });
    });
}
// (1) Let's go after anything that has this attribute, data-pdsa-collapser-name, give me all of those things as a collection
// (2) Then I'll loop through the pdsaCollapsers.length
// (3) Now all the remaining code below needs to go into the for loop