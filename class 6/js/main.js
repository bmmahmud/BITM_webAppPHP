$(document).ready(function(){
  /* $('#pass').keyup(function(){
       length =$('#pass').val().length;
       
       if(length ==0){
           $('#checker').removeClass('weak');
           $('#checker').removeClass('good');
           $('#checker').removeClass('strong');
           $('#checker').text('');
       }
       else if(length <=4){
           $('#checker').addClass('weak');
           $('#checker').removeClass('good');
           $('#checker').removeClass('strong');
           $('#checker').text('Weak');
       }
       else if(length <=8){
           $('#checker').addClass('good');
           $('#checker').removeClass('weak');
           $('#checker').removeClass('strong');
           $('#checker').text('Good');
       }
       else if(length <=12){
           $('#checker').addClass('strong');
           $('#checker').removeClass('good');
           $('#checker').removeClass('weak');
           $('#checker').text('Strong');
       }
   });*/
    $('#play').click(function(){
        $('#slider').cycle('resume');
    });
    $('#pause').click(function(){
        $('#slider').cycle('pause');
    });
    $('#slider').cycle({
        fx: 'all',
        speed: 1000,
        timeout: 2000,
        next: '#next',
        prev: '#prev',
        pager: '#pager'
    });
});