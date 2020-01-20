$(document).ready(function(){
	$("button").click(function(){
		$("p").toggle(3000,function(){
			$("span").hide(1000);
		});
		
	});
	
	
	
});