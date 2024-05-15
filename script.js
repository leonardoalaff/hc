
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