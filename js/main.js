jQuery(document).ready(function($){
	
	jQuery(window).scroll(function(){
    
    if($(document).scrollTop()>50){
        $('header').addClass('shrink');
    }
    else{
       $('header').removeClass('shrink');
    }
});
    
});


//jQuery(window).scroll(function(){
//    
//    if($(document).scrollTop()>50){
//    
//    $('header').addClass('shrink');
//}  
//else{
//    $('header').removeClass('shrink');
//}
//                      
//});


