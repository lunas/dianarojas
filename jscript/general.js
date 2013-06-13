$(document).ready(function() {

	var pagefound = false;
  	$('#menu1 li a').each(function(i){
		var linktext = $(this).text().toLowerCase();
		if (linktext.indexOf( $('#header h2').text().toLowerCase()) >= 0) {
			$(this).css('background-color', 'white');
			pagefound = true;
		}
	});
	if (!pagefound) {
		$('#menu1 li#menu-01 a').css('background-color', 'white');
	}

  });
