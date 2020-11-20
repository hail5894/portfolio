
$(function () { 
    var i=0, move=0,num=0;
    $('header').addClass('active');
    if($(window).width() > 991){    
    $('.work_2_seat').on('wheel DOMMouseScroll',function(e){
         var delta = 0;
         var E = e.originalEvent;
        if(e.originalEvent.deltaY < 0){ 
            $('header').removeClass('active');
            $('.menu-trigger span').addClass('active');
            $('.hea_cen').addClass('active');
            $('.head_1').addClass('active'); 
            $('.hea_bot').addClass('active'); 
            i+=100 
            num+=1
            
        }else{
              $('header').removeClass('active');
              $('.menu-trigger span').addClass('active');
              $('.hea_cen').addClass('active');   
              $('.head_1').addClass('active'); 
              $('.hea_bot').addClass('active'); 
              i-=100;
              num-=1
        }
        if(i<-1100) i=-1100;
        if(i>1) i=0;
        
        
          $('.work_2').eq(num).css({
                transform: 'scale(1.1)',
        transition: 'transform .5s cubic-bezier(.455,.03,.515,.955),opacity .5s cubic-bezier(.455,.03,.515,.955)'
        });
        $('.work_2').css({
                transform:"translateX("+i+"px)",
                transition: '0.6s cubic-bezier(0,0,.2,1)'
        });
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
        
     
    //3.팝업 띄우기
    var index=0;
    $('.work_goods').on('click',function(e){
        e.preventDefault();
        index=$(this).index();
        //css... 메뉴브븐
        $('header').addClass('active');
        $('.menu-trigger span').removeClass('active');
        $('.hea_cen').removeClass('active');
        $('.head_1').removeClass('active'); 
        $('.hea_bot').removeClass('active');
        
        
        
        $('.popup').eq(index).fadeIn(500);
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
       
        
        
   }
    
    
    

    
    
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
  

    //work 이동
    $('.goods_detail a').on('click',function(e){
     e.preventDefault();  
        $('.pageTri').show()
         $('.pageTri').css({
            bottom:'100%',
            right:'100%',
            background:'#f4f4f4'
            }); 
        
                     
        $('.pageTri').animate({
                right:'30%',
                bottom:'30%'
            },400, function () {
                 $('.pageTri').animate({
                   right: '0%',
                   bottom: '0%'
                }, 400)}); 
        
        var url;
         setTimeout(function(e) { 
               url = "./work_de.html";
                $(location).attr('href',url);
            }, 1000);
        });
  
    //모바일
    if($(window).width() < 991){
          
        $('html,body').css({
           overflow:'auto' 
        });
        
    $('.work_1_port_3 span').eq(1).on('click',function(){
           var a=  $('.work_1_port_3').offset().top
            $(window).scrollTop(a);    
        });
        
        
        $('.back').on('click',function(){
        $('.popup').fadeOut(500);
         $('.menu-trigger').animate({
               top:'30%'
            },100);
        $('.back').hide();
         $('.hea_cen').fadeIn(500);
        
        if($('.popup').hide()){
         $('.popMove').css({
            transform: 'translateX('+0+'%)'});
            move=0;
        }
        $('.contact').fadeIn(500);
         $('.work_goods').height(220);  
            
    });
         //3.팝업 띄우기
    var index=0;
    $('.work_goods').on('click',function(e){
        e.preventDefault();
        index=$(this).index();
        $(this).css({
            height:'100%'
        })
        $('.contact').hide();
        $('.menu-trigger').animate({
               top:'50%',
               color: '#f4f4f4'
            },100);
        $('.back').show();
        $('.popup').eq(index).fadeIn(2000);
        
//           $('header').addClass('active');
//            $('.menu-trigger span').removeClass('active');
//            $('.hea_cen').removeClass('active');
//            $('.head_1').removeClass('active'); 
//            $('.hea_bot').removeClass('active'); 
    });
    
   
    $('.back').on('mouseover',function(){
        $(this).toggleClass('active');
    });
       
        //모바일 end
    }
    
    //end
});















