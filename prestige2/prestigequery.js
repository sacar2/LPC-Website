var main = function(){
	/* the moving pic part*/

	/*the tabbed pricing part*/


	/*the hover special part*/
	$(.specialhover).hover( function(){
		$(this).addClass('roll');
		$(this).hide('.original')removeClass('active-original');
	});
};

$(document).ready(main);