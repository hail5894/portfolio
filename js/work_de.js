
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
    
    //a태그 클릭시 숨겨진 popup창 발tod
     $('.work_de_1 a').on('click',function(e){
        e.preventDefault();
        index=$(this).index();  //팝업 여러개중 한개 index번호 받기
        
        $('.popup').eq(index).show();  //해당 popup창 나타나기
        $('.contact').hide();   //contact 숨기기
     
        $('.hea_cen').hide(); //글씨 숨기기
        //버거메뉴 중앙으로 이동
        $('.menu-trigger').animate({
               top:'50%',
               color: '#f4f4f4'
            },100);
        $('.back').show();  //뒤로가기 버튼 나오기
         
         
        $('header').addClass('active');
        $('.menu-trigger span').removeClass('active');
        $('.hea_cen').removeClass('active');
        $('.head_1').removeClass('active'); 
        $('.hea_bot').removeClass('active');
       
    });
    //end
});















