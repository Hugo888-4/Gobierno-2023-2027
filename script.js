const days = document.getElementById("days"),
      hours = document.getElementById("hours"),
      min = document.getElementById("min"),
      sec = document.getElementById("sec");


      const countdownDate = new Date("11 20, 2023 16:48:00").getTime();

      setInterval(() => {
          let now = new Date().getTime()
      
          let tiempores = countdownDate - now;
          
          //Conversiones
          
          let dias = Math.floor(tiempores/(86400000)),
              horas = Math.floor(tiempores/(3600000)) % 24,  
              minutos = Math.floor(tiempores/(60000)) % 60,
              segundos = Math.floor(tiempores/(1000)) % 60;
          
              //mostrar resultados en pantalla
          days.innerHTML = dias;
          hours.innerHTML = horas;
          min.innerHTML = minutos;
          sec.innerHTML = segundos;

          //acomodar formato de fechas
          if(horas < 10) hours.innerHTML = "0" + horas;
          if(minutos < 10) min.innerHTML = "0" + minutos;
          if(segundos < 10) sec.innerHTML = "0" + segundos;

          
         

          if (tiempores <= 0) {
            clearInterval(countdownDate); // Stop the countdown
            displayMessage("EL PROCESO DE TRANSICIÓN HA CONCLUIDO"); 
          }

      }, 1000);

      function displayMessage(message) {
        const messageElement = document.getElementById("message");
        messageElement.innerHTML = message;
      }

     
