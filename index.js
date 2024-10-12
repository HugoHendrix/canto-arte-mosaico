// EXIBIR DADOS DINAMICAMENTE
const telefone = "(17) 99116-8475";
const telefoneLink = document.querySelector('#telefone1 a'); 
telefoneLink.textContent = telefone; 

// GERANDO LINK WHATSAPP DINÂMICO
const numeroPadrao = "+5517991168475";
function aplicarWhatsappLink(selector = '.whatsappLink') {
    const links = document.querySelectorAll(selector);
    if (links.length > 0) {
        links.forEach(link => {
            const numero = link.getAttribute('data-numero') || numeroPadrao;
            const mensagem = link.getAttribute('data-mensagem') || "Olá, gostaria de mais informações."; // Mensagem padrão

            const encodedMessage = encodeURIComponent(mensagem);
            const whatsappLink = `https://wa.me/${numero}?text=${encodedMessage}`;

            link.href = whatsappLink;  // Define o link do WhatsApp
            link.target = "_blank";  
            link.rel = "noopener noreferrer";  
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
const brand = document.getElementById('brand');
const brandName = brand.getAttribute('data-brand');
brand.setAttribute('alt', brandName);
brand.setAttribute('title', brandName);