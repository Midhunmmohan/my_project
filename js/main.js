
$(document).ready(function(){
	$(".submit").on("click",function(){
		var a = parseInt($('.firstnum').val()),
		b = parseInt($('.secondnum').val());
		var add = $(".Add:checked").val();
		var subtraction = $(".Subtract:checked").val();
		var multiplication = $(".Multiplication:checked").val();
		

		if(add){
			sum = a + b;
			// alert(sum);
			document.getElementById('sum').innerHTML = sum;
		}
		else if(subtraction)
		{
			sum = a - b;
			document.getElementById('sum').innerHTML = sum;
		}
		else if(multiplication){
			sum = a * b;
			document.getElementById('sum').innerHTML = sum;
		}
		else {
			alert("Give Any Method");
		}
	});
});

	// function getRandomColor() {	
 //    // var letters = '0123456789ABCDEF';
 //    var letters = $('.clrcode').val();
 //    var color = '#';
	// 	for (var i = 0; i < 6; i++ ) {
 //      color += letters[Math.floor(Math.random() *  11)];
 //    }
 //    return color;
	// }

	// function 	randomize() {
	// 	document.getElementById('rect').style.backgroundColor = getRandomColor();
	// 	document.getElementById('rect1').style.backgroundColor = getRandomColor();
	// 	document.getElementById('rect2').style.backgroundColor = getRandomColor();
	// 	document.getElementById('rect3').style.backgroundColor = getRandomColor();
	// 	document.getElementById('rect4').style.backgroundColor = getRandomColor();
	// 	// alert('haii');
	// }

// var safeColors = ['00','33','66','99','cc','ff'];
// var rand = function() {
// var letters = $('.clrcode').val();	
// 	return Math.floor(Math.random()*6);
// };
// var randomColor = function() {
//   var r = safeColors[rand()];
//   var g = safeColors[rand()];
//   var b = safeColors[rand()];
//   return "#"+r+g+b;
// };

// $(document).ready(function() {
//     $('.Analgue').click(function() {
//         $('.rect').each(function() {
//             $(this).css('background',randomColor());
//         });
//     });
// });

function getRandomColor() {
	var r,g,b;
	var letters = $('.clrcode').val();		
  colorsOnly = letters.substring(letters.indexOf('(') + 1, letters.lastIndexOf(')')).split(/,\s*/);
  var red = parseInt(colorsOnly[0]),
  		green = parseInt(colorsOnly[1]),
  		blue = parseInt(colorsOnly[2]),

  		r = red + 40,
  		g = green + 40,
  		b = blue - 40;

  		var color = "rgb"+ '(' + r +','+ g +','+ b +')';
  		console.log("Color", color);

			var colors = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(/,\s*/);
  		var red1 =parseInt (colors[0]),
  		green1 =parseInt (colors[1]),
  		blue1 =parseInt (colors[2]),
  		
  		r1 = red1 - 30,
  		g1 = green1 - 25,
  		b1 = blue1 - 10;

  		var color1 = "rgb"+ '(' + r1 +','+ g1 +','+ b1 +')';

  		var color2 = "rgb"+ '(' + red +','+ green +','+ blue +')'; 
  		
  		var nextcolor = color2.substring(color2.indexOf('(') + 1, color2.lastIndexOf(')')).split(/,\s*/);
			var red2 = parseInt (nextcolor[0]),
  		green2 =parseInt (nextcolor[1]),
  		blue2	 =parseInt (nextcolor[2]),
  		
  		r2 = red2 - 20,
  		g2 = green2 - 50,
  		b2 = blue2 - 20;

  		var color3 = "rgb"+ '(' + r2 +','+ g2 +','+ b2 +')';

  		var prevcolor = color3.substring(color3.indexOf('(') + 1, color3.lastIndexOf(')')).split(/,\s*/);
			var red3 = parseInt (prevcolor[0]),
  		green3 = parseInt (prevcolor[1]),
  		blue3	 = parseInt (prevcolor[2]),
  		
  		r3 = (red3 + 7),
  		g3 = (green3 - 30),
  		b3 = (blue3 + 20);

  		var color4 = "rgb"+ '(' + r3 +','+ g3 +','+ b3 +')';  		

  		document.getElementById('rect').style.backgroundColor = color;
  		document.getElementById('rect1').style.backgroundColor = color1;
  		document.getElementById('rect2').style.backgroundColor = color2;
			document.getElementById('rect3').style.backgroundColor = color3;
			document.getElementById('rect4').style.backgroundColor = color4;

			console.log(color);

 	
 // 	var col = r;
 // 	var val = g;
 // 	var blu = b;

 // 	var one = col[Math.random() * 30];
 // 	var two = val[Math.random() * 25];
 // 	var three = blu[Math.random() * 20];

 

	// document.getElementById('rect').style.backgroundColor = color;
 	// document.getElementById('rect1').style.backgroundColor = two;
 	// document.getElementById('rect2').style.backgroundColor = three;
}

	
