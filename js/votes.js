let dd = 0;
let tar = 0;
let plus = 0;

$('#dd').change(function () {
    if($('#dd').prop('checked')){
        $('#tar').prop("checked", false);
        $('#plus').prop("checked", false);

        $('#showvotes').val(dd);
    }
});

$('#tar').change(function () {
    if($('#tar').prop('checked')){
        $('#dd').prop("checked", false);
        $('#plus').prop("checked", false);

        $('#showvotes').val(tar);
    }
});

$('#plus').change(function () {
    if($('#plus').prop('checked')){
        $('#tar').prop("checked", false);
        $('#dd').prop("checked", false);

        $('#showvotes').val(plus);
    }
});

$("#sendvote").on( "click", function(e) {
    
    e.preventDefault();
    
    if($('#dd').prop('checked')){
        dd++;
        $('#showvotes').val(dd);
    }
    
    if($('#tar').prop('checked')){
        tar++;
        $('#showvotes').val(tar);
    }
    
    if($('#plus').prop('checked')){
        
        plus++;
        $('#showvotes').val(plus);
    }
    console.log(dd+''+tar+''+plus);

    var totalvotes = dd+tar+plus;
    var tmpvoteA = (dd/totalvotes)*100;
    var ddporcent = Number(tmpvoteA.toFixed(2));
    var tmpvoteB = (tar/totalvotes)*100;
    var tarporcent = Number(tmpvoteB.toFixed(2));
    var tmpvoteC = (plus/totalvotes)*100;
    var plusporcent = Number(tmpvoteC.toFixed(2));

    $('#ddporcent').css( "width", ddporcent+"%" );
    $('#tarporcent').css( "width", tarporcent+"%" );
    $('#plusporcent').css( "width", plusporcent+"%" );

    $('#showDD, #showTAR, #showPLUS').empty();

    $('#showDD').text( ddporcent+"%" );
    $('#showTAR').text( tarporcent+"%" );
    $('#showPLUS').text( plusporcent+"%" );
});
