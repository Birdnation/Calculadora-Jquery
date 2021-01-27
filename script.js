let numeros = $('.num');
let operaciones = $('.noNum');
let primerNumero = $('#primerNum');
let segundoNumero = $('#segundoNum');
let operacion = $('#operacion');
let igual = $('#igual');
let resultado = $('#resultado');
let aux1;
let aux2;


 //iterador para operaciones
for (const iterator of operaciones) {
    $(iterator).on('click', ()=>{
        if(resultado.text() != ""){
            limpiar();
        }

        let op = $(iterator).text();
        operacion.text(op);

        if (op == '√') {
            primerNumero.text('');
        }
    })
}

//iterador para numeros
for (const iterator of numeros) {
    $(iterator).on('click', ()=>{

        if(resultado.text() != ""){
            limpiar();
        }

        //agregar el primer numero
        if (operacion.text() == '') {
            let numero = $(iterator).text();

            if (numero == '±') {

                if (parseFloat(primerNumero.text()) > 0)  {
                    primerNumero.text('-' + primerNumero.html())
                    aux1 = primerNumero.html()
                } else if(parseFloat(primerNumero.text()) < 0 ){
                    primerNumero.text(primerNumero.html().slice(1))
                    aux1 = primerNumero.html()
                }

            }else if (numero != '.' || primerNumero.text().indexOf('.') == -1) {
                primerNumero.text(primerNumero.html() + numero);
                aux1 = primerNumero.html()
            }

        //agregar el segundo numero    
        } else {
            let numero = $(iterator).text();

            if (numero == '±') {

                if (parseFloat(segundoNumero.text()) > 0)  {
                    segundoNumero.text('-' + segundoNumero.html())
                    aux2 = segundoNumero.html()
                } else if(parseFloat(segundoNumero.text()) < 0 ){
                    segundoNumero.text(segundoNumero.html().slice(1))
                    aux2 = segundoNumero.html()
                }

            } else if (numero != '.' || segundoNumero.text().indexOf('.') == -1) {
                segundoNumero.text(segundoNumero.html() + numero);
                aux2 = segundoNumero.html()
            }
        }
    })
}


$('#c').on('click', limpiar = ()=>{
    primerNumero.text('');
    segundoNumero.text('');
    operacion.text('');
    igual.text('');
    resultado.text('');
})

$('#equal').on('click', ()=>{
    igual.text('='); 
    switch (operacion.text()) {
        case '+':
            resultado.text(parseFloat(aux1) + parseFloat(aux2))
            break;
        case '-':
            resultado.text(parseFloat(aux1) - parseFloat(aux2))
            break;
        case '*':
            resultado.text(parseFloat(aux1) * parseFloat(aux2))
            break;
        case '÷':
            resultado.text(parseFloat(aux1) / parseFloat(aux2))
            if (resultado.text() == 'Infinity') {
                resultado.text('¡ERROR! Cálculo');
            }
            break;
        case '^':
            resultado.text(parseFloat(aux1) ** parseFloat(aux2))
            break;

        case '√':
            resultado.text(Math.sqrt(parseInt(aux2)))
            if (resultado.text() == 'NaN') {
                resultado.text('¡ERROR! Cálculo');
            }
            break;
        default:
            igual.text('');
            resultado.text('');
            break;
    }
})