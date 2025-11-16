$(document).ready(function () {
    // ========== CARROSSEL ==========
    $('.carrossel-veiculos').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // ========== MÁSCARA DE TELEFONE ==========
    $('#telefone').mask('(00) 00000-0000');

    // ========== VALIDAÇÃO DO FORMULÁRIO ==========
    $('#form-contato').on('submit', function (e) {
        e.preventDefault(); // impede envio real só pra demonstrar

        let nome = $('#nome');
        let email = $('#email');
        let telefone = $('#telefone');
        let mensagem = $('#mensagem');

        let valido = true;

        // limpa mensagens anteriores
        $('.erro').text('');

        // Nome
        if ($.trim(nome.val()) === '') {
            $('#erro-nome').text('Por favor, preencha o nome.');
            valido = false;
        }

        // E-mail
        let emailValor = $.trim(email.val());
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValor === '') {
            $('#erro-email').text('Por favor, preencha o e-mail.');
            valido = false;
        } else if (!emailRegex.test(emailValor)) {
            $('#erro-email').text('Informe um e-mail válido.');
            valido = false;
        }

        // Telefone
        if ($.trim(telefone.val()) === '') {
            $('#erro-telefone').text('Por favor, preencha o telefone.');
            valido = false;
        } else if (telefone.val().length < 15) {
            $('#erro-telefone').text('Telefone incompleto.');
            valido = false;
        }

        // Mensagem (opcional, mas vamos validar também)
        if ($.trim(mensagem.val()) === '') {
            $('#erro-mensagem').text('Digite uma mensagem.');
            valido = false;
        }

        if (valido) {
            alert('Formulário enviado com sucesso! (validação + máscara funcionando)');
            // aqui você poderia enviar de verdade, ex:
            // this.submit();
        }
    });
});
