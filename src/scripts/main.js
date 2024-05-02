// AOS.init();

// function configuraLembrete() {

//     if ('Notification' in window && Notification.permission === 'granted' ) {
//         var notification = new Notification('Lembrete', {
//             body: 'Você será lembrado no dia do evento.'
//         });
//     } else if ( 'Notification' in window && Notification.permission !== 'denied') {
//         Notification.requestPermission().then(function (permission){
//             if ( permission === 'granted') {
//                 var notification = new Notification('Lembrete', {
//                     body: 'Você será lembrado no dia do evento.'
//                 });
//             }
//         });
//     }


// const DataDoEvento = new Date("May 5, 2024 19:00:00");
// const timeStampDoEvento = DataDoEvento.getTime();

// const contaAsHoras = setInterval( function () {
//     const agora = new Date ();
//     const timeStampAtual = agora.getTime();

//     const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

//     const diaEMMs = 1000 * 60 * 60 * 24; // 1 dia em milissegundos
//     const horaEmMs = 1000 * 60 * 60; // 1 hora em ms
//     const minutoMS = 1000 * 60 // 1 MINUTO EM MS


//     const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEMMs);
//     const horasAteoEvento = Math.floor((distanciaAteOEvento % diaEMMs ) / horaEmMs);
//     const minutosAteoEvento = Math.floor((distanciaAteOEvento % diaEMMs) / minutoMS);
//     const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoMS) / 1000);

//     document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteoEvento}h ${minutosAteoEvento}m ${segundosAteOEvento}m`;


//     if ( distanciaAteOEvento < 0 ) {
//         clearInterval(contaAsHoras);
//         document.getElementById('contador').innerHTML = `Evento expirado`;
//         document.getElementById('contador').style.color = `#6b0d06`;
    
//         if ('Notification' in window && Notification.permission === 'granted') {
//             var notification = new Notification('Lembrete', {
//                 body: 'Hoje é o dia do RAP DO HALF'
//             });
//         } else if ('Notification' in window && Notification.permission !== 'denied') {
//             Notification.requestPermission().then(function (permission) {
//                 if (permission === 'granted') {
//                     var notification = new Notification('Lembrete', {
//                         body: 'Hoje é o dia do evento!'
//                     });
//                 }
//             });
//         }
//     }

// });
// }
// var button = document.getElementById('botao');

// button.addEventListener('click', function (){
//     configuraLembrete();
// })


AOS.init();

function iniciarContador() {
    const DataDoEvento = new Date("May 5, 2024 19:00:00");
    const timeStampDoEvento = DataDoEvento.getTime();

    const contaAsHoras = setInterval(function() {
        const agora = new Date();
        const timeStampAtual = agora.getTime();

        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

        const diaEMMs = 1000 * 60 * 60 * 24; // 1 dia em milissegundos
        const horaEmMs = 1000 * 60 * 60; // 1 hora em ms
        const minutoMS = 1000 * 60; // 1 MINUTO EM MS

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEMMs);
        const horasAteoEvento = Math.floor((distanciaAteOEvento % diaEMMs) / horaEmMs);
        const minutosAteoEvento = Math.floor((distanciaAteOEvento % diaEMMs) / minutoMS);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoMS) / 1000);

        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteoEvento}h ${minutosAteoEvento}m ${segundosAteOEvento}s`;

        if (distanciaAteOEvento < 0) {
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = `Evento expirado`;
            document.getElementById('contador').style.color = `#6b0d06`;

            if ('Notification' in window && Notification.permission === 'granted') {
                var notification = new Notification('Lembrete', {
                    body: 'Hoje é o dia do RAP DO HALF'
                });
            } else if ('Notification' in window && Notification.permission !== 'denied') {
                Notification.requestPermission().then(function(permission) {
                    if (permission === 'granted') {
                        var notification = new Notification('Lembrete', {
                            body: 'Hoje é o dia do evento!'
                        });
                    }
                });
            }
        }
    });
}

function configuraLembrete() {
    if ('Notification' in window && Notification.permission === 'granted') {
        var notification = new Notification('Lembrete', {
            body: 'Você será lembrado no dia do evento.'
        });
    } else if ('Notification' in window && Notification.permission !== 'denied') {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                var notification = new Notification('Lembrete', {
                    body: 'Você será lembrado no dia do evento.'
                });
            }
        });
    }

    iniciarContador(); // Iniciar o contador de tempo após configurar o lembrete
}

var button = document.getElementById('botao');

button.addEventListener('click', function(e) {
    alert('Você será lembrado no dia do evento do RAP DO HALF')
    e.preventDefault();
    configuraLembrete();
});

