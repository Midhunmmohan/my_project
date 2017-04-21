
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
	var letters = $('.clrcode').val();		
  letters = "rgb(" + r + "," + g + "," + b + ")";
 	
 	var col = r;
 	var val = g;
 	var blu = b;

 	col = Math.random(30);
 	val = Math.random(25);
 	blu = Math.random(20);

}

	
