$(document).on('ncgReady', function (){

    nodecg.listenFor('showMeta', function(data){
        console.log(data);
        $('#meta_leftText').text(data.metaDivision);
        $('#meta_rightText').text(data.roundPrefix);
        $('#meta_left').animate({
            right: "0px"
        }, 600);
        $('#meta_right').animate({
            left: "0px"
        }, 600);

    });

    nodecg.listenFor('hideMeta', function(){
        $('#meta_left').animate({
            right: "-306px"
        }, 600);
        $('#meta_right').animate({
            left: "-128px"
        }, 600);
    });

    nodecg.listenFor('updateMeta', function(data){
        console.log(data);
    })

});