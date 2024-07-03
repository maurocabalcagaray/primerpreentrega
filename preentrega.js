function convertir() {
  let dolar = 933;
  let euro = 985;
  let real = 164;

  let cambio = prompt(
    'Bienvenido, a que tipo de moneda desea convertir? "dolar" - "euro" - "real"'
  );

  while (cambio != "dolar" && cambio != "euro" && cambio != "real") {
    alert("Ingrese una moneda correcta");
    cambio = prompt(
      'Bienvenido, a que tipo de moneda desea convertir? "dolar" - "euro" - "real"'
    );
  }

  if (cambio == "dolar") {
    let monto = prompt("ingrese el monto en pesos argentinos a cambiar");
    let conversion = `${monto / dolar}`;
    alert(`La conversion es $${conversion} dolares`);
  }

  if (cambio == "euro") {
    let monto = prompt("ingrese el monto en pesos argentinos a cambiar");
    let conversion = `${monto / euro}`;
    alert(`La conversion es $${conversion} euros`);
  }

  if (cambio == "real") {
    let monto = prompt("ingrese el monto en pesos argentinos a cambiar");
    let conversion = `${monto / real}`;
    alert(`La conversion es $${conversion} reales`);
  }

  alert("¡Gracias por su visita!");
}
convertir();
