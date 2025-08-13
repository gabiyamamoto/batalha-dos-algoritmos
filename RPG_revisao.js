//== NÍVEL 1 - A JORNADA DA HEROÍNA ==

let nome = "Asmoday";
let classe = "arquimaga";
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
console.log("NÍVEL 1");
console.log("");
console.log(`🧾 LORE DA HEROÍNA: ${nome}`);
console.log(``);
console.log("    Datheus, o quarto planeta mais próximo do Sol, foi criado pelos Deuses Fundadores. Todas as leis e dados que regiam a realidade");
console.log("eram armazenados pela Árvore Matrix. Até que em um dia, o sistema foi assolado pelo evento catastrófico conhecido como 'O Reset'.");
console.log("O evento afetou a árvore e quebrou a lógica da existência dos seres que ali habitavam, enlouquecendo também os criadores.");
console.log("As divindades, agora corrompidas, lideram a organização 'Códice do Abismo', que busca destruir o que restou de Datheus.");
console.log("Porém, seis heróis foram profetizados pelas antigas lendas a salvarem o sistema da fragmentação.");
console.log(`    Vinda das ${origem}, ${nome} é uma ${classe} do Reino de Códrix e uma das salvações que nasceu entre bugs.`);
console.log(`Com suas habilidades ofensivas e seu ${TIPO_ARMA} '${NOME_ARMA}', ela conduz ataques criptografados que enfraquessem trojans`);
console.log(`sombrios. ${nome} é capaz de acabar com scripts virais devido ao seu nível ${nível} e um ataque total de ${ataqueTotal} pontos.`);
console.log(`A intensificação de proteção pela '${NOME_ARMADURA}' fornece um total de ${defesaTotal} pontos de defesa à ela.`);
console.log(`Atualmente, ${nome} acumula ${xp} de XP e uma riqueza de ${ouro} de moedas de ouro.`);
console.log(`A ${classe} nunca conseguiu ser derrubada, pois detém ${vida} pontos de vida, o maior já registrado na história do reino.`);
console.log(`Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado} | Pode enfrentar O Cavaleiro Silencioso? ${podeEnfrentarCavaleiro}.`);
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
let forca = 165;
let defesa = 120;
let agilidade = 50;
let combatesVencidos = 20;

//Estado atual da história
let localAtual = "Planícies Ocultas";
let missaoAtual = "matar o Deus do espaço, 'O Cavaleiro Silencioso'";

//Prólogo - Recaptulação da história do nível 1
console.log("_________________________________________________");
console.log("")
console.log("NÍVEL 2");
console.log("");
console.log("🔙 PRÓLOGO DA HISTÓRIA");
console.log("");
console.log(`Pronta para o seu primeiro grande desafio, a ${classePersonagem} ${nomePersonagem} se aventura nas ${localAtual}, localizada no norte do Reino de Códrix.`);
console.log("Sua missão é", missaoAtual, ", e deter a crescente ameaça do Abismo.");
console.log("");

//Capítulo 1 - Condicionais simples na narrativa
console.log("");
console.log("☘️ CAPÍTULO 1: GUILDA DE AVENTUREIROS");
console.log("");

//Verificação de xp de personagem
if (experiênciaAtual >= 900) {
    console.log("- Recrutamento -");
    console.log("👀 Graças aos seus", experiênciaAtual, "pontos de XP, alguns aventureiros veteranos observam", nomePersonagem, "com interesse, considerando recrutá-la para seus grupos.");
}

//Verificação de ouro abundante
if (ouro >= 100) {
    console.log("- Comerciante -");
    console.log("💰 O brilho das moedas de ouro da", classePersonagem, "atraem um comerciante ambulante:'Olá nobre aventureira! Tenho diversos artefatos mágicos");
    console.log("que talvez despertem o seu interesse...'");
}

//Verificação de classe e controle de mana
if (classePersonagem === "arquimaga" && manaAtual >= 100 && manaDetectável <= 40) {
    console.log("- Controle de mana -");
    console.log("💫 A habilidade de controle mágico de", nomePersonagem, "está melhorando! Ninguém parece notar a presença da sua mana.");
}

//Capítulo 2 - Condicionais compostas
console.log("");
console.log("📍CAPÍTULO 2: O PESO DAS ESCOLHAS");
console.log("");

//Escolha baseada na quantidade de ouro
console.log("- Dinheiro suficiente -")
if (ouroAtual >= 40) {
    console.log("🔮 Notando que sua energia mágica diminuiu devido ao treinamento,", nomePersonagem, "compra uma poção restauradora e sente sua mana retornar.");
    ouroAtual -= 40;
    manaAtual = manaMaxima;
    console.log("Ouro restante:", ouroAtual, "moedas");
    console.log("Mana atual:", manaAtual);
} else {
    console.log("😵 Sem ouro suficiente,", nomePersonagem, "começa a sentir uma tontura... mas só a resta resistir.");
    experiênciaAtual += 5;
}

//Escolha binária baseada na agilidade
console.log("- Locomoção pela vila -")
if (agilidade <= 10) {
    console.log("🚶‍♀️ Em consequência da insuficiência de agilidade,", nomePersonagem, "se arrasta pelas ruas movimentadas da vila e sente os músculos pesados a cada passo.");
    vidaAtual -= 4;
    console.log("Vida -4. Vida atual: ", vidaAtual)
} else {
    console.log("🍂 Com passos leves e serenos,", nomePersonagem, "cruza a vila sem muito esforço graças aos seus", experiênciaAtual, "pontos de agilidade.");
    experiênciaAtual += 5;
    console.log("XP +5. Experiência atual:", experiênciaAtual, "XP")
}

//Capítulo 3 - Condicionais encadeadas
console.log("");
console.log("⚔️ CAPÍTULO 3: A BATALHA FINAL");
console.log("");
console.log(`A ${classePersonagem} ${nomePersonagem} finalmente chega ao domínio do Cavaleiro Silencioso, um dos Deuses Corrompidos que comandam o Códice do Abismo,`);
console.log("e uma das maiores ameaças já enfrentadas pela humanidade. A batalha final começa agora...");
console.log("");

let vidaInimigo = 660;
let nívelInimigo = 25;
let forcaInimigo = 220;
let defesaInimigo = 180;
let agilidadeInimigo = 70;
let dano = 0;

//Sistema de combate baseado inteligente baseado na situação
if (manaDetectável <= 40 && manaAtual >= 150) {
    console.log("🗡️ No início da luta, o Cavaleiro Silencioso subestima", nomePersonagem, "pela sua pequena quantidade de mana.");
    console.log("Logo, ela se aproveita do descuido do inimigo e realiza uma sequência de ataques massivos!");
    dano = forca * 4;
    vidaInimigo -= dano;
    defesaInimigo -= 20;
    manaAtual -= 80;
    console.log(`🔹 ${nomePersonagem} causou ${dano} pontos de dano ao inimigo`);
    console.log(`🔸 Vida do boss: ${vidaInimigo}/660`);
} else if (agilidadeInimigo > agilidade) {
    console.log("⚠️ O oponente é ágil... Não há tempo para se esquivar!", nomePersonagem, "utiliza uma magia defensiva para proteção.");
    manaAtual -= 10;
} else if (vidaAtual <= 20) {
    console.log("🆘 A vida de", nomePersonagem, "está baixa!");
    console.log("Ligeiramente, a", classePersonagem, "se esconde atrás de um pilar e usa uma magia de cura");
    vidaAtual = vidaMaxima;
    manaAtual -= 50;
} else {
    console.log("💥 A batalha é intensa! Mas", nomePersonagem, "usa o ambiente a seu favor para ganhar vantagem estratégica e limitar os movimentos do adversário!");
    experiênciaAtual += 20;
    agilidadeInimigo -= 90;
    vidaInimigo -= forca / 2;
}

//Epílogo - Resultado final
console.log("");
console.log("🔺 EPÍLOGO: RESULTADO FINAL");
console.log("");

if (vidaInimigo <= 0) {
    console.log(`🏆 VITÓRIA TRIUNFANTE! A ${classePersonagem} ${nomePersonagem} derrota o Cavaleiro Silencioso, calando por fim uma das figuras mais perigosas do Códice do Abismo.`);
    combatesVencidos++;
    experiênciaAtual += 1000;
    nivelPersonagem++;
    ouro += 500;
    console.log("Combates vencidos:", combatesVencidos);
    console.log("XP + 1000. Experiência atual:", experiênciaAtual, "XP");
    console.log("+ 500 moedas de ouro. Ouro atual:", ouroAtual, "moedas");
    console.log("");
} else {
    console.log(`😭 O CAMINHO É ARDUO! O poder do Cavaleiro Silencioso se mostra superior ao da ${classePersonagem} ${nomePersonagem} neste momento. Ferida e exausta, ela recua.`);
    console.log("No entanto, a derrota ainda é uma lição valiosa. Agora ela entende melhor a ameaça que o oponente representa e se prepara para o próximo confronto. A jornada não acabou!");
    experiênciaAtual += 200;
    console.log("XP +200. Experiência atual:", experiênciaAtual, "XP");
    console.log("");
}

// NÍVEL 3 - CONTINUAÇÃO DA SAGA ÉPICA ===
//Retomar os dados do personagem dos níveis anteriores

let heroinaNome = "ASMODAY";
/*let classePersonagem = "arquimaga"; 
let vidaAtual = 200;
let vidaMaxima = 200;
let manaAtual = 100;
let manaDetectável = manaAtual * 0.2;
let manaMaxima = 180;
let nivelPersonagem = 17;
let experiênciaAtual = 2355;
let ouroAtual = 62; */


// === NOVOS ELEMENTOS PARA O CASTELO DOS ARRAYS ===
//Inventário mágico
let inventario = ["🧪 Poção restauradora de mana", "🏹 Elegia do Suspiro Final", "🛡️ Absolvição Binária"];
let aliados = ["Guerreiro Phanes", "Sacerdotisa Naberius", "Sabio Anaxágoras"];
let inimigosEncontrados = ["Devorador de frequências", "Flor encriptada", "Autômato sombrio"];
let salasTorre = ["Galeria dos circuitos antigos", "Jardim mecânico", "Observatório binário"];
let tesouroColetado = [];

console.log("_________________________________________________");
console.log("");
console.log("NÍVEL 3")
console.log("");
console.log("🛕", heroinaNome, "ADENTRA A TORRE DA ADVERSIDADE");
console.log("");
console.log(`Após derrotar um dos Deuses Criadores, a ${classePersonagem} ${nomePersonagem} chega a Torre da Adversidade, um edificío que atua como uma base para os monstros do Códice do Abismo.`);
console.log("O novo objetivo de", nomePersonagem, "é se reunir a aliados para derrotar as criaturas da organização, assim como coletar itens valiosos.")
console.log("Pois, ainda que seja habitada por seres ameaçadores, a torre é repleta de salas misteriosas e recompensas únicas aos aventureiros que se arriscam...");
console.log("Inventário inicial:", inventario.length, "itens mágicos");
console.log("");

//Capítulo 1 - Criação e manipulação de arrays
console.log("");
console.log("💎 CAPÍTULO 1: AS RELÍQUIAS PERDIDAS DA TORRE");
console.log("");

//Declaração e inicialização
let elixiresEncontrados = ["Agilidade", "🔥 Fogo gélido", "👁️‍🗨️ Visão noturna", "🦾 Pele de ferro", "👣 Passo silencioso"];
let armadilhasAtiradas = [];

//Acesso e modificação de elementos
console.log("- Elixir encontrado -");
console.log("🔎 Entre códigos antigos,", nomePersonagem, "detecta um elixir escondido nos fluxos da torre.");
console.log("Primeiro elixir encontrado:", elixiresEncontrados[0]);
console.log("Total de elixires mágicos:", elixiresEncontrados.length);
console.log("");

//Modificando elemento específico
console.log("- Aprimoramento do elixir -");
elixiresEncontrados[0] = "🏃 Agilidade etérea" //upgrade do elixir!
console.log("🪄 A alquimia digital reage,", nomePersonagem, "aprimorou um elixir!");
console.log("Elixir da Agilidade ➡️ Elixir da Agilidade etérea")
console.log("");

//Métodos de arrays fundamentais
console.log("- Um novo achado -");
inventario.push("🔪 Adaga encantada"); //adiciona novo item no final
console.log("💼 Nos registros da torre, um novo item foi amazenado!")
console.log("Novo item adicionado:", inventario[inventario.length - 1]);
console.log("Inventário:", inventario);
console.log("");

console.log("- Item removido -")
let itemRemovido = inventario.pop(); //remove no final
console.log("🧹", nomePersonagem, "limpa seu inventário!");
console.log("Item removido:", itemRemovido);
console.log("Inventário atual:", inventario);

//Capítulo 2 - loop for tradicional
console.log("");
console.log("🕵 CAPÍTULO 2: EXPLORANDO A TORRE ALGORÍTMICA ");
console.log("");

// Explorando cada sala da torre usando for tradicional
console.log("Entre silêncios e sombras,", nomePersonagem, "começa a explorar as salas da torre misteriosa...");
console.log("");

for (let i = 0; i < salasTorre.length; i++) {
    console.log(`Sala ${i + 1}: ${salasTorre[i]}`);

    //Lógica diferente para cada sala baseada no índice
    if (i === 0) {
        console.log(`Na ${salasTorre[i]}, ${nomePersonagem} encontra um grimório lendário!`);
        tesouroColetado.push("📜 Grimório lendário");
        console.log("🪶 Novo item coletado. Tesouros coletados:", tesouroColetado);
        console.log("");
    } else if (i === 1) {
        console.log(`🥀 Flores de aço se abrem no ${salasTorre[i]}, tentando cortar ${nomePersonagem} com suas lâminas afiadas. Porém, a ${classePersonagem} cria um escudo mágico para se proteger!`);
        manaAtual -= 30;
        console.log("Mana atual:", manaAtual);
        console.log("");
    } else {
        console.log(`🗺️ Ao entrar no ${salasTorre[i]}, ${nomePersonagem} acha um mapa estelar codificado!`)
        experiênciaAtual += 50;
        console.log("XP +50. Experiência atual:", experiênciaAtual, "XP");
        console.log("");
    }
}

console.log(`Exploração concluída! XP: ${experiênciaAtual} | Vida: ${vidaAtual} | Mana: ${manaAtual}`);

//Capitulo 3 - Gerenciando grupos com for e aplicando lógica específica baseada em posições e índices
console.log("");
console.log("🤜🤛 CAPÍTULO 3: CHAMADO À BATALHA");
console.log("");

//Recrutando aliados com for tradicional
console.log("Chegou a hora de reunir aqueles que lutarão ao lado de", nomePersonagem, "na batalha final");
console.log("");

for (let i = 0; i < aliados.length; i++) {
    let aliado = aliados[i];
    console.log(`Aliado ${i + 1}: ${aliado} se junta à missão!`);
    
    //Cada posição do array determina a habilidade especial
    if (i === 0) { //Primeiro aliado - Main damage dealer
        console.log(`💪 O ${aliado} assume a linha de frente junto à ${classePersonagem} ${nomePersonagem}, pronto para acabar com os monstros!`);
        experiênciaAtual += 100;
        console.log("XP +100. Experiência atual:", experiênciaAtual, "XP");
        console.log("");
    } else if (i === 1) { //Segundo aliado - Healer
        console.log("❤️‍🩹 A", aliado, "se une à equipe, trazendo a benção da cura para o grupo!");
        vidaMaxima += 50;
        vidaAtual += 50;
        console.log("Buff aplicado! Vida máxima e vida atual + 50 pontos. Vida atual:", vidaAtual, "pontos");
        console.log("");
    } else { // Demais aliados
        console.log("🎓 O", aliado, "reforça a equipe para o confronto!");
        ouro += 30;
        console.log("+ 30 moedas de ouro. Ouro atual:", ouroAtual, "moedas");
        console.log("");
    }
}

console.log("Equipe completa! A força da união ilumina o horizonte, enquanto a batalha final se aproxima.");
console.log(`XP: ${experiênciaAtual} | Ouro: ${ouroAtual} | Vida atual: ${vidaAtual} | Mana atual: ${manaAtual}`);

//Capítulo 4 - Combinar arrays e loops for tradicionais para criar sistema de batalha
console.log("");
console.log("⚔️ CAPÍTULO 4: CONFRONTO COM AS CRIATURAS DO CÓDICE DO ABISMO");
console.log("");

//Sistema de batalha usando arrrays e for tradicional
let inimigosBatalha = ["Devorador de frequências", "Flor encriptada", "Autômato sombrio"];
let danoRecebido = [];

console.log("A equipe enfrenta", inimigosBatalha.length, "inimigos");
console.log("");

//Batalha usando for para controle preciso
for (let i = 0; i < inimigosBatalha.length; i++) {
    let inimigo = inimigosBatalha[i];
    let danoArquimaga = Math.floor(Math.random() * 70) + 96; //Dano entre 96 e 165

    console.log(`Rodada ${i + 1} - Enfrentando ${inimigo}`);
    console.log(`${nomePersonagem} causa ${danoArquimaga} de dano!`);
    

    danoRecebido.push(danoArquimaga); //Armazena dano para cálculos posteriores

    //Lógica especial para rodada baseada no índice
    if (i === 0) {
        console.log("👾 Primeira vitória! O", inimigo, "é derrotado, deixando para trás uma pedra com frequências condensadas.");
        tesouroColetado.push("🪨 Pedra com frequências condensadas");
        console.log("Novo tesouro coletado. Tesouros coletados:", tesouroColetado);
        console.log("");
    } else if (i === 1) {
        console.log(`💀 Segundo confronto! A ${inimigo} lança seu veneno contra ${nomePersonagem}, a ${classePersonagem} tenta se esquivar mas é tarde demais.`);
        vidaAtual -= 100;
        console.log("Vida -100. Vida atual:", vidaAtual, "pontos");
        console.log("");
    } else {
        console.log("👹 Batalha final! O", inimigo, "perfura o chão com suas garras e desaparece nas profundezas.");
        experiênciaAtual += 300;
        nivelPersonagem++;
        console.log("+300 XP. Experiência atual:", experiênciaAtual, "XP");
        console.log("");
    }
}

//Calculando estatísticas da batalha usando for tradicional
let danoTotal = 0;
for (let i = 0; i < danoRecebido.length; i++) {
    danoTotal += danoRecebido[i];
    console.log(`Rodada ${i + 1} -  Dano: ${danoRecebido[i]}`);
    console.log("");
}

console.log("🔹 Dano total causado:", danoTotal);
console.log("▫️ Tesouros coletados:", tesouroColetado.length, "itens épicos!");
console.log("");

//Epílogo - resultado
console.log("");
console.log("🔺 EPÍLOGO: O TRIUNFO SOBRE AS SOMBRAS");
console.log("");

//Estatísticas finais da jornada
console.log("📶 Estatisticas finais da aventura:");
console.log("");
console.log("🔝 Nível alcançado:", nivelPersonagem);
console.log("📈 Experiência total:", experiênciaAtual, "XP");
console.log("❤️ Vida restante:", vidaAtual, "/", vidaMaxima);
console.log("💰 Ouro acumulado:", ouroAtual, "moedas");
console.log("💼 Quantidade de itens no inventário:", inventario.length);
console.log("👥 Aliados conquistados:", aliados.length);
console.log("🗝️ Quantidade de tesouros épicos:", tesouroColetado.length);
console.log("");

//Adicionar +10 linhas épicas de continuação
console.log("As últimas faíscas do Autômato sombrio desaparecem no ar úmido da torre. ");
console.log("O chão ainda treme pelo impacto da batalha final.");
console.log("A equipe se reúne, exausta, mas de pé.");
console.log("As armas repousam, ainda brilhando com a energia do combate.");
console.log("Os portões da torre se abrem com um estrondo ensurdecedor.");
console.log("Um vento frio atravessa o corredor, carregando o eco da vitória.");
console.log("Lá fora, o horizonte parece mais vasto, como se o mundo estivesse se expandindo");
console.log("As engrenagens da fortaleza giram pela última vez antes de pararem para sempre.");
console.log("O peso da luta dá lugar ao orgulho de ter resistido até o fim.");
console.log("A primeira luz do amanhacer ilumina a fortaleza silenciosa, prometendo um novo começo.");
console.log("A jornada pode ter acabado aqui... mas novas missões aguardam.");
console.log("A lenda de", nomePersonagem, "continua!");