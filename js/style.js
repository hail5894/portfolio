
$(function () {
    // header-opacity:1 실행,pageTri 작은화면 맞게 색상 active
    $('header').addClass('active'); 
    $('.pageTri').addClass('pageTri2');  

    
      var m1 = 20000;
      $('body').append('<div class=m1_clone></div>');
      $('.m1_clone').height(m1); //스크롤 많게 새로운 div만들어서 만들어줌
  
    $(window).scrollTop(2000); //함수 스크롤2000부터 실행
    
    //선언
    var m1 = {up:0,down:0,state:'',sT:null,rotate:0,scale:0.25,top:50, transY:-50};
    var blen = true, oneS=true, sy=0;
    var paged = localStorage.page,url;
    
    
    //1.윈도우 스크롤 이벤트 발생
    if($(window).width()>990){
      $(window).on('scroll',function(e){
        upDown();   //스크롤이 위인지 아래인지 함수 발동
        
        if(blen) return;    //blen값 추출
        
        //스크롤 아래일시 rotate,scale 커지고 그에맞게 top 작게,transY 커지게 값 조절
        //up이면 그 반대
        if(m1.state=='down'){
            m1.rotate += 6;
            m1.scale += 0.0115;
            
            m1.top -= 0.7;
            m1.transY += 0.7;
        }else{
            if(oneS){
                m1.rotate += -6;
                m1.scale += -0.0115;
                m1.top += 0.7;
                m1.transY -= 0.7;
            }

        }
        //rotate,scale 넘어가지 않게 조절
        if(m1.rotate > 360) m1.rotate = 360;
        if(m1.rotate < 0) m1.rotate = 0;        
          
        if(m1.scale > 1) m1.scale = 1;
        if(m1.scale < 0.25) m1.scale = 0.25;
     
        //top,transY 넘어가지 않게 조절
        if(m1.state=='down'){
            if(m1.transY >  -4) m1.transY=0;
            if( m1.top < 4) m1.top=0;
        }else{
        if(m1.transY <  -50) m1.transY = -50;
        if( m1.top > 50) m1.top = 50; 
            
        }  
         m1Ani(e);  //css 조절함수
     
      });
    
    }
    
    //함수가 바로 발동되서 바로 발동안되고 처음에 0으로 놓여져있게 setTimeout 조정
     setTimeout(function(){blen = false;},500);
    
        //m1Ani 함수 - scale 1이나 아니나에따라 css 적용
        function m1Ani(e){
            //스크롤에 따라 top값 조절
             $('.main_1').css({
                 'padding-top': m1.top+'vh'
             });

            //스크롤에 따라 transY,scale 값 조절
            $('.main_1_1').css({
                transform: "translateY("+m1.transY+"%)  scale("+(m1.scale) +") "
            });
            //스크롤에 따라 rotate 값 조절
            $('.main_1_1 > div').css({
                 'transform':"rotate("+ m1.rotate+"deg) "
             });
              
            
            //css 노가다  
            localStorage.page = 0;         //page- localStorage=0 선언  
            if(m1.scale==1){               //scale이 1 완성 됐을시 
            //oneS가 true일시 sy값에 스크롤값 받아내고,  oneS는 false선언
                (oneS) ? setTimeout(aa,600) : aa(); 
                //oneS가 true일시 함수 0.6초후 실행,아니면 그냥 실행

                function aa(){
                    if(oneS){sy = window.scrollY; oneS = false;}
                    //oneS가 true일때 sy에 현재 스크롤Y값 받아내고 oneS는 false가 된다.

                    //main_1의 active 지운다 .padding-top:50vh;  height: 100%;인거
                    $('.main_1').removeClass('active');
                    //1124 나와라
                    $('.main_2').css({ display:"block" });    
                    //main은 fixed한거 absolute 바꾸기

//                    if(time){window.scrollTo(0,sy);}
//                    setTimeout(function(){time=0},1000);

                    $('main').css({
                        position:'absolute',
                        top:sy,
                        height:'auto'
                    });
                    //아까 받아논 sy값 집어넣으면 스크롤 위치는 신문지까지 제한이 됨

                    $('.work_1').fadeIn();     //work_1 main써있는거 보이게하기
                    $('.main_1').offset().top==0;
                    //work_1가 나타나면 사진 scale 1.5커지게하기
                    if($('.work_1').css("display") == "block"){
                        $('.art_main').addClass('active');
                    }
                    //localStorage 값 1로 바꾸기,화면전환색 원래대로 바꾸기
                    localStorage.page = 1;
                     $('.pageTri').removeClass('pageTri2');

                    //scroll값 구하기
                    var ms = (sy+$('main').height()) - window.innerHeight;
                    //sy+메인 높이-윈도우 전체높이

                    if(ms < window.scrollY){
                        window.scrollTo(0,ms);   
                       //ms보다 지금 스크롤 높이가 크면 ms로 조절
                    }else{
                        window.scrollTo();  //아니면 리셋     
                    }
                }
           //↓오해하지말자 (m1.scale==1) else 임
            }else{
            //main_1의 active 더한다 .padding-top:50vh;  height: 100%;인거
                $('.main_1').addClass('active');
              //$('main').trigger('click');
              //1124 사라져라
                $('.main_2').css({display:"none"});
                $('.work_1').fadeOut();  //work_1 main써있는거 사라져라
            //work_1가 나타나면 사진 원래대로 작아져라
                if($('.work_1').css("display") == "none"){
                    $('.art_main').removeClass('active');
                } 
               
                localStorage.page = 0;  //localStorage=0
           }
        //만약에 sy값이 지금 스크롤보다 크면 메인 fixed로 바꾸기      
         if(sy > window.scrollY){
             $('main').css({
                position:'fixed',
                top:0,
                height:'100%'
            });
            oneS = true;    //oneS는 true로 바꿈
        }
           
    //page- localStorage가 0이면 색깔바꾸기,아니면 지우기
     paged == 0 ? $('.pageTri').addClass('pageTri2') : $('.pageTri').removeClass('pageTri2');
      
    }
    
    
    
// upDown함수
    function upDown(){
      m1.up = window.scrollY;
    //내리면 down, 마우스 올리면 up
      if(m1.up > m1.down){
          //down
          m1.state = 'down';
      }else{
          //up
          m1.state = 'up';
      }
      m1.down = m1.up  //마지막은 결국 같다
    }
    //end
});



$(function () {
    //1124함수  마우스 위치에 따라 글씨 커졌다 작아졌다.
    $('.main_2').on('mousemove',function(e){
        var x = e.clientX*0.6;
        var y = (x/-2000);
    if(y>-0.287121){y=-0.29}else if(y<-0.378589){y=-0.37}
       if(x>900){x=900}else if(x<100){x=100}
        $('.main_2_1-1 span').css({
            'font-weight': x
        });
        
    });
});


$(function () {
    //화면전환
    $('.main_2_1 .more a').on('click',function(e){
        e.preventDefault();
        $('.pageTri').show();
        setTimeout(function(){$('.pageTri').addClass('active');},10);
        //work페이지로 이동
         setTimeout(function(e) { 
               url = "./work.html";
              $(location).attr('href',url);
                $('body').addClass('active');
            }, 200);
    
        });
    
    
    
    
    //모바일 이거 크기 되면 main_1 헤이트 2200px이다 왜냐하면 검정 그림자가 생기무리다.. 그래서 내가 임의로 맞춰줬으므리다..
        if($(window).width() > 481 && $(window).width() < 550 ){
            console.log('a')
            $('.main_1').css({
                 height: '2200px'
            });
        }
    
        if($(window).width() < 980 ){
        //글자 작아지고 커지는 것을 보여주기 위해 setTimeout으로 시간좀 죽임
        $('.more').on('touchstart',function(e){
            e.preventDefault();
         setTimeout(function(e) { 
               url = "./work.html";
                $(location).attr('href',url);
                $('body').addClass('active');
            }, 1500);
       
        });
            
       
        }
    
    
});

