$(document).ready(function() {


    $("#BotonGustos").click(function() {

        $("#Part4").show();

        var Texto = $('#Gustos').val()

        $("#TablaGustos").append(
            $('<tr>')
            .append(
                $('<td>')
                .append(
                    $('<input>').attr('type', 'text').attr('id', 'Gustos').disable

                )
            )
            .append(
                $('<td>')
                .append(
                    $('<input>').attr('type', 'text').attr('id', 'Porcentaje').disable
                )
            )
            .append(
                $('<td>')
                .append(
                    $('<a>').attr('id', 'Editar').attr('href', 'Habilitar()').text('Editar')
                )
            )



        );



        /*
                alert($(this).parent().find('.data').text());
                /*
                        $(function(){
                            $('#button').click(function(){
                              alert($(this).parent().find('.data').text());
                            });
                          });



                        $('#Gustos').value = $('#TextGustos').value;


                */
    });


});