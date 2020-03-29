(function(){

  var actualizarHora = function(){
      var fecha = new Date(),
          horas = fecha.getHours(),
          minutos = fecha.getMinutes(),
          segundos = fecha.getSeconds(),
          // ampm,
          diaSemana = fecha.getDay(),
          dia = fecha.getDate(),
          mes = fecha.getMonth(),
          year = fecha.getFullYear();

      var pHoras = document.getElementById("horas"),
          pMinutos = document.getElementById("minutos"),
          pSegundos = document.getElementById("segundos"),
          pAMPM = document.getElementById("ampm"),
          pDiaSemana = document.getElementById("diaSemana"),
          pDia = document.getElementById("dia"),
          pMes = document.getElementById("mes"),
          pYear = document.getElementById("year");


      var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
          pDiaSemana.textContent = semana[diaSemana];

          var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
              pMes.textContent = meses[mes];

          pDia.textContent = dia;

          pYear.textContent = year;

          pHoras.textContent = horas;

          pMinutos.textContent = minutos;

          pSegundos.textContent = segundos;

          // pAMPM.textContent = ampm;






  };

  actualizarHora()

}());