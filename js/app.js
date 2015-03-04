$(document).ready(function(){

function addListItem(e) {
	e.preventDefault();
	var text = $('.newItem').val();
	if($('.newItem').val() !='' ) {
        $('.todoList').append('<li><input type="checkbox" class="checkbox"><span>'+ text +'</span><i class="fa fa-times"></i></li>');
        $('.newItem').val('');
    }
}

$(function() {
	$('.Submit').on('click', addListItem);
});


$(document).on('click', 'i', function(){
    $(this).closest('li').remove()
});


$('li').hover(function(){
	$('i').show();
}, function(){
    $('i').hide();
});
});