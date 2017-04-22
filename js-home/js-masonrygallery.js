var images = ["masonry1.jpg", "masonry2.jpg", "masonry3.jpg", "masonry4.jpg", "masonry5.jpg", "masonry6.jpg", "masonry7.jpg", "masonry8.jpg", "masonry9.jpg"]

$(".tab1").click(function(){
  if(parseInt(images.length)%2!=0){

  }
})


function Masonry(colNumber, images){
  this.colNumber = colNumber;
  this.images = images
  this.create = function() {
    createColumns(this.colNumber);
    placeImages()
  }
  function createColumns(colNumber){
    $('#masonry')
    for (var i = 0; i<colNumber; i++){
    var col = $('<div></div>', {
      class: "masonry-col",
      style: "width:" + 100/colNumber + "%",
    })
    .appendTo($("#masonry"))
  }
}
function placeImages(){
  var cols = $("#masonry .masonry-col");
  for (var i = 0; i<this.images.length; i++){
    var col = $('<img>', {
      src: 'img-home/' + this.images[i],
    })
    .appendTo(cols[i%colNumber])
  }
}
}
masonry = new Masonry (3, images);
$(document).ready(function(){
  masonry.create();
})
$(".tab1").on("click",function(){

})
var col=$(".masonry-col")
console.log($(col));
