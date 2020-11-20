
$(function () { 
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
        idx=$(this).index();
        //css... 메뉴브븐
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
    
    $('.back').on('click',function(){
        $('.popup').fadeOut(500);
         $('.menu-trigger').animate({
               top:'2%'
            },100);
        $('.back').hide();
         $('.hea_cen').fadeIn(500);
        
        if($('.popup').hide()){
         $('.popMove').css({
            transform: 'translateX('+0+'%)'});
            move=0;
        }
        $('.contact').fadeIn(500);
    });
    
    
    //팝업 마우스 휠 했을떄

        
  var moveTop,deSet;
    $('.popup').on('wheel DOMMouseScroll',function(e){
        
        clearTimeout(deSet);
        deSet = setTimeout(function(){
            e.originalEvent.deltaY < 0 ? move+=100 : move-=100;
            if(move>99) move=0;
            if(move<-201) move=-200;


             $('.popMove').css({
                transform: 'translateX('+(move)+'%)',
                transition: '0.5s ease-in-out'   
             });
        },100);
 
    });
  
    //end
});















