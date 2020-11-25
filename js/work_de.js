
$(function () { 
    //선언
   var index=0,move=0;
    
    //헤더 active (백그라운드 투명//믹스블랜드모드)
    $('header').addClass('active');
    $('.works_imgs').addClass('active');    //그림이미지 opacity :1로 처음에 보여라
    $('.works_imgs img').eq(0).addClass('active');  //처음에 대갈빡이미지 보이게 설정
       
    
    
    $('.work_de_1 a').on('mouseover',hover);    //a태그 mouseover할때 그림 튀어나옴
    
    //a태그 index 번호를 받아서 해당이미지 classactive 시켜주고 뺴주고
    function hover(){
        index = $(this).index();
        
         $('.works_imgs').removeClass('active');
        $('.works_imgs img').removeClass('active');
        
        setTimeout(function(){
         $('.works_imgs').addClass('active');
         $('.works_imgs img').eq(index).addClass('active');
        },200);
    }
    
    //a태그 클릭시 숨겨진 popup창 발동
//    $('.work_de_1 a').on('click',function(e){
//        e.preventDefault();
//        index= $(this).index();   //해당 index번호
//        
//     
//        $('.contact').hide();
//        //모든 img의 active를 뺴준다.
//        $('.works_imgs').removeClass('active');
//        $('.works_imgs img').removeClass('active');
//        //0.2초후에 해당 img active 실행( 1. 이미지 천천히 떠오르다가)
//        setTimeout(function(){
//         $('.works_imgs').addClass('active');
//         $('.works_imgs img').eq(index).addClass('active');
//        },200);
//        // 2. popup창 보이게 실행    
//        $('.popup').eq(index).fadeIn(2000);
//           
//        //3.PORTFOLIO라는 글자 사라짐
//        $('.hea_cen').fadeOut(500);
//        //4.버거메뉴 상단으로 이동
//        $('.menu-trigger').animate({
//               top:'50%',
//               color: '#f4f4f4'
//            
//            },100);
//        //5. 뒤로가기 화살표 생성
//        $('.back').show();
//  
//     
//    });
 
 
    //end
});















