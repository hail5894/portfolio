$(function () {

    $('header').load('inc_head_foot.html .head', me);
  //  $('.contact').load('inc_head_foot.html .contact_1');
    $('.contact_popup').load('inc_head_foot.html .top,.right',x);
    $('.nav').load('inc_head_foot.html .navUl,.bottom',nav);

    //콜백함수쓰기
    function me(){
 
        $('.menu-trigger').on('click', function () {
            //메뉴부분
            $('header').addClass('active');
             $('.menu-trigger span').removeClass('active');
            $('.hea_cen').removeClass('active');
            $('.head_1').removeClass('active'); 
             $('.hea_bot').removeClass('active');
            
            $('.menu-trigger').toggleClass('active');
            $('.nav').toggleClass('active');
            $('.contact a').toggleClass('active');


            if (window.innerWidth < 991){
                $('header').toggleClass('active');
                $('.head_1').toggleClass('active');
                $('.hea_bot').toggleClass('active');
            }


        });
    } 
    
    //화면전환    
function nav(){
    var index=0; 
    var fixed = localStorage.fix;
    
     if($('.m1_clone').length==1){
       localStorage.fix=0;
    }
    
    
    if(fixed == 0){
        $('.navLi').eq(0).addClass('active');
    }else{
          $('.navLi').eq(fixed).addClass('active');
    }
      
   
    $('.navLi').on('click',function(e){
        e.preventDefault();
        index=$(this).index();
        //1 페이지 값남기는거 
        localStorage.fix = $(this).attr('data-type');   
        pageActive();
    });
    
    
    //메인
    $('.main_2_1 .more a').on('click',function(e){
          e.preventDefault();
         localStorage.fix=1;
    });
      
    //2페이지전환 종이
    function pageActive(){
        $('.pageTri').show();
          $('.pageTri .pageTri_1').animate({
                width: '70%',
                height: '70%'
            },500, function () {
                    $('.pageTri .pageTri_1').animate({
                       width: '0%',
                       height: '0%'
                    }, 500)}); 
        
        
                 $('.pageTri').animate({
                 right:'-20%',
                bottom:'-30%'
            },500, function () {
                     $('.pageTri').animate({
                       right: '0%',
                       bottom: '0%'
                    }, 500)}); 
        
        var url, h =  ['index.html', 'work.html', 'about.html'];
        var hIndex= index;
         setTimeout(function(e) { 
            url=h[hIndex];
            $(location).attr('href',url);
            }, 1000);
    }
    

     //3.마우스 움직이기 active
    $('.navLi').on('mouseover',function(){
         $('.navLi').removeClass('active');
           $(this).addClass('active'); 
       
        });
         
  

}


    
    
function x(){
     //contact 
    $('.contact').on('click',function(){
        $('.contact_popup').fadeIn(300);

    });
    
    $('.x').on('click',function(){
       $('.contact_popup').css({
            display:'none',
        transition: '.5s ease-in-out'
       });

        
        
    }); 
}
 
   
   //end
});



$(function () {
    //main화면 완전히 100% 커지면 contact 글씨 검정색
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



 




