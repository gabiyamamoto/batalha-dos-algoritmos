//== NÍVEL 1 - A JORNADA DA HEROÍNA ==

let nome = "Asmoday";
let classe = "arquimaga";
let funcao = "debuffer";
let origem = "Margens Negras Corrompidas";
let nível = 16;
let vida = 200;
let ouro = 132;
let xp = 1200;

const NOME_ARMA = "Elegia do Suspiro Final";
const TIPO_ARMA = "cajado";
let DANO_BASE = 42;
const NOME_ARMADURA = "Absolvição binária";
let DEFESA_BASE = 37;

//O personagem treinou e ganhou 150 pontos de experiência
xp += 150;
//Comprou uma poção por 30 moedas de ouro
ouro -= 30;
//Usou a poção e recuperou 40 pontos de vida
vida += 40;
//A arma foi encantada, e seu dano foi dobrado
DANO_BASE *= 2;

let ataqueTotal = DANO_BASE + nível;
let defesaTotal = DEFESA_BASE + (nível / 2);

let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nível >= 10;
let podeEnfrentarSerpente = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log("");
console.log(`🧾 LORE DA HEROÍNA: ${nome}`);
console.log(``);
console.log(`Datheus, o quarto sistema mais próximo do Solaris, foi criado pelos Deuses Fundadores.`);
console.log(`Todas as leis e dados que regiam a realidade eram armazenados pela Árvore Matrix.`);
console.log(`Até que em um dia, o sistema foi assolado pelo evento catastrófico conhecido como O Reset.`);
console.log(`Essa falha quebrou a lógica da existência dos seres que ali habitavam e enlouqueceram os criadores.`);
console.log(`As divindades, agora corrompidas, lideram a organização 'Códice do Abismo',`);
console.log(`que busca destruir o que restou de Datheus.`);
console.log(`Mas, seis heróis foram profetizados pelas antigas lendas a salvarem o sistema da fragmentação.`);
console.log(`Vinda das ${origem}, ${nome} é uma ${classe} do Reino de Códrix, e uma das salvações que nasceu entre bugs.`);
console.log(`Com suas habilidades de ${funcao} e seu ${TIPO_ARMA}, '${NOME_ARMA}`);
console.log(`ela conduz ataques criptografados que enfraquessem trojans sombrios.`);
console.log(`${nome} é capaz de acabar com scripts virais devido ao seu nível ${nível} e um ataque total de ${ataqueTotal} pontos.`);
console.log(`A intensificação de proteção pela ${NOME_ARMADURA} fornece um total de ${defesaTotal} pontos de defesa à ela.`);
console.log(`Atualmente, ela acumula ${xp} XP e uma riqueza de ${ouro} de ouro.`);
console.log(`A ${classe} nunca conseguiu ser derrubada, pois detém ${vida} pontos de vida, o maior já registrado na história do reino.`);
console.log(`Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}`);
console.log(`Pode enfrentar a Serpente Binária? ${podeEnfrentarSerpente}.`);
console.log(`A luta pela sobrevivência da humanidade contra o Códice do Abismo ainda continua...`);
console.log("");

//== NÍVEL 2 - A BATALHA DOS ALGORITMOS ==

//Resgatar os dados do personagem anterior e adicionar mais atributos:
let nomePersonagem = "Asmoday";
let classePersonagem = "arquimaga";
let vidaAtual = 160;
let vidaMaxima = 240;
let manaAtual = 300;
let manaDetectável = manaAtual * 0.1;
let manaMaxima = 300;
let nivelPersonagem = 16;
let experiênciaAtual = 1350;
let ouroAtual = 102;

//Novos atributos para a batalha:
let forca = 250;
let defesa = 195;
let agilidade = 205;
let combatesVencidos = 20;

//Estado atual da história
let localAtual = "Planícies Ocultas";
let missaoAtual = "matar o Deus do espaço, 'O Cavaleiro Silencioso'";

//Prólogo - Recaptulação da história do nível 1
console.log("_________________________________________________");
console.log("")
console.log("🔙 PRÓLOGO DA HISTÓRIA");
console.log("");
console.log(`Pronta para o seu primeiro grande desafio, a ${classePersonagem} ${nomePersonagem} se aventura nas ${localAtual},`);
console.log(`localizada no norte do Reino de Códrix.`);
console.log(`Sua missão é ${missaoAtual}, e deter a crescente ameaça do Abismo.`);
console.log("");

//Capítulo 1 - Condicionais simples na narrativa
console.log("");
console.log("☘️ CAPÍTULO 1: GUILDA DE AVENTUREIROS");
console.log("");

//Verificação de xp de personagem
if (experiênciaAtual >= 900) {
    console.log("- Recrutamento -");
    console.log("👀 Aventureiros veteranos te observam com interesse,");
    console.log("considerando de recrutar seus grupos...");
}

//Verificação de ouro abundante
if (ouro >= 100) {
    console.log("- Comerciante -");
    console.log("💰 Um comerciante ambulante de aborda: 'Olá nobre aventureira!");
    console.log("Tenho diversos artefatos mágicos que talvez despertem o seu interesse.'");
}

//Verificação de classe e controle de mana
if (classePersonagem === "arquimaga" && manaAtual >= 200 && manaDetectável <= 40) {
    console.log("- Controle de mana -");
    console.log("💫 Sua habilidade de controle mágico está melhorando! ");
    console.log("Nínguem parece perceber a presença da sua mana.");
}

