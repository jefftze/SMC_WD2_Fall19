$(document).ready(function(){
    $('input, label').focus(function(){
        if( $(this).val() == ""){
        /*console.log( $(this).attr('id') );*/
        $('main section.notificaton-area').append(' <p class="notification">Please fill ' + $(this).attr('id') + ' out!</p> ');
        }
    });

    $('input, label').blur(function(){
        $('p.notification').remove()
    })


    $('select#FX').change(function(){
        var currentSelection = $(this).val();
        console.log(currentSelection)

        if(currentSelection === 'show' ){
            $( '.box' ).show(1000);
        }

        if(currentSelection === 'hide' ){
            $( '.box' ).hide(1000);
        }

        if(currentSelection === 'fadeIn' ){
            $( '.box' ).fadeIn(1000);
        }

        if(currentSelection === 'fadeOut' ){
            $( '.box' ).fadeOut(1000);
        }

        if(currentSelection === 'slideDown' ){
            $( '.box' ).slideDown(1000);
        }

        if(currentSelection === 'slideUp' ){
            $( '.box' ).slideUp(1000);
        }
    })

});
