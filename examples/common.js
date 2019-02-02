
$(function() {
	var $ele = $('.demo1_6 .des');
	var maxH = 44;
	if($ele.height() <= maxH) {
		$ele.height("auto");
	} else {
		while($ele.height() > maxH){
			$ele.text($ele.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
		}
	}

	$ele.css('visibility','visible');

});

