function functionDados() {
    var img = document.querySelector('img');
    var lados = document.querySelector('select').value;
    var numero = Math.floor(Math.random() * lados) + 1;
    var tagNumero = document.querySelector('strong');
    if (lados == " ") {
        alert("Choose numbers of sides");
    } else {
        img.classList.add('animated', 'flip');
        tagNumero.classList.add('animated', 'flip');
        setTimeout(function () {
            img.src = "https://images2.imgbox.com/03/ff/WsAydIX4_o.png";
            tagNumero.innerHTML = numero;
        }, 700);
    };
    setTimeout(function () {
        img.classList.remove('animated', 'flip');
        tagNumero.classList.remove('animated', 'flip');
    }, 900);
};