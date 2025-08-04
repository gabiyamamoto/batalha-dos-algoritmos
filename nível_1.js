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

console.log(`🧾 LORE DA HEROÍNA: ${nome}`);
console.log(``);
console.log(`Datheus, o quarto sistema mais próximo do Solaris, foi criado pelos Deuses Fundadores.`);
console.log(`Todas as leis e dados que regiam a realidade eram armazenados pela Árvore Matrix.`);
console.log(`Até que em um dia, o sistema foi assolado pelo evento catastrófico conhecido como O Reset.`);
console.log(`Essa falha quebrou a lógica da existência dos seres que ali habitavam e enlouqueceram os criadores.`);
console.log(`As divindades, agora corrompidas, lideram a organização 'Códice do Abismo', que busca destruir o que restou de Datheus.`);
console.log(`Mas, seis heróis foram profetizados pelas antigas lendas a salvarem o sistema da fragmentação.`);
console.log(`Vinda das ${origem}, ${nome} é uma ${classe} do Reino de Códrix, e uma das salvações que nasceu entre bugs.`);
console.log(`Com suas habilidades de ${funcao} e seu ${TIPO_ARMA}, '${NOME_ARMA}', ela conduz ataques criptografados que enfraquessem trojans sombrios.`);
console.log(`${nome} é capaz de acabar com scripts virais devido ao seu nível ${nível} e um ataque total de ${ataqueTotal} pontos.`);
console.log(`A intensificação de proteção pela ${NOME_ARMADURA} fornece um total de ${defesaTotal} pontos de defesa à ela.`);
console.log(`Atualmente, ela acumula ${xp} XP e uma riqueza de ${ouro} de ouro.`);
console.log(`A ${classe} nunca conseguiu ser derrubada, pois detém ${vida} pontos de vida, o maior já registrado na história do reino.`);
console.log(`Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}`);
console.log(`Pode enfrentar a Serpente Binária? ${podeEnfrentarSerpente}. A luta pela sobrevivência da humanidade contra o Códice do Abismo ainda continua...`);
console.log("");

//== NÍVEL 2 - A BATALHA DOS ALGORITMOS ==

//Resgatar os dados do personagem anterior e adicionar mais atributos:
let nomePersonagem = "Asmoday";
let classePersonagem = "arquimaga";
let vidaAtual = 160;
let vidaMaxima = 240;
let manaAtual = 300;
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
let localAtual = "Reino de Códrix";
let missaoAtual = "matar o Deus do espaço, 'O Cavaleiro Silencioso'";

//Prólogo - Recaptulação da história do nível 1
console.log("PRÓLOGO DA HISTÓRIA");
console.log("");
console.log(`Datheus é um planeta que foi destruído pelo evento catastrófico 'O Reset'.`);
console.log(`O evento fez com que a Árvore Matrix, que armazenava os dados que regiam a realidade, fosse contaminada e junto, as divindades que ali governavam.`);
console.log(`${nomePersonagem} é uma ${classePersonagem} do Reino de Códrix e uma das seis salvações destinadas a matarem os deuses corrompidos.`);
console.log(`Com sua força de ${forca} pontos, no nível ${nivelPersonagem}, e ${defesa} pontos de defesa, ${nomePersonagem} é uma das maiores esperanças para essa geração de magos.`);
console.log(`Sua missão atual é ${missaoAtual}.`);

