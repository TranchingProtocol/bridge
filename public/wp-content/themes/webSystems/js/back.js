function ThreeDLoad(){
    if(window.outerWidth < 768){
        var matches = document.querySelectorAll(".js-orbit-demo");
        matches.forEach(element => {
            element.removeAttribute('camera-controls')
        })
    }
}

$('form').on('submit', function (e) {
    e.preventDefault();

    var form = $(this);
    var button = $(form).find('button[type="submit"]');
    var data = $(form).serialize();
    var formDataLayer = $(form).find('[name="data_layer"]').val();
    var formfbq = $(form).find('[name="fbq"]').val();

    if (data) {
        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            data: 'action=formsSend&' + data,
            type: 'POST',
            beforeSend: function () {
                $(button).html($(button).data('loading')).prop('disable');
                $(form).find('div.help-block').remove();
                $(form).find('.has-error').removeClass('has-error');
            },
            success: function (data) {
                if (data['error']) {
                    if (data['error']['fields']) {
                        for (var i in data['error']['fields']) {
                            if (i === 'crm') {
                                console.log('crm');
                                $(form).find('#' + i + '-1').closest('.checkbox-grid').addClass('error').after('<span class="error">' + data['error']['fields'][i] + '</span>');
                            } else {
                                console.log(data['error']['fields'][i]);
                                $(form).find('[name="' + i + '"]').after('<div class="help-block">' + data['error']['fields'][i] + '</div>').parent('.form-group').addClass('has-error');
                            }
                        }
                    } else {
                        $(form).find('.form-body').first().prepend('<span class="error">' + data['error'] + '</span>');
                    }
                } else {
                    form[0].reset();
                    $(form).find('.select__value').text('');
                  //  $('[for="vacancy-cv"]').text($('[for="vacancy-cv"]').data('value'));
                    $(form).find('.filled').removeClass('filled');
                    if (data['success']) {
                        $.fancybox.open({src: '#modal-success'});
                    }

                    if (formDataLayer) {
                        dataLayer.push({'event': formDataLayer});
                    }

                    if (formfbq) {
                   //     fbq('track', formfbq);
                    }
                }
                $(button).html($(button).data('send')).removeProp('disable');
            }
        });
    }
});
$(document).ready(function () {
    ThreeDLoad();

    $('#js-load-more-posts').click(function (e) {
        e.preventDefault();
        $(this).html($(this).data('load'));
        let data = {
            'template': $(this).data('template'),
            'action': 'loadMorePosts',
            'query': true_posts,
            'page': current_page
        };
        $.ajax({
            url: ajaxurl, // обработчик
            data: data, // данные
            type: 'POST', // тип запроса
            success: function (data) {
                if (data) {
                    $('#js-load-more-posts').html($('#js-load-more-posts').data('comp'));
                    $('#js-load-more-posts').parents('.container').find('.js-ajax-load').append(data); // вставляем новые посты
                    setTimeout( function() {initAos();}, 100);
                    current_page++; // увеличиваем номер страницы на единицу
                    if (current_page == max_pages) {
                        $("#js-load-more-posts").remove(); // если последняя страница, удаляем кнопку
                    }
                } else {
                    $('#js-load-more-posts').remove(); // если мы дошли до последней страницы постов, скроем кнопку
                }
            }
        });
    });

    // $('form').on('submit', function (e) {
    //     e.preventDefault();
    //
    //     var form = $(this);
    //     var button = $(form).find('button[type="submit"]');
    //     var data = $(form).serialize();
    //     var formDataLayer = $(form).find('[name="data_layer"]').val();
    //     var formfbq = $(form).find('[name="fbq"]').val();
    //
    //     if (data) {
    //         $.ajax({
    //             url: '/wp-admin/admin-ajax.php',
    //             data: 'action=formsSend&' + data,
    //             tymodal__descpe: 'POST',
    //             beforeSend: function () {
    //                 $(button).html($(button).data('loading')).prop('disable');
    //                 $(form).find('span.error').remove();
    //                 $(form).find('.error').removeClass('error');
    //             },
    //             success: function (data) {
    //                 if (data['error']) {
    //                     if (data['error']['fields']) {
    //                         for (var i in data['error']['fields']) {
    //                             if(i === 'crm'){
    //                                 $(form).find('#' + i + '-1').closest('.checkbox-grid').addClass('error').after('<span class="error">' + data['error']['fields'][i] + '</span>');
    //                             } else {
    //                                 $(form).find('[name="' + i + '"]').addClass('error').after('<span class="error">' + data['error']['fields'][i] + '</span>');
    //                             }
    //                         }
    //                     } else {
    //                         $(form).find('.input-wrap').first().prepend('<span class="error">' + data['error'] + '</span>');
    //                     }
    //                 } else {
    //                     form[0].reset();
    //                     $(form).find('.select__value').text('');
    //                     $(form).find('.filled').removeClass('filled');
    //                     if (data['success']) {
    //                         showAlertPopup(data['success'], data['success_title']);
    //                     }
    //
    //                     if (formDataLayer) {
    //                         dataLayer.push({'event': formDataLayer});
    //                     }
    //
    //                     if (formfbq) {
    //                         fbq('track', formfbq);
    //                     }
    //
    //                 }
    //
    //                 $(button).html($(button).data('send')).removeProp('disable');
    //
    //             }
    //         });
    //     }
    // });




    var files; // переменная. будет содержать данные файлов
    $('input[type=file]').on('change', function () {
        files = this.files;
      //  event.stopPropagation(); // остановка всех текущих JS событий
        event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега
        // ничего не делаем если files пустой
        if (typeof files == 'undefined') {
            return;
        }
        // создадим объект данных формы
        var data = new FormData();
        $.each(files, function (key, value) {
            data.append(key, value);
        });
        // добавим переменную для идентификации запроса
        data.append('my_file_upload', 1);
        data.append('action', 'formUploadFile');

        // AJAX запрос
        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            type: 'POST', // важно!
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (respond, status, jqXHR) {
                if (respond['error']) {
                   $('input[name="file_name"]').val(respond['error']);
              //     $('[for="vacancy-cv"]').html(respond['error']);
                   console.log('ОШИБКА: ' + respond['error']);
                } else {
                 $('input[name="file_name"]').val(respond['name']);
                 // $('[for="vacancy-cv"]').html(respond['name_show']);
                }
            },
            error: function (jqXHR, status, errorThrown) {
                $('[for="vacancy-cv"]').html(respond['error']);
           //     $("#file-name").val('Upload Error');
                //console.log('ОШИБКА AJAX запроса: ' + status, jqXHR);
            }
        });
    });
});


window.dataLayer = window.dataLayer || [];
function showAlertPopup(message, title) {
    $.fancybox.close();
    var titles = '';
    if (title != undefined) {
        titles = title;
    }
    $.fancybox.open('<div class="modal modal-thanks" style="display: inline-block;color: #000;" id="thanks"><div class="modal__title">' + titles + '</div><div class="modal__desc">' + message + '</div></div>');
}
