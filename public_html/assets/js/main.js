/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
    var $window =$(window);
    
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this);
        $window.scroll(function(){
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            
            var coords = '50%'+ yPos +'px';
            
            $bgobj.css({backgroundPosition:coords
        });
        
    });
});
});
