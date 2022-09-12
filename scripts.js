function openForm() {document.getElementsByClassName("Pop-up")[0].style.display = "flex"}

function closeForm() {document.getElementsByClassName("Pop-up")[0].style.display = "none"}

function saveCar( index) {
    let newCar = {
    "Marca":document.getElementById("Marca").value,
    "Modelo":document.getElementById("Modelo").value,
    "Versão":document.getElementById("Versão").value,
    "Quilometragem":document.getElementById("Quilometragem").value,
    "Ano":document.getElementById("Ano").value,
    "Preço":document.getElementById("Preço").value,
    "Cor":document.getElementById("Cores").value,
    "Opicionais":{
        "Airbag":document.getElementById("Airbag").checked,
        "Alarme":document.getElementById("Alarme").checked,
        "Ar condicionado":document.getElementById("Ar condicionado").checked,
        "Bancos em couro":document.getElementById("Bancos em couro").checked,
        "Computador de bordo":document.getElementById("Computador de bordo").checked,
        "Controle automático de velocidade":document.getElementById("Controle automático de velocidade").checked, 
        "Controle de tração":document.getElementById("Controle de tração").checked,
        "Direção hidráulica":document.getElementById("Direção hidráulica").checked, 
        "Freio abs":document.getElementById("Freio abs").checked, 
        "Rodas de liga leve":document.getElementById("Rodas de liga leve").checked,
        "Sensor de chuva":document.getElementById("Sensor de chuva").checked,
        "Sensor de estacionamento":document.getElementById("Sensor de estacionamento").checked,
        "Teto solar":document.getElementById("Teto solar").checked,
        "Vidros elétricos":document.getElementById("Vidros elétricos").checked
    },
    "Blindado":document.getElementById("Blindado").checked
    }
    var Carros = localStorage.getItem("Carros");
    if ( Carros == null) {Carros = []}
    else { Carros = JSON.parse(Carros)};
    if (index !== undefined) { console.log("Car Edit!"); Carros[index] = newCar} else { Carros.push( newCar)};
    localStorage.setItem("Carros", JSON.stringify(Carros));
}

function showCars( jsonCarros) {
    var carros = JSON.parse(jsonCarros);
    let carroId = 0;
    carros.forEach( carro => {
    let carroDom = document.createElement("div");
    carroDom.id = `carro${carroId}`;
    let carBrandSpan = document.createElement("span");
    carBrandSpan.classList = "Marca"
    carBrandSpan.textContent = carro.Marca;
    let carModelSpan = document.createElement("span");
    carModelSpan.classList = "Modelo"
    carModelSpan.textContent = carro.Modelo;
    let carYearSpan = document.createElement("span");
    carYearSpan.classList = "Ano"
    carYearSpan.textContent = carro.Ano;
    let carOptionsDiv = document.createElement("div");
    let carDeleteButton = document.createElement("button");
    carDeleteButton.role = "button";
    carDeleteButton.onclick = "delCar(carroDom.id)";
    carDeleteButton.classList = "Deletar"
    carDeleteButton.setAttribute( "onClick", `javascript: delCar(${carroDom.id});` )
    let carDeleteText = document.createElement("span");
    carDeleteText.classList = "Fonte-botao"
    carDeleteText.textContent = "Del"
    let carEditButton = document.createElement("button");
    carEditButton.role = "button";
    carEditButton.setAttribute( "onClick", `javascript: editCar(${carroDom.id});` )
    carEditButton.classList = "Editar"
    let carEditText = document.createElement("span");
    carEditText.classList = "Fonte-botao"
    carEditText.textContent = "Edit"
    carDeleteButton.appendChild(carDeleteText);
    carEditButton.appendChild(carEditText);
    carOptionsDiv.appendChild(carDeleteButton);
    carOptionsDiv.appendChild(carEditButton);
    carroDom.classList = "Colunas Carro";
    carroDom.appendChild(carBrandSpan);
    carroDom.appendChild(carModelSpan);
    carroDom.appendChild(carYearSpan);
    carroDom.appendChild(carOptionsDiv);
    document.getElementById("Tabela").appendChild( carroDom);
    carroId++;
    })
}

function showNoCars() {
    let divNoCars = document.createElement("div");
    let textNoCars = document.createElement("span");
    textNoCars.textContent = "Nenhum carro cadastrado! :(";
    divNoCars.appendChild( textNoCars);
    divNoCars.classList = "Sem-Carro";
    document.getElementById("Tabela").appendChild( divNoCars);
}

function delCar( carro) {
    carro.remove();
    var Carros = localStorage.getItem("Carros");
    var carros = JSON.parse(Carros);
    carros.splice(carro.id.split("o")[1], 1);
    localStorage.setItem("Carros", JSON.stringify(carros));
}

function editCar ( carro) {
    var Carros = JSON.parse(localStorage.getItem("Carros"));
    let carIndex = carro.id.split("o")[1];
    var Carro = Carros[carIndex];
    var formulario = document.getElementsByClassName("Pop-up")[0];
    formulario.style.display = "flex";
    console.log(Carro);
    document.getElementById("Marca").value = Carro.Marca;
    document.getElementById("Modelo").value = Carro.Modelo;
    document.getElementById("Versão").value = Carro.Versão;
    document.getElementById("Quilometragem").value = Carro.Quilometragem;
    document.getElementById("Ano").value = Carro.Ano;
    document.getElementById("Preço").value = Carro.Preço;
    document.getElementById("Cores").value = Carro.Cor;
    document.getElementById("Airbag").checked = Carro.Opicionais.Airbag;
    document.getElementById("Alarme").checked = Carro.Opicionais.Alarme;
    document.getElementById("Ar condicionado").checked = Carro.Opicionais['Ar Condicionado'];
    document.getElementById("Bancos em couro").checked = Carro.Opicionais['Bancos em couro'];
    document.getElementById("Computador de bordo").checked = Carro.Opicionais['Computador de bordo'];
    document.getElementById("Controle automático de velocidade").checked = Carro.Opicionais['Controle automático de velocidade'];
    document.getElementById("Controle de tração").checked = Carro.Opicionais['Controle de tração'];
    document.getElementById("Direção hidráulica").checked = Carro.Opicionais['Direção hidráulica'];
    document.getElementById("Freio abs").checked = Carro.Opicionais['Freio abs'];
    document.getElementById("Rodas de liga leve").checked = Carro.Opicionais['Rodas de liga leve'];
    document.getElementById("Sensor de chuva").checked = Carro.Opicionais['Sensor de chuva'];
    document.getElementById("Sensor de estacionamento").checked = Carro.Opicionais['Sensor de estacionamento'];
    document.getElementById("Teto solar").checked = Carro.Opicionais['Teto solar'];
    document.getElementById("Vidros elétricos").checked = Carro.Opicionais['Vidros elétricos'];
    document.getElementById("Blindado").checked = Carro.Blindado;
    document.getElementById("Cadastrar-Carro").setAttribute( "onClick", `javascript: saveCar(${carIndex});` )
}