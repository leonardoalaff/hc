
    const inputPerfil = document.querySelector('.input-perfil')
    const form = document.querySelector('.bg-inp-per')
    const resultadoPerfil = document.querySelector('.resultado-perfil')

    
    
    
    function converterPolegadasParaMilimetros() {
      // Obter o valor em polegadas no formato de fração
      var input = document.getElementById("polegadas").value.trim();
      
      // Converter o valor de fração para decimal
      var polegadasDecimal = eval(input.replace(/(\d+)\s+(\d+)\s*\/\s*(\d+)/, function(match, p1, p2, p3) {
        return parseInt(p1) + parseInt(p2) / parseInt(p3);
      }));
      
      // Verificar se o valor é válido
      if (!isNaN(polegadasDecimal)) {
        // Converter polegadas para milímetros (1 polegada = 25.4 milímetros)
        var milimetros = polegadasDecimal * 25.4;
        
        // Exibir o resultado
        document.getElementById("resultado").innerHTML = milimetros.toFixed(1) + " milímetros.";
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      let valorPerfil = inputPerfil.value.toLowerCase()
      if(valorPerfil === 'w150x13' || valorPerfil === 'w150x13.0') {
        resultadoPerfil.innerHTML = '0,67'
      }
      else if(valorPerfil === 'w150x18' || valorPerfil === 'w150x18.0') {
        resultadoPerfil.innerHTML = '0,69'
      } 
      else if(valorPerfil === 'w150x22.5') {
        resultadoPerfil.innerHTML = '0,88'
      }
      else if(valorPerfil === 'w150x24' || valorPerfil === 'w150x24.0') {
        resultadoPerfil.innerHTML = '0,69'
      }
      else if(valorPerfil === 'w150x29.8') {
        resultadoPerfil.innerHTML = '0,90'
      }
      else if(valorPerfil === 'w150x37.1') {
        resultadoPerfil.innerHTML = '0,91'
      }
      else if(valorPerfil === 'w200x15' || valorPerfil === 'w200x15.0') {
        resultadoPerfil.innerHTML = '0,77'
      }
      else if(valorPerfil === 'w200x19.3') {
        resultadoPerfil.innerHTML = '0,79'
      }
      else if(valorPerfil === 'w200x22.5') {
        resultadoPerfil.innerHTML = '0,79'
      }
      else if(valorPerfil === 'w200x26.6') {
        resultadoPerfil.innerHTML = '0,92'
      }
      else if(valorPerfil === 'w200x31.3') {
        resultadoPerfil.innerHTML = '0,93'
      }
      else if(valorPerfil === 'w200x35.9') {
        resultadoPerfil.innerHTML = '1,03'
      }
      else if(valorPerfil === 'w200x41.7') {
        resultadoPerfil.innerHTML = '1,04'
      }
      else if(valorPerfil === 'w200x46.1') {
        resultadoPerfil.innerHTML = '1,19'
      }
      else if(valorPerfil === 'w200x52' || valorPerfil === 'w200x52.0') {
        resultadoPerfil.innerHTML = '1,19'
      }
      else if(valorPerfil === 'w200x53' || valorPerfil === 'w200x53.0') {
        resultadoPerfil.innerHTML = '1,20'
      }
      else if(valorPerfil === 'w200x59' || valorPerfil === 'w200x59.0') {
        resultadoPerfil.innerHTML = '1,20'
      }
      else if(valorPerfil === 'w200x71' || valorPerfil === 'w200x71.0') {
        resultadoPerfil.innerHTML = '1,22'
      }
      else if(valorPerfil === 'w200x86' || valorPerfil === 'w200x86.0') {
        resultadoPerfil.innerHTML = '1,23'
      }
      else if(valorPerfil === 'w250x19.9') {
        resultadoPerfil.innerHTML = '0,88'
      }
      else if(valorPerfil === 'w250x22.3') {
        resultadoPerfil.innerHTML = '0,89'
      }
      else if(valorPerfil === 'w250x25.3') {
        resultadoPerfil.innerHTML = '0,89'
      }
      else if(valorPerfil === 'w250x28.4') {
        resultadoPerfil.innerHTML = '0,90'
      }
      else if(valorPerfil === 'w250x32.7') {
        resultadoPerfil.innerHTML = '1,07'
      }
      else if(valorPerfil === 'w250x38.5') {
        resultadoPerfil.innerHTML = '1,08'
      }
      else if(valorPerfil === 'w250x44.8') {
        resultadoPerfil.innerHTML = '1,09'
      }
      else if(valorPerfil === 'w250x62' || valorPerfil === 'w250x62.0') {
        resultadoPerfil.innerHTML = '1,47'
      }
      else if(valorPerfil === 'w250x73' || valorPerfil === 'w250x73.0') {
        resultadoPerfil.innerHTML = '1,48'
      }
      else if(valorPerfil === 'w250x80' || valorPerfil === 'w250x80.0') {
        resultadoPerfil.innerHTML = '1,49'
      }
      else if(valorPerfil === 'w250x85' || valorPerfil === 'w250x85.0') {
        resultadoPerfil.innerHTML = '1,50'
      }
    })