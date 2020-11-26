$(function () {
    $('body').addClass('active');  
    $('header').load('inc_head_foot.html .head', me);
  //  $('.contact').load('inc_head_foot.html .contact_1');
    $('.contact_popup').load('inc_head_foot.html .top,.right',x);
    $('.nav').load('inc_head_foot.html .navUl,.bottom',nav);
    //콜백함수쓰기
    function me(){
        //버거메뉴 클릭시
        $('.menu-trigger').on('click', function () {
            //메뉴부분(왼쪽부분 css -active로 조정)
            $('header').addClass('active');
            $('.menu-trigger span').removeClass('active');
            $('.hea_cen').removeClass('active');
            $('.head_1').removeClass('active'); 
             $('.hea_bot').removeClass('active');
       
        
            //nav열렸다 닫혔다
            $('.menu-trigger').toggleClass('active');
            $('.nav').toggleClass('active');
            $('.contact a').toggleClass('active');  //nav 열리는 동시 글씨색상 변경
              
            
        //work-page 일때 header 색상 조정
        if(localStorage.fix=1){
            if( $('.menu-trigger span').eq(2).css('opacity')==0){
                  $('header').css({
                     transition:'.5s'
                });
            setTimeout(function(){
                $('.menu-trigger span').addClass('active');
                $('.hea_cen').addClass('active');
                $('.head_1').addClass('active'); 
                $('.hea_bot').addClass('active');  
                $('header').removeClass('active');
            },400);
            }
        }
        });
    } 
       
   
    //화면전환    
function nav(){
    var index=0 ,fixed = localStorage.fix;  //선언
  
    //localStorage 처음에 무조건 0으로 잡히게 설정
     if($('.m1_clone').length==1){
       localStorage.fix=0;
    }
 
    //localStorage 값에 따라 nav 메뉴에 색상으로 어디 표지에 있는지 가리킴
    if(fixed == 0){
        $('.navLi').eq(0).addClass('active');
    }else{
          $('.navLi').eq(fixed).addClass('active');
    }
      
   //navLi로 클릭해서 해당메뉴로 넘어가면 localStorage에 nav에 있는 data-type값을 받아옴 
    $('.navLi').on('click',function(e){
        e.preventDefault();
        index=$(this).index();  //해당 index번호 담김
        //1 페이지 값남기는거 
        localStorage.fix = $(this).attr('data-type');   
        pageActive();   //그리고 해당 페이지에 넘어가게 설정
    });
    
    
    //1124에 있는 more을 클릭하면 work로 넘어가면서 localStorage값 1로 남김
    $('.main_2_1 .more a').on('click',function(e){
          e.preventDefault();
          localStorage.fix=1;
    });
    
   
       
    
    //nav에 페이지 전환되면서 해당 페이지로 넘어가는 함수
    function pageActive(){
        $('.pageTri').show();   //넘어가는 종이 보여줌
        setTimeout(function(){
            $('.pageTri').addClass('active');   //pageTri 종이넘어가는 페이지전환 active실행
        },10);
        var url, h =  ['index.html', 'work.html', 'about.html'];
        //h에 nav html받아옴
        var hIndex= index; //hIndex는 위에 받아온 index번호와같다
         setTimeout(function(e) { 
             $('body').addClass('active');  //투명 0에서 1로 바뀜
             url=h[hIndex];
             $(location).attr('href',url);
             //해당 index번호에 따른 페이지 넘김
            },200);
        }
    

     //3.마우스 움직이기 active
    $('.navLi').on('mouseover',function(){
         $('.navLi').removeClass('active');
           $(this).addClass('active'); 
        //nav마우스 위에 댈때마다 해당 nav 옆으로 밀어짐(마우스떼면 원래 위치로 제자리)
        });
    

}


    
    
function x(){
     //contact 
    if($(window).width()>991){
    $('.contact').on('click',function(e){
        e.preventDefault();
        $('.contact_popup').fadeIn(300);
        //contact 클릭하면 상세내용 나옴
    });
    
    $('.x').on('click',function(){
       $('.contact_popup').css({
            display:'none',
        transition: '.5s ease-in-out'
       });
        //x클릭하면 contact_popup 상세내용 사라짐
    });
    }

}
 
   //end
});



$(function () {
    //main화면 완전히 100% 커지면 contact 글씨 검정색,화면 흰색,헤더 글씨색상에 어우러지게 변경
    if($('.main_1_1').css('transform') == 'matrix(1, 0, 0, 1, 0, 969)'){
        $('.contact_1').css({
            'color':'#1a1a1a'
        });    
        $('main').css({
            'background':'#f4f4f4'
        });  

        $('header').css({
            'background': 'none transparent',
            'mix-blend-mode': 'difference'
        });
        
    }

    //end
});



 




