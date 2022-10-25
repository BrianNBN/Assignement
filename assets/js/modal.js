
$(document).ready(function(){
 
    var url = $("#cartoonVideo").attr('src');
    
    $("#cartoonVideo").attr('src', '');
	

    $("#myModal").on('shown.bs.modal', function(){
        $("#cartoonVideo").attr('src', url);
    });
    

    $("#myModal").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });
});
