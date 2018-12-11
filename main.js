$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  //todo
  let c = Shape.Circle(200,200,50);
  c.fillColor = 'green';


  // for (let x=25; x<400; x+50){
  //   for (let y=25; y<400; y+=50){
  //    let c = Shape.Circle(x, y, 20);
  //     c.fillColor = 'red';
  //   }
  // }

  paper.view.draw();
});