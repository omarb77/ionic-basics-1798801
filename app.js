const tipoInput = document.querySelector('#input-gast');
const montoInput = document.querySelector('#input-mont');
const guardarBtn = document.querySelector('#bton');

const gastosList = document.querySelector('#list-gastos');
const totalOutput = document.querySelector('#output-total');

let total = 0;

function clear(){
    tipoInput.value = '';
    montoInput.value = '';
}


function eventGuardar(){
    //codigo
}

guardarBtn.addEventListener('click',()=>{
    const tipo = tipoInput.value;
    const monto = montoInput.value;
    
    
    if(tipo.trim().length > 0 && monto.trim().length >0 && monto > 0){//VALORES VALIDOS
        console.log(tipo, monto);

        const newItem = document.createElement('ion-item');
        newItem.textContent = tipo + ': $' + monto;
        gastosList.appendChild(newItem);

        total += monto;
        totalOutput.textContent = total;
    }
        else{
            //console.error('Valores invalidos');
            alertController.create({
                message: 'Llene los campos correctamente',
                header: 'Valores invalidos',
                buttons: ['Ok']
            }).then(alertElement => {
                alertElement.present();
            });
        
        
        }

    

});