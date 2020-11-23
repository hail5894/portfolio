
$(function () { 
    
     $('header').addClass('active');
    $('.work_de_1 a').on('mouseover',hover);
    
    $('.works_imgs').addClass('active');
     $('.works_imgs img').eq(0).addClass('active');
    var index=0;
    function hover(){
        index = $(this).index();
        
         $('.works_imgs').removeClass('active');
        $('.works_imgs img').removeClass('active');
        
        setTimeout(function(){
         $('.works_imgs').addClass('active');
         $('.works_imgs img').eq(index).addClass('active');
        },200);
    }
    
    var idx=0,move=0;
    $('.work_de_1 a').on('click',function(e){
        e.preventDefault();
        idx= $(this).index();
        //css... 메뉴브븐
        
         if($(window).width() < 1500){
             
         $('.works_imgs').removeClass('active');
        $('.works_imgs img').removeClass('active');
        
        setTimeout(function(){
         $('.works_imgs').addClass('active');
         $('.works_imgs img').eq(idx).addClass('active');
        },200);
             $('.popup').eq(idx).fadeIn(2000);
           
         }
        $('.popup').eq(idx).fadeIn(500);
        $('.contact').hide();
        
        
        $('.hea_cen').fadeOut(500);
        $('.menu-trigger').animate({
               top:'50%',
               color: '#f4f4f4'
            
            },100);
        $('.back').show();
    });
    
   
    $('.back').on('mouseover',function(){
        $(this).toggleClass('active');
    });
    
  
    //end
});















