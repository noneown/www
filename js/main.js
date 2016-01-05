$(document).ready(function(){
   $('#mainnav li a').click(function(){
	   $(document.body).removeClass();
       $(document.body).addClass($(this).parent().attr('id'));
   });

});