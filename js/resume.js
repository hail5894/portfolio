
$(function () {
    var index;
    $('.question').on('click',function(e){
        index= $(this).index();
        if(index==0){ $('.question').children('p').children('.question_a').fadeOut(500);
            $(this).children('p').children('.question_a').fadeIn(500);
        }else{
            $('.question').children('p').children('.question_a').fadeOut(500);
            $(this).children('p').children('.question_a').fadeIn(500);
        }
        
//       $(this).children('p').children('.question_a').fadeToggle(500);

    });
    //end
});