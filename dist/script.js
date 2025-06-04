var obj = document.getElementById('drawing'); 
if (obj.getContext){
   var ctx = obj.getContext('2d');
  triangle(0, 0, 200, 18)
 s();
  sqrt(0, 500, 200, 300,{r: 176, g: 186,b: 190,a: 255})
  sqrt(301, 500, 500, 300,{r: 176, g: 186,b: 190,a: 255})
  circle(40,100,50)
  circle(40,400,50)
color_circle(100,50,40,{r: 66, g: 24,b: 38,a: 255})
color_circle(400,50,40,{r: 66, g: 24,b: 38,a: 255})
  semicircle(142, 400, 400, {r: 176, g: 186,b: 190,a: 255})
  semicircle(142, 100, 400, {r: 176, g: 186,b: 190,a: 255})
  color_semicircle(100, 400, 142, {r: 176, g: 186,b: 190,a: 255})
   color_semicircle(400, 400, 142, {r: 176, g: 186,b: 190,a: 255})
draw_rhomb()
}
function drawLine(x1, y1, x2, y2, color) {
    var deltaX = Math.abs(x2 - x1);
    var deltaY = Math.abs(y2 - y1);
    var signX = x1 < x2 ? 1 : -1;
    var signY = y1 < y2 ? 1 : -1;
    var d = deltaX - deltaY;
    plot(x2, y2, color); 
    while(x1 != x2 || y1 != y2) 
    {
        plot(x1, y1,color);
        var d2 = d * 2;
        if(d2 > -deltaY) 
        {
            d -= deltaY;
            x1 += signX;
        }
        if(d2 < deltaX) 
        {
            d += deltaX;
            y1 += signY;
        }
    }
}
function plot(x, y, color) {
  if (!color) color = { r: 0, g: 0, b: 0, a: 255 };
  var p = ctx.createImageData(1, 1);
  p.data[0] = color.r;
  p.data[1] = color.g;
  p.data[2] = color.b;
  p.data[3] = color.a;
  var data = ctx.getImageData(x, y, 1, 1).data;
  if (data[3] <= p.data[3])
    //сравниваем прозрачность
    ctx.putImageData(p, x, y);
}
function circle(r,x1,y1){
  var x = 0
   var y = r
   var d = 1 - 2 * r
   var error = 0
   while (y >= x){
       plot(x1 + x, y1 + y)
       plot(x1 + x, y1 - y)
       plot(x1 - x, y1 + y)
       plot(x1 - x, y1 - y)
       plot(x1 + y, y1 + x)
       plot(x1 + y, y1 - x)
       plot(x1 - y, y1 + x)
       plot(x1 - y, y1 - x)
       error = 2 * (d + y) - 1
       if ((d < 0) && (error <= 0)){
           d += 2 * ++x + 1
           continue}
       if ((d > 0) && (error > 0)){
           d -= 2 * --y + 1
           continue}
       d += 2 * (++x - --y)
   }
}
function color_circle(x, y, r, color) {
  for (var i = -r; i <= r; i++){
    for (var j = -r; j <= r; j++){
      if (i * i + j * j <= r * r){ 
        plot(x + i, y + j, color);
      }
    }
  }
}
function color_semicircle(x, y, r, color) {
  for (var i = -r+44; i <= r-44; i++){
    for (var j = -r; j <= 0; j++){
      if (i * i + j * j <= r * r){ 
        plot(x + i, y + j, color);
      }
    }
  }
}
function s(){
   drawLine(0, 0,100, 50)
   drawLine(0, 100,100, 50)
   drawLine(0, 200,100, 50)
   drawLine(0, 300,100, 50)
   drawLine(100, 50,0, 500)
   drawLine(100, 50,100, 500)
  
    drawLine(200, 0,100, 50)
   drawLine(200, 100,100, 50)
   drawLine(200, 200,100, 50)
   drawLine(200, 300,100, 50)
   drawLine(100, 50,0, 500)
   drawLine(100, 50,200, 500)
   drawLine(200, 0,200, 500)
             
   drawLine(400, 50,300, 0)
   drawLine(400, 50,300, 100)
   drawLine(400, 50,300, 200)
   drawLine(400, 50,300, 300)
   drawLine(400, 50,300, 500)
   drawLine(400, 50,400, 500)
  
   drawLine(400, 50,500, 0)
   drawLine(400, 50,500, 500)
   drawLine(400, 50,500, 100)
   drawLine(400, 50,500, 200)
   drawLine(400, 50,500, 300)
   drawLine(400, 50,500, 500)
   drawLine(300, 0,300, 500)}

function sqrt(x1, y1, x2, y2, color) {
  for (var x = x1; x < x2; x++){                     drawLine(x, y1, x, y2, color);
   }
}
function semicircle(r, x1, y1, color){
  var x = 0
   var y = r
   var d = 1 - 2 * r
   var error = 0
   while (y >= x){
       plot(x1 + x, y1 - y,color)
       plot(x1 - x, y1 - y,color)
       error = 2 * (d + y) - 1
       if ((d < 0) && (error <= 0)){
           d += 2 * ++x + 1
           continue}
       if ((d > 0) && (error > 0)){
           d -= 2 * --y + 1
           continue}
       d += 2 * (++x - --y)
   }
}
function rhomb(r,x1,y1,color){
  var x = 0
   var y = r
   var d = 1 - 2 * r
   var error = 0
   while (y >= x){
       plot(x1 + x - r, y1 + y - r,color)
       plot(x1 + x - r, y1 - y + r,color)
       plot(x1 + y - r, y1 + x - r,color)
       plot(x1 + y - r, y1 - x + r,color)
       plot(x1 - y + r, y1 + x - r,color)
       plot(x1 - y + r, y1 - x + r,color)
       plot(x1 - x + r, y1 + y - r,color)
       plot(x1 - x + r, y1 - y + r,color)
       error = 2 * (d + y) - 1
       if ((d < 0) && (error <= 0)){
           d += 2 * ++x + 1
           continue}
       if ((d > 0) && (error > 0)){
           d -= 2 * --y + 1
           continue}
       d += 2 * (++x - --y)
   }
}
function color_rhomb(r,x1,y1,color){
  var t = r;
  for(var i = 0; i < t;i++){
      rhomb(r,x1,y1,color)
            r--
  }
}
function draw_rhomb(r,x1,y1,color){
rhomb(10,50,265)
rhomb(20,100,250)
rhomb(10,150,265)
  
rhomb(10,350,265)
rhomb(20,400,250)
rhomb(10,450,265)
color_rhomb(10,50,265,{r: 0, g: 0,b: 0,a: 255})
  color_rhomb(20,100,250,{r: 0, g: 0,b: 0,a: 255})
  color_rhomb(10,150,265,{r: 0, g: 0,b: 0,a: 255})
  color_rhomb(10,350,265,{r: 0, g: 0,b: 0,a: 255})
  color_rhomb(20,400,250,{r: 0, g: 0,b: 0,a: 255})
  color_rhomb(10,450,265,{r: 0, g: 0,b: 0,a: 255})

}
function triangle(x, y, w, h) {
  for (var i = 0; i < w; i++){
    for (var j = 0 ; j < h ;j++){
        plot(x+i , y+j , {r: 0, g: 0,b: 0,a: 255})
      plot(x+i+ 300, y+j , {r: 0, g: 0,b: 0,a: 255})
    }
  }
}