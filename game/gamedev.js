$( document ).ready(function() {

//Your jquery goes here
var score = 0;
$("#bob").click(function(){
  $("#bob").fadeOut;
  $( "#bob" ).delay( 400 ).fadeOut( 200 );

	});

$("#bill").click(function(){
  $("#bill").fadeOut;
  $( "#bill" ).delay( 400 ).fadeOut( 200 );

	});

    
    animateDiv();

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() ;
    var w = $(window).width() ;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
  //James change .a to .othercar
    $("#bob").animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
    
};

    animateDiv1();

function makeNewPosition1(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() ;
    var w = $(window).width() ;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv1(){
    var newq = makeNewPosition1();
  //James change .a to .othercar
    $("#bill").animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv1();        
    });
    
};

	



});