
$(function () {
    $('header').addClass('active');
   
  
  var m1 = 20000;
  $('body').append('<div class=m1_clone></div>');
  $('.m1_clone').height(m1);
  
//함수 스크롤
    $(window).scrollTop(2000);

    var m1 = {up:0,down:0,state:'',sT:null,rotate:0,scale:0.25,top:50, transY:-50};
    var blen = true;
    
    $('main').on('scroll',function(e){
        e.preventDefault();
        e.stopPropagation();
       e.stopImmediatePropagation();
        
    });
      
    //1.윈도우 스크롤 이벤트 발생
    if($(window).width()>990){
      $(window).on('scroll',function(e){
        upDown();
        
        if(blen) return;
         
        if(m1.state=='down'){
            m1.rotate += 6;
            m1.scale += 0.0115;
            
            m1.top -= 0.7;
            m1.transY += 0.7;
        }else{
            m1.rotate += -6;
            m1.scale += -0.0115;
            m1.top += 0.7;
            m1.transY -= 0.7;

        }
        //rotate,scale 맞추기
        if(m1.rotate > 360) m1.rotate = 360;
        if(m1.rotate < 0) m1.rotate = 0;        
          
        if(m1.scale > 1) m1.scale = 1;
        if(m1.scale < 0.25) m1.scale = 0.25;
     
        //top,transY 의 범위
        if(m1.state=='down'){
            if(m1.transY >  -4) m1.transY=0;
            if( m1.top < 4) m1.top=0;
        }else{
        if(m1.transY <  -50) m1.transY = -50;
        if( m1.top > 50) m1.top = 50; 
            
        }  
        
       
        m1Ani(e);
     
      });
    
    }
    

     setTimeout(function(){blen = false;},500);
    
        //m1Ani 함수
        function m1Ani(e){
             $('.main_1').css({
                 'padding-top': m1.top+'vh'

             });

            $('.main_1_1').css({
                transform: "translateY("+m1.transY+"%)  scale("+(m1.scale) +") "
            });
            $('.main_1_1 > div').css({
                 'transform':"rotate("+ m1.rotate+"deg) "
             });
              
            
        //css 노가다    
        if(m1.scale==1){  
            //css 정리
             $('.main_1').removeClass('active');
            $('.main_2').css({
                display:"block"
            });    
            $('main').css({ overflow:'auto'});
            $('main').trigger('click');
             $('.work_1').fadeIn(1000);  
            
            //사진 active
            if($('.work_1').css("display") == "block"){
            $('.art_main').addClass('active');
            }
           
           }else{
                 $('.main_1').addClass('active');

                if($('.main_1').scrollTop(0)){
                    $('main').css({overflow:'hidden'});
                    $('main').trigger('click');
                }
                $('.main_2').css({
                    display:"none"
                });
               
               $('.work_1').fadeOut();
            //사진 active
            if($('.work_1').css("display") == "none"){
            $('.art_main').removeClass('active');
            }
    
               
               
           }
    
    };
    
    
// upDown함수
    function upDown(){
      m1.up = window.scrollY;
        
      if(m1.up > m1.down){
          //down
          m1.state = 'down';
      }else{
          //up
          m1.state = 'up';
      }
      m1.down = m1.up
    }
    //end
});



$(function () {
    //1124함수    
    $('.main_2').on('mousemove',function(e){
        var x = e.clientX*0.6;
        var y = (x/-2000);
    if(y>-0.287121){y=-0.29}else if(y<-0.378589){y=-0.37}
       if(x>900){x=900}else if(x<100){x=100}
        $('.main_2_1-1 span').css({
            'font-weight': x
//            'letter-spacing': y+'em'
        });
        
    });
});

$(function () {
    //화면전환
    $('.main_2_1 .more a').on('click',function(e){
        e.preventDefault();
        $('.pageTri').show();
        setTimeout(function(){$('.pageTri').addClass('active');},10);
        
        var url;
         setTimeout(function(e) { 
               url = "./work.html";
              $(location).attr('href',url);
                $('body').addClass('active');
            }, 50);
     
     
        
        
        });
    
    
    
    
    //모바일
        if($(window).width() > 481 && $(window).width() < 530 ){
            console.log('a')
            $('.main_1').css({
                 height: '2000px'
            });
        }
    
        if($(window).width() < 980 ){
        $('.more').on('touchstart',function(e){
            e.preventDefault();
             var url;
         setTimeout(function(e) { 
               url = "./work.html";
                $(location).attr('href',url);
                $('body').addClass('active');
            }, 50);
       
        });
            
       
        }
    
});


function init() {
    //화면 전환
}
window.addEventListener('DOMContentLoaded', init);
