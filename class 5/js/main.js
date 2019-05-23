$(document).ready(function(){
        //Basic
    //$('h1').hide(1000);
    //$('h1').show(1000);
    //$('h1').dblclick(function(){
      //  alert('This is Heading');
    //});
    
    //  Selector
    //$('li:even').addClass('even');
    //$('li:odd').addClass('odd');
    
    //  Animate
    /*$('#b1').click(function(){
        $(this).val('Hide the div');
        $('.one').show(1000);
    });
    $('#b1').dblclick(function(){
        $(this).val('Show the div');
        $('.one').hide(1000);
    });*/
    
    /*$('#b1').hover(function(){
        $(this).val('Hide the div');
        $('.one').stop().fadeToggle(5000);
    });*/
        // Color Plate
        
      /*color =$('#colors').val();
      $('body').css('background',color);
      $('#colors').change(function(){
          color =$('#colors').val();
          $('body').css('background',color);
      });*/
    
        // Slide Animated Menu
      
      /*$('a').mouseover(function(){
          $(this).animate({'width': '400px'},100);
      });
      $('a').mouseout(function(){
          $(this).animate({'width': '100px'},100);
      });*/
    
        // Drop Down menu
        $('ul li').hover(function(){
            $(this).find('ul li').slideToggle(100);
        });
      
      
      
      
      
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
});