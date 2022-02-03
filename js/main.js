const actualizarHora = ()=>{  
    const fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundo = fecha.getSeconds();
    let ampm;

    let pHoras = document.getElementById("horas")
    let pMinutos = document.getElementById("minutos")
    let pSegundos = document.getElementById("segundos")
    let pAMPM = document.getElementById("ampm")

    if(hora>=12){
        hora -= 12;
        ampm = 'PM';
    }else{
        ampm='AM';
    }
    if(hora == 0) hora=12;
    if(hora<10) hora = '0' + hora;
    if(minuto<10) minuto = "0" + minuto;
    if(segundo<10) segundo = "0" + segundo;
    
    pHoras.textContent = hora;
    pMinutos.textContent=minuto;
    pSegundos.textContent=segundo;
    pAMPM.textContent = ampm;
}
actualizarHora();
setInterval(actualizarHora,1000);