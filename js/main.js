
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
  var red = colorsOnly[0],
  		green = colorsOnly[1],
  		blue = colorsOnly[2],

  		r = parseInt (red + 52),
  		g = green - 25,
  		b = blue - 100;

  		var color = "rgb"+ '(' + r +','+ g +','+ b +')';

			var colors = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(/,\s*/);
  		red1 = colors[0],
  		green1 = colors[1],
  		blue1 = colors[2],
  		
  		r1 = red1 - 52,
  		g1 = green1 - 25,
  		b1 = blue1 - 100;

  		var color1 = "rgb"+ '(' + r1 +','+ g1 +','+ b1 +')';

  		var color2 = "rgb"+ '(' + red +','+ green +','+ blue +')'; 
  		
  		var nextcolor = color2.substring(color2.indexOf('(') + 1, color2.lastIndexOf(')')).split(/,\s*/);
			red2 = nextcolor[0],
  		green2 = nextcolor[1],
  		blue2	 = nextcolor[2],
  		
  		r2 = red2 - 52,
  		g2 = green2 - 25,
  		b2 = blue2 - 100;

  		var color3 = "rgb"+ '(' + r2 +','+ g2 +','+ b2 +')';  		

  		document.getElementById('rect').style.backgroundColor = color;
  		document.getElementById('rect1').style.backgroundColor = color1;
  		document.getElementById('rect2').style.backgroundColor = color2;
			document.getElementById('rect3').style.backgroundColor = color3;

			console.log(color1);

 	
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

	
