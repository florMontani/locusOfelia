function mostrar(){
    document.getElementById('obj1').style.display = 'block';
    document.getElementById('obj1').style.marginTop = '1em';
    document.getElementById('boton3').style.display = 'block';
    document.getElementById('boton3').style.textDecoration= 'underline';
    document.getElementById('boton3').style.fontWeight= 'bold';
    }
function ocultar(){
    document.getElementById('obj1').style.display = 'none';
    document.getElementById('boton3').style.display = 'none';
    }

    window.addEventListener("load", function loadImagine() {
        new Glider(document.querySelector(".lista"),
        {
            slidesToShow: 2,
            slidesToScroll: 4,
            
            dots: '.indicador',
            arrows: {
            prev: '.carro-anterior',
            next: '.carro-siguiente'
            }
        });
    });
    

    window.addEventListener("load", function loadImagine1() {
        new Glider(document.querySelector(".lista2"),
        {
            slidesToShow: 2,
            slidesToScroll: 4,
            
            dots: '.indicadores',
            arrows: {
            prev: '#ant',
            next: '#sig'
            }
        });
    });
    
    
    window.addEventListener("load", function loadImagine2() {
        new Glider(document.querySelector(".lista3"),
        {
            slidesToShow: 2,
            slidesToScroll: 4,
            
            dots: '.ind',
            arrows: {
            prev: '#anterior',
            next: '#siguiente'
            }
        });
    });

    window.addEventListener("load", function loadImagine3() {
        new Glider(document.querySelector(".lista4"),
        {
            slidesToShow: 2,
            slidesToScroll: 4,
            
            dots: '.cont',
            arrows: {
            prev: '#last',
            next: '#next'
            }
        });
    });

    window.addEventListener("load", function loadImagine4() {
        new Glider(document.querySelector(".lista5"),
        {
            slidesToShow: 2,
            slidesToScroll: 4,
            
            dots: '.contenido',
            arrows: {
            prev: '#dos',
            next: '#uno'
            }
        });
    });