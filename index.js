// Criar um código que irá criar um array de 10x10
// Esse array será um mapa de posições para um robô andar
// O robô poderá receber ordens de caminhada
// N = um pra cima, S = um pra baixo, W = um pra esquerda, E = um pra direita
// Crie uma função que irá receber uma lista de ordens e irá retornar a posição atual do robô

// Ao invés de denotar a direção exata pra onde deve ir, instrua o robô a virar para a esquerda ou direita
// E além de virar, ele deve caminhar para frente ou para trás, baseado na direção para onde está olhando
// L = turn left
// R = turn right
// F = move forward
// B = move backwards
//const param = ['L', 'L', 'F', 'F', 'R', 'B', 'L', 'F'];

const robo = {
    posicaoX: 3,
    posicaoY: 3, 
    direcao: "N",
};
const mapa = Array(10);
for (let i = 0; i < mapa.length; i += 1) {
    mapa[i] = Array(10);
    mapa[i].fill(0);
}


function printMap(map) {
    let printedMap = '';
    for (let j = 0; j < map.length; j += 1) {
        for (let i = 0; i < map[j].length; i += 1) {
            if (robo.posicaoX === i && robo.posicaoY === j) {
                printedMap += ' R';
            } else {
                printedMap += ` ${map[i][j]}`;
            }
        }
        printedMap += '\n';
    }
    return printedMap;
}


function irNorte(robo) {

    robo.posicaoY = robo.posicaoY - 1
}

function irSul(robo) {
    robo.posicaoY = robo.posicaoY + 1
}

function irLeste(robo) {
    robo.posicaoX = robo.posicaoX + 1
}

function irOeste(robo) {
    robo.posicaoX = robo.posicaoX - 1
}

function movimento(lista, direcao) {
    direcao = robo.direcao;

    for (let i = 0; i < lista.length; i += 1) {
        switch (lista[i]) {
            case "L":
                direcao = (direcao === "N") ? "E" : "W";
                break;

            case "R":
                direcao = (direcao === "N") ? "W" : "E";
                break;

            case "F":
                if (direcao === "N") {
                    irNorte(robo);
                }
                else if (direcao === "S") {
                    irSul(robo);
                }
                else if (direcao === "W") {
                    irOeste(robo);
                }
                else {
                    irLeste(robo);
                }
                break;

            case "B":
                if (direcao === "N") {
                    irSul(robo);
                }
                else if (direcao === "S") {
                    irNorte(robo);
                }
                else if (direcao === "W") {
                    irLeste(robo);
                }
                else {
                    irOeste(robo);
                }
                break;

            default:
                break;
        }
    }
    return robo.posicaoX, robo.posicaoY;
}

const param = ['L', 'L', 'F', 'F', 'R', 'B', 'L', 'F'];

const resultado = movimento(param, robo.direcao);

console.log(printMap(mapa));