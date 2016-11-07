$(document).ready(function() {
var pdsaCollapsers = $("[data-pdsa-collapser-name]"); // (1)

for (var i = 0; i < pdsaCollapsers.length; i++) { // (2)
    
    var name = pdsaCollapsers[i].id;
    
    var open = $("#" + name).data("pdsa-collapser-open");
    var close = $("#" + name).data("pdsa-collapser-close");
    
      $("#" + name " .pdsa-panel-toggle")
      .addClass(open);
      
      var list = $("#" + name " .in");
      for (var i=0; i < list.length; i++) {
      	$("a[href='#" + $(list[i]).attr("id") + "']") 
      	.next(".pdsa-panel-toggle")
      	.removeClass(open)
      	.addClass(close);
      }
    
      $("#" + name).on('hide.bs.collapse', function(e) {
      	$("#" + e.target.id).prev()
      	.find(".pdsa-panel-toggle")
      	.removeClass($("#" + name).data("pdsa-collapser-close"))
      	.addClass($("#" + name).data("pdsa-collapser-open"));
      });
    
      $("#" + name).on('show.bs.collapse', function(e) {
      	$("#" + e.target.id).prev()
      	.find(".pdsa-panel-toggle")
      	.removeClass($("#" + name).data("pdsa-collapser-open"))
      	.addClass($("#" + name).data("pdsa-collapser-close"));
      });
    });
}
// (1) Let's go after anything that has this attribute, data-pdsa-collapser-name, give me all of those things as a collection
// (2) Then I'll loop through the pdsaCollapsers.length
// (3) Now all the remaining code below needs to go into the for loop
// (4) Now let's get the name of the pdsaCollapser container, and get at its id, and put this id into var 'name'
// (5) Now we have vars - name, open, close, but we need to replace the reference to #playlists, that's hardcoded into both open and close var assignment, and we'll replace it with ('#' + name)