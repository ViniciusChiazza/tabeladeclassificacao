var vinicius = {
  icon:
    "https://media-exp1.licdn.com/dms/image/C4D03AQFgSw-9OhrHbg/profile-displayphoto-shrink_200_200/0/1642091408061?e=1652918400&v=beta&t=i5fMP1nCMduKF1qW9tXyGR4DYqH1nCLzq9dVTgnC0FM",
  nome: "Vinicius",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var jogadores = [vinicius];

function calculo(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibir(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + `<img src="${jogadores[i].icon}">` + "</td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button class='actions ' onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";
    elemento +=
      "<td><button class='actions ' onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibir(jogadores);

//botões
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculo(jogador);

  for (var cont = 0; cont < jogadores.length; cont++) {
    if (cont != i) {
      var outrosJogadores = jogadores[cont];
      outrosJogadores.derrotas++;
    }
  }
  exibir(jogadores);
}

function adicionarEmpate() {
  for (var id = 0; id < jogadores.length; id++) {
    var jogador = jogadores[id];
    jogador.empates++;
    jogador.pontos = calculo(jogador);
  }
  exibir(jogadores);
}

function adicionarJogador() {
  var nome = document.getElementById("nomeJogador");
  var icone = document.getElementById("iconeJogador");
  jogadores.push({
    icon: icone.value,
    nome: nome.value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  nome.value = "";
  icone.value = "";
  exibir(jogadores);
}

function zeraPontos() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibir(jogadores);
}