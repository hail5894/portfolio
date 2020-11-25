
$(function () {
    //선언
    var index=0;
    
     //헤더 active (백그라운드 투명//믹스블랜드모드)
     $('header').addClass('active');
 
    $('.question').on('click',function(e){
        index= $(this).index(); //해당 index번호 담기
        if(index==0){ 
            //index 0번일떄 1번째 글씨 사라지고,0번쨰 설명문 fadeIn
            $('.question').children('p').children('.question_a').fadeOut(500);
            $(this).children('p').children('.question_a').fadeIn(500);
        }else{
            //index 1번일떄 0번째 글씨 사라지고,1번째 설명문 fadeIn
            $('.question').children('p').children('.question_a').fadeOut(500);
            $(this).children('p').children('.question_a').fadeIn(500);
        }


    });
    //end
});