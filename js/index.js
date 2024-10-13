// Número padrão do WhatsApp
const numeroPadrao = "+5517991168475";

function aplicarWhatsappLink(selector = '.whatsappLink') {
    const links = document.querySelectorAll(selector);
    
    if (links.length > 0) {
        links.forEach(link => {
            
            const numero = link.getAttribute('data-numero') || numeroPadrao;
            const mensagem = link.getAttribute('data-mensagem');

            if (numero && mensagem) {
                const encodedMessage = encodeURIComponent(mensagem);
                const whatsappLink = `https://wa.me/${numero}?text=${encodedMessage}`;
                
                
                link.href = whatsappLink;
                link.target = "_blank";  
                link.rel = "noopener noreferrer";  
            } else {
                console.error("Número ou mensagem não definidos nos atributos data-*.");
            }
        });
    } else {
        console.error(`Nenhum elemento encontrado com o seletor ${selector}`);
    }
}

aplicarWhatsappLink();


// EXIBIR E-MAIL DINAMICAMENTE
const emailLink = document.querySelector('#email1 a'); 

function aplicarEmailLink(selector = '.emailLink') {
    const links = document.querySelectorAll(selector);
    if (links.length > 0) {
        links.forEach(link => {
            const email = link.getAttribute('data-email') || "fparaboli@gmail.com"; // E-mail padrão
            const emailHref = `mailto:${email}`;
            link.href = emailHref;
            link.textContent = email;
            link.target = "_blank";  
        });
    } else {
        console.error(`Nenhum elemento encontrado com o seletor ${selector}`);
    }
}

aplicarEmailLink();

// GERENCIANDO TITLE E ALT
const brandName = "Canto Arte Mosaico | Mandalas, Vitrais e Arte em Vidro Exclusiva";
const images = document.querySelectorAll('img[data-brand]');

images.forEach(image => {
    
    image.setAttribute('alt', brandName);
    image.setAttribute('title', brandName);
});



// MENU MOBILE
    $(document).ready(function() {
    var mobileMenuToggle = $('.mobile-menu-toggle');
    var mobileMenu = $('.mobile-menu');
    var container = $('.container.full.row-menu');
    var fechaMenu = $('.mobile-menu-close');

    mobileMenuToggle.click(function() {
        container.css('marginRight', mobileMenu.css('right') === '0px' ? '0' : '300px');
        mobileMenu.css('right', mobileMenu.css('right') === '0px' ? '-300px' : '0');
    });

    function fechamenu() {
        if (mobileMenu.css('right') === '0px') {
            container.css('marginRight', '0');
            mobileMenu.css('right', '-300px');
        }
    }

    $(document).on('click', function(event) {
        var target = $(event.target);

        // Fecha o menu se o clique não estiver dentro do menu ou do botão de alternância
        if (!target.closest('.mobile-menu, .mobile-menu-toggle').length) {
            fechamenu();
        }
    });

    fechaMenu.click(fechamenu);

    mobileMenu.click(function(event) {
        event.stopPropagation();
    });
});


//EXIBIR TELEFONE/WHATSAPP
const telefone = "(17) 99116-8475";
const telefoneLink = document.querySelector('#telefone1 a'); // Seleciona a tag <a> dentro do <p>
telefoneLink.textContent = telefone; // Insere o número dentro do link