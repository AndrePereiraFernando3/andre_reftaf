// Implemente aqui as funções

function abdominais(abs){
    
        return (abs >= 41)
    
}

function swim (swimDistance, swimTime, diveTime){
    
        return ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30)
    
}

function heigthGender ( gender, heigth){
    if (gender == "male"){
        return heigth >= 1.7
    }
    else{
        return heigth >= 1.60
    }
}

function barTest (gender,barReps,barSeconds){
    if (gender == "male"){
        return (barReps >= 6 || barSeconds >= 15)
    } else {
        return (barReps >= 5 || barSeconds >= 12)
    } 
}

function runTest (gender, runDistance, runTime){
    if (gender == "male"){
        return (runDistance >= 3000 && runTime <= 720) || ( runDistance >= 5000 && runTime <= 1200)
    } else{
        return (runDistance >= 4000 && runTime <= 900) || ( runDistance >= 6000 && runTime <= 1320)
    } 
}



function areCandidateResultsValid(gender, heigth, barReps, barSec, abs, runDistance, runTime, swimDistance, swimTime, diveTime ) {

    
    let absTestResult = abdominais(abs)
    let swimTestResult = swim(swimDistance, swimTime, diveTime)
    let heightGenderResult = heigthGender(gender, heigth)
    let barTestResult = barTest(gender,barReps,barSec)
    let runTestResult = runTest(gender, runDistance ,runTime)


    if( absTestResult && swimTestResult && heightGenderResult && barTestResult && runTestResult){

       return showMessage(true)

        
    }return showMessage(false)
    
}


// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console

function showMessage(message){
    console.log(message.toString().toUpperCase())
}

