$(document).ready(function() {
  $('.thumbnail').click(function(){
      $('.modal-body').empty();
    	var title = $(this).parent('a').attr("title");
    	$('.modal-title').html(title);
    	$($(this).parents('div').html()).appendTo('.modal-body');
    	$('#myModal').modal({show:true});
  });
  function changePic(picfile, picID)
  {var myPic = document.getElementByIs(picID);
  	myPic.src = picfile;

  }
});
