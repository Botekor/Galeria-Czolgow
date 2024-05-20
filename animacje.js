$(document).ready(function(){

    $('.przycisk').click(function(){

        $(this).addClass('aktywny').siblings().removeClass('aktywny');

        var filter = $(this).attr('data-filter')

        if(filter == 'Wszystko'){
            $('.obraz').show(400);
        }else{
            $('.obraz').not('.'+filter).hide(200);
            $('.obraz').filter('.'+filter).show(400);
        }

    });

    $('.galeria').magnificPopup({

        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });

});
