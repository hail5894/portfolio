
$(function () { 
    //선언
    var i=0, move=0, num=0;
    var touchStart=0,touchEnd=0,touch=0;
    var index=0, url;
   var moveTop,deSet,idx=0;  //팝업 마우스 휠 했을떄 선언
   //헤더 active (백그라운드 투명//믹스블랜드모드)
    $('header').addClass('active');
    //active 함수는 css 처음 시작 발동 함수
   
    
    
    function active(){
    $('header').css({
        transition:'0s'
       });
        $('header').removeClass('active');
        $('.menu-trigger span').addClass('active');
        $('.hea_cen').addClass('active');
        $('.head_1').addClass('active'); 
        $('.hea_bot').addClass('active');  
    }
   
    
    function active_1(t){
         $('header').css({
                 transition:'.8s'
            });
        
        setTimeout(function(){
            $('header').addClass('active'); 
        
            $('.menu-trigger span').removeClass('active');
            $('.hea_cen').removeClass('active');
            $('.head_1').removeClass('active'); 
            $('.hea_bot').removeClass('active');
        },10);
    }
    //$('.work_2_seat') 휠 이벤트 발동
if($(window).width() > 991){     
    $('.work_2_seat').on('wheel DOMMouseScroll',function(e){
         var delta = 0;
         var E = e.originalEvent;
        if(e.originalEvent.deltaY < 0){ 
        // 마우스 휠 내릴 때
           i+=100;  num+=1;
        }else{ 
           i-=100;  num-=1;
        }
        
        if(i<-1300) i=-1300;
        if(i>1) i=0;
    
        active();
        $('.work_2').eq(num).css({
         transform: 'scale(1.1)',
        transition: 'transform .5s cubic-bezier(.455,.03,.515,.955),opacity .5s cubic-bezier(.455,.03,.515,.955)'
        });
        $('.work_2').css({
            transform:"translateX("+i+"px)",
            transition: '0.5s cubic-bezier(0,0,.2,1)'
        });

    });

        
    // 터치 start X값 담기
    $('.work_2_seat').on('touchstart',function(e){
        touchStart = e.originalEvent;
       touchStart= e.originalEvent.changedTouches[0].screenX;
     });      
     // 터치 end X값 담기
    $('.work_2_seat').on('touchend',function(e){
         touchEnd = e.originalEvent;
         touchEnd= e.originalEvent.changedTouches[0].screenX;
     });    
    
    $('.work_2_seat').on('touchmove',function(e){
        //start 값이 end보다 크면 우측이동/작으면 좌측이동
        touchStart>touchEnd ?  touch+=20 : touch-=20;    
        if(touch>1450) touch=1450;
        if(touch<0) touch=0;
        $('.work_2').css({
                transform:"translateX(-"+touch+"px)",
                transition: '0.6s cubic-bezier(0,0,.2,1)'
        });
        
        active();
     });      
        
        
 
        
     
    //3.팝업 띄우기/work_goods는 work.html
    $('.work_goods').on('click',function(e){
        e.preventDefault();
        index=$(this).index();  //팝업 여러개중 한개 index번호 받기
        
        $('.popup').eq(index).show();  //해당 popup창 나타나기
        $('.contact').hide();   //contact 숨기기
     
        $('.hea_cen').hide(); //글씨 숨기기
        //버거메뉴 중앙으로 이동
        $('.menu-trigger').animate({
               top:'50%',
               color:'#f4f4f4'
            },100);
        $('.back').show();  //뒤로가기 버튼 나오기
       
        active_1();
//       $('header').css({
//        background:'#2f2f2f'    
//       });  
        //background색 맞춰주기
        });
    
       //뒤로가기 누르면 이벤트 발생
    $('.back').on('click',function(){
        //팝업 숨기기, 버거메뉴 원래 위치 이동
        $('.popup').fadeOut(500);
        $('.menu-trigger').animate({
               top:'2%'
            },100);
        $('.back').hide();  //뒤로가기 버튼 숨기기
        $('.hea_cen').fadeIn(500); //글씨 보이기
        
        if($('.popup').hide()){
        $('.popMove').css({
            transform: 'translateX('+0+'%)'});
            move=0;
            //팝업이 숨겨지면 100% 되는거 리셋
        }
        $('.contact').fadeIn(500);  //contact 보이기    
        active();
//        $('header').css({
//            background:'#f4f4f4'
//        });
        //background색 맞춰주기
    });
   
       
    $('.back').on('mouseover',function(){
        $(this).toggleClass('active');  //뒤로가기 애니메이션 발생
    }); 
  
}

 
    
 //팝업되고 마우스 움직였을때 이벤트 발동 
  $('.popup').on('wheel DOMMouseScroll',popup);
    
    //모바일용 팝업되고 마우스 움직였을떄 이벤트 발동
    if($(window).width() < 1500){
        $('.popMove').css({
        transform: 'translateX('+0+'%)'});
        //처음에 0%에서 시작
        $('.popup_scroll_1').hide();        //스크롤 숨김
        $('.popup').on('click',popup_1);    //(모바일)클릭할떄 슬라이드 이벤트 발생
    }
 
    //윈도우 팝업슬라이드 이벤트
    function popup(e){
        clearTimeout(deSet);    //deSet= setTimeout을 취소
        deSet = setTimeout(function(){
        e.originalEvent.deltaY < 0 ? move+=100 : move-=100;
            //마우스 휠을 아래로 움직이면 +100/올리면 -100
            if(move>99) move=0;     //수치 제한
            if(move<-201) move=-200;    //수치 제한
           
            //css 조정
            $('.popMove').css({
                transform: 'translateX('+(move)+'%)',
                transition: '0.5s ease-in-out'   
            });
        },100);
        
    }
    //모바일 클릭 팝업슬라이드 이벤트
    function popup_1(){
        idx++;  //idx는 1씩 증가
        if(idx > 2){ 
            alert('마지막 화면입니다.');
            idx=0;
            //2보다 크면 idx 처음으로 돌아가고 마지막 화면이라고 말해준다
        }
        
        if(idx<0)  idx=0;   //idx -이면 0으로 돌아옴
        
        //css idx*100으로 조정
             $('.popMove').css({
                transform: 'translateX(-'+(idx*100)+'%)',
                transition: '0.5s ease-in-out'   
             });
    }
  


  //work 누르면 메뉴 모아둔 페이지 이동(화면전환)
    $('.goods_detail').on('click',function(e){
     e.preventDefault();  
        //다른 전환과 차이점을 두기위해 배경색 흰색으로 바꿈
        $('.pageTri').css({
            background:'#f4f4f4'
        });
        $('.pageTri').show();
        //0.01초 active 실행
        setTimeout(function(){$('.pageTri').addClass('active');},10);
        
        
        //0.6초후 위에 있는 모든 전환 실행후 work_de 페이지로 이동
        setTimeout(function(e) { 
            url = "./work_de.html";
            $(location).attr('href',url);
            $('body').addClass('active');   //투명 0에서 1로 실행
        }, 200);
    });
  
    
   //모바일
    if($(window).width() < 991){
        //overflow hidden 풀기
        $('html,body').css({
           overflow:'auto' 
        });
        //↓ 클릭시 해당 영역 내려가기
        $('.work_1_port_3 span').eq(1).on('click',function(){
            var a=  $('.work_1_port_3').offset().top;   
            $(window).scrollTop(a);

       
        });
            //뒤로가기 클릭시 위에 붙어 있게 css 조정
        $('.back').on('click',function(){
                $('.popup').fadeOut(500);
                $('.menu-trigger').animate({
                   top:'30%'
                },100);
                $('.back').hide();  //뒤로가기 숨기기
                $('.hea_cen').fadeIn(500); //글씨 나타나게 하기

                if($('.popup').hide()){
             $('.popMove').css({
                transform: 'translateX('+0+'%)'});
                move=0;
                //팝업창이 사라지면 해당 위치 리셋
                }
            $('.contact').fadeIn(500);     //contact 나타나기
            $('.work_goods').height(220);      //위치 조정

        });
        //3.팝업 클릭시
        $('.work_goods').on('click',function(e){
            e.preventDefault();
            index=$(this).index();
            $(this).css({
                height:'100%'
            });
            //해당 높이를 100%나타내기
            $('.contact').hide();   //contact 숨기기
            $('.menu-trigger').animate({
                   top:'50%',
                   color: '#f4f4f4'
                },100);
            //버거메뉴 위치 조정
            $('.back').show();  //뒤로가기 나타내기
            $('.popup').eq(index).fadeIn(800); //맨마지막 미관상 popup나타내기

        });


        $('.back').on('mouseover',function(){
            $(this).toggleClass('active');
            idx=0;
        });
       
        //모바일 end
    }
    
    
    
    //popup창 일부조정
     if($(window).width() > 1500){
          $('.aa-3').css({
            'padding-top':'6%',
            'padding-left':'0%'
        });
         
            $('.aa-4').css({
            'padding-top':'10%'
        });
     }
    if($(window).width() < 1500 && $(window).width() > 1250 ){
        $('.aa-3').css({
            'padding-top':'10%',
            'padding-left':'8%'
        });
         $('.aa-4').css({
            'padding-top':'15%'
        });
        
        
    }
    
       if($(window).width() < 1249 && $(window).width() > 991 ){
        $('.aa-3').css({
            'padding-top':'5%',
            'padding-left':'8%'
        });
      
          $('.aa-4').css({
            'padding-top':'10%'
        });
        
    }
    
       if($(window).width() < 990 && $(window).width() > 769 ){
           $('.aa-2').css({
            'margin-left':'6%'
            });
        $('.aa-3').css({
            'padding-top':'14%',
            'padding-left':'8%'
        });
           
       $('.aa-5').css({
            left:'55%',
            top:'-40%'
        });
       }
     if($(window).width() < 768 && $(window).width() > 480 ){
            $('.aa-5').css({
            left:'45%',
            top:'-38%'
        });
    }
    
    
    //모바일end
    //end
});















