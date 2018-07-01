function makeGrid() {
	
	
	// Select size input
	
	var draw, cell, height, width, row;
	
	draw = $('#pixel_canvas');
	height = $('#input_height').val();
	width = $('#input_width').val();
	
	draw.children().remove()
	
	for (x = 0; x < height; x++) {
	draw.append('<tr></tr>');
	}
	
	row = $('tr');
	
	for (y = 0; y < width; y++) {
	row.append('<td></td>');
	} 
	
	cell = draw.find('td');
	
	// When td is clicked by the user, change color of td
	cell.click(function() {
		// Select color input
	    var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

// When size is submitted by the user, call makeGrid()
var submit;

submit = $('input[type="submit"]')

submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});


