var divisionLabel = $('#meta_divisionLabel');
var prefixLabel = $('#meta_roundPrefixLabel');
var roundLabel = $('#meta_roundLabel');
var showButton = $('#meta_show');
var hideButton = $('#meta_hide');
var loopButton = $('#meta_loop');
var updateButton = $('#meta_update');

showButton.click(function(){
   nodecg.sendMessage('showMeta', {
        metaDivision: divisionLabel.val(),
        roundPrefix: prefixLabel.val(),
        roundNumber: 3
   });
});

hideButton.click(function(){
   nodecg.sendMessage('hideMeta');
});