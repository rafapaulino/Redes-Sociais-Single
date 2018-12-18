(function( $ ) {
 
    $.openEmailModal = function( options ) {
        try {

            var defaults = {
                size: 'modal-sm', //modal-sm, modal-lg
                buttonText: 'Enviar',
                title: 'Envie para um amigo',
                label: 'Coloque o e-mail do seu amigo aqui:'
            }
            $.extend(defaults, options);

            //bootstrap modal template
            var $template = '<div class="modal fade" tabindex="-1" role="dialog" id="email-modal">\
                    <div class="modal-dialog ' + defaults.size + '" role="document">\
                        <div class="modal-content">\
                            <div class="modal-header">\
                                <h5 class="modal-title">' + defaults.title + '</h5>\
                                <button type="button" class="close close-email-modal" data-dismiss="modal" aria-label="Fechar">\
                                    <span aria-hidden="true">&times;</span>\
                                </button>\
                            </div>\
                            <div class="modal-body">\
                                <p><label for="open-email-modal">' + defaults.label + '</label></p>\
                                <input type="mail" id="open-email-modal" class="form-control" required>\
                            </div>\
                            <div class="modal-footer">\
                                <button type="button" class="btn btn-primary close-email-modal" data-dismiss="modal">' + defaults.buttonText + '</button>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
            
            var bodyModalAppend = function() {
                if ( $('#open-email-modal').length == 0 )
                $('body').append($template);
            };
             
            var removeMailTo = function() {
                setTimeout(function() {
                    $('#mailto').remove();
                }, 1000);
            };

            this.init = function() {
                //adiciona o html na tela
                bodyModalAppend();

                //chama o modal
                setTimeout(function() {
                    
                    var $modalObject = $('#email-modal');
                    var $inputObject = $('#open-email-modal');

                    $modalObject.modal({
                        show: false
                    }).on('hidden.bs.modal', function (e) {
                        var $email = $inputObject.val();
    
                        var $mailto = '<a id="mailto" href="mailto:' + $email + '?body=' + document.URL + '" class="mailto">Click</a>';
                        $($mailto).appendTo('body');

                        setTimeout(function() {
                            document.getElementById('mailto').click();
                            removeMailTo();
                        }, 500);

                    }).on('show.bs.modal', function (e) {
                        $inputObject.val('');
                    }).modal('show');

                }, 300);
            };

            return this.init();

        } catch(err) {
            console.log('Exception', err);
        }
    };
 
}( jQuery ));