//== NÍVEL 1 - A JORNADA DA HEROÍNA ==

let nome = "Asmoday";
let classe = "arquimaga";
let funcao = "debuffer";
let origem = "Margens Negras Corrompidas";
let nível = 16;
let vida = 160;
let ouro = 130;
let xp = 1200;

const NOME_ARMA = "Elegia do Suspiro Final";
const TIPO_ARMA = "cajado";
let DANO_BASE = 40;
const NOME_ARMADURA = "Absolvição binária";
let DEFESA_BASE = 34;

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
let podeEnfrentarCavaleiro = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log("");
console.log(`🧾 LORE DA HEROÍNA: ${nome}`);
console.log(``);
console.log(`    Datheus, o quarto planeta mais próximo do Sol, foi criado pelos Deuses Fundadores.`);
console.log(`Todas as leis e dados que regiam a realidade eram armazenados pela Árvore Matrix.`);
console.log(`Até que em um dia, o sistema foi assolado pelo evento catastrófico conhecido como 'O Reset'.`);
console.log(`O evento afetou a árvore e quebrou a lógica da existência dos seres que ali habitavam,`);
console.log(`enlouquecendo também os criadores.`);
console.log(`As divindades, agora corrompidas, lideram a organização 'Códice do Abismo',`);
console.log(`que busca destruir o que restou de Datheus.`);
console.log(`Porém, seis heróis foram profetizados pelas antigas lendas a salvarem o sistema da fragmentação.`);
console.log(`    Vinda das ${origem}, ${nome} é uma ${classe} do Reino de Códrix,`);
console.log(`e uma das salvações que nasceu entre bugs.`);
console.log(`Com suas habilidades de ${funcao} e seu ${TIPO_ARMA}, '${NOME_ARMA}',`);
console.log(`ela conduz ataques criptografados que enfraquessem trojans sombrios.`);
console.log(`${nome} é capaz de acabar com scripts virais devido ao seu nível ${nível}`);
console.log(`e um ataque total de ${ataqueTotal} pontos.`);
console.log(`A intensificação de proteção pela '${NOME_ARMADURA}' fornece um total de ${defesaTotal} pontos de defesa à ela.`);
console.log(`Atualmente, ${nome} acumula ${xp} de XP e uma riqueza de ${ouro} de moedas de ouro.`);
console.log(`A ${classe} nunca conseguiu ser derrubada, pois detém ${vida} pontos de vida,`);
console.log(`o maior já registrado na história do reino.`);
console.log(`Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}`);
console.log(`Pode enfrentar O Cavaleiro Silencioso? ${podeEnfrentarCavaleiro}.`);
console.log(`A luta pela sobrevivência da humanidade contra o Códice do Abismo ainda continua...`);
console.log("");

//== NÍVEL 2 - A BATALHA DOS ALGORITMOS ==

//Resgatar os dados do personagem anterior e adicionar mais atributos:
let nomePersonagem = "Asmoday";
let classePersonagem = "arquimaga";
let vidaAtual = 200;
let vidaMaxima = 200;
let manaAtual = 180;
let manaDetectável = manaAtual * 0.2;
let manaMaxima = 180;
let nivelPersonagem = 16;
let experiênciaAtual = 1350;
let ouroAtual = 102;

//Novos atributos para a batalha:
let forca = (manaAtual + ataqueTotal) / 2; // 128
let defesa = (vidaAtual + defesaTotal) / 2; // 121
let agilidade = nivelPersonagem + manaDetectável; //48
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
    console.log("👀 Aventureiros veteranos te observam com interesse, considerando te recrutar para seus grupos...");
}

//Verificação de ouro abundante
if (ouro >= 100) {
    console.log("- Comerciante -");
    console.log("💰 Um comerciante ambulante lhe aborda: 'Olá nobre aventureira!");
    console.log("Tenho diversos artefatos mágicos que talvez despertem o seu interesse.'");
}

//Verificação de classe e controle de mana
if (classePersonagem === "arquimaga" && manaAtual >= 200 && manaDetectável <= 40) {
    console.log("- Controle de mana -");
    console.log("💫 Sua habilidade de controle mágico está melhorando! Nínguem parece notar a presença da sua mana.");
}

//Capítulo 2 - Condicionais compostas
console.log("");
console.log("📍CAPÍTULO 2: O PESO DAS ESCOLHAS");
console.log("");

//Escolha baseada na quantidade de ouro
console.log("- Dinheiro suficiente -")
if (ouroAtual >= 40) {
    console.log(`🔮 Percebendo que sua energia mágica diminiu depois do treinamento,`);
    console.log(`${nomePersonagem} compra uma poção restauradora e sente sua mana retornar lentamente.`);
    ouroAtual -= 40;
    manaAtual = manaMaxima;
    console.log(`Ouro restante: ${ouroAtual}`);
    console.log(`Mana atual:${manaAtual}`);
} else {
    console.log(`😵 Sem ouro suficiente, ${nomePersonagem} começa a sentir uma tontura... mas só a resta resistir.`);
    experiênciaAtual += 5;
}

//Escolha binária baseada na agilidade
console.log("- Locomoção pela vila -")
if (agilidade <= 10) {
    console.log(`🚶‍♀️${nomePersonagem} se arrasta pelas ruas movimentadas da vila e`);
    console.log(`sente os músculos pesados a cada passo.`);
    vidaAtual -= 4;
    console.log(`Vida -4. Vida atual: ${vidaAtual}`)
} else {
    console.log(`🍂 Com passos leves e serenos, ${nomePersonagem} cruza a vila sem muito esforço.`);
    experiênciaAtual += 5;
    console.log(`XP +5. Experiência atual: ${experiênciaAtual} XP`)
}

//Capítulo 3 - Condicionais encadeadas
console.log("");
console.log("⚔️ CAPÍTULO 3: A Batalha final");
console.log("");

let vidaInimigo = 350;
let nívelInimigo = 20;
let forcaInimigo = (vidaInimigo + 50) / 2 //200
let defesaInimigo = (vidaInimigo + nívelInimigo) / 2; //185
let agilidadeInimigo = vidaAtual / 2; //175

// Sistema de combate baseado inteligente baseado na situação
if (manaDetectável <= 40 && manaAtual >= 150) {
    console.log(`🗡️ O Cavaleiro Silencioso subestima ${nomePersonagem} pela sua pequena quantidade de mana. `);
    console.log(`Logo, ela se aproveita do descuido do inimigo e realiza uma sequência de ataques massivos!`);
    vidaInimigo -= forca;
    defesaInimigo -= 20;
    manaAtual -= 80;
    console.log(`🔸 Vida do boss: ${vidaInimigo}/350`);
} else if (agilidadeInimigo > agilidade) {
    console.log(`⚠️ O oponente é ágil... Não há tempo para se esquivar!`);
    console.log(`${nomePersonagem} utiliza uma magia defensiva para proteção.`);
    manaAtual -= 5;
} else if (vidaAtual <= 20) {
    console.log(`🆘 A vida de ${nomePersonagem} está baixa!`);
    console.log(`Ligeiramente, a ${classePersonagem} se esconde atrás de um pilar e usa uma magia de cura`);
    vidaAtual = vidaMaxima;
    manaAtual -= 50;
} else {
    console.log(`💥 A batalha é intensa! Mas ${nomePersonagem} usa o ambiente a seu favor para ganhar vantagem estratégica`);
    console.log(`e limitar os movimentos do adversário!`);
    experiênciaAtual += 20;
    agilidadeInimigo -= 90;
    vidaInimigo -= forca / 2;
}