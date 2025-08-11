// Nível 1

// Etapa 1: Criação Variáveis Principais.
let nome = "CriptoBella";
let classe = "Ciber Guerreira";   
let nivel = 10;     
let vida = 100; 
let ouro = 50;      
let xp = 50;


console.log(`🎯A batalha de ${nome} - nível 1\n`)
console.log(`${nome} é uma ${classe}, que protege o Castelo de Firewallia, um local muito protegido contra ataques dos exércitos de Malwere`);
console.log(`Em um dia comum, o exército inimigo decide atacar o reino, para roubar o seu ouro mais precioso: 💰📑 dados pessoais`);
console.log(`Com nivel ${nivel}, ${vida} de vida, ${ouro} moedas e ${xp} de xp, ${nome} é convocada para proteger esse bem tão valioso`);

// Etapa 2: Definição de Constantes Mágicas.
const NOME_ARMA = "Firesword wall";       
let DANO_BASE = 50;
const NOME_ARMADURA = "Malware shield";   
let DEFESA_BASE = 20;

console.log(`A primeira batalha se inicia e ${nome} utiliza sua arma ⚔🗡${NOME_ARMA} para atacar o arqui-inimigo, causando ${DANO_BASE} de dano`);
console.log(`Ele tenta ataca-lá com armas de fogo para esquentar seu processamento, mas ela utiliza seu escudo ${NOME_ARMADURA} para se defender e se resfriar, com ${DEFESA_BASE} de defesa`);

// Etapa 3: Aplicação de Operadores de Atribuição.
vida -= 40; //A personagem foi atacada e perdeu 40 pontos de vida
console.log(`Porém, mesmo com o escudo, o ataque inimigo tirou pontos de sua vida, diminuindo-a para ${vida}`);

xp += 150;  //A personagem treinou e ganhou 150 pontos de esperiência;
ouro -= 30; //Gastou 30 moedas de ouro;
vida += 40; //Recuperou 40 pontos de vida;
DANO_BASE *= 2; //Dano da arma foi dobrado;

console.log(`${nome} percebe que precisa melhorar suas habilidades para conseguir vencer o exercito, então resolve treinar muito mais`);
console.log(`Ela treina constantemente e ganha pontos de experiência, ficando com ${xp} de xp`);
console.log(`Ela também gasta moedas para dobrar o seu dano da arma, voltando para a guerra com ${ouro} de ouro e ${DANO_BASE} de dano em sua arma`);

// Etapa 4: Cálculo de Atributos Finais.
let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel / 2);

console.log(`Quando ${nome} volta ao castelo, pecebe que ele esta quase em ruínas, e precisa passar pelos labirintos de código obscuro`);
console.log(`Seu ataque total esta em ${ataqueTotal}, e sua defesa está em ${defesaTotal}`);
console.log(`Mas será que ela tem forças para continuar?`);

// Etapa5: Avaliação de Prontidão com Operadores Lógicos.
let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log(`Vida suficiente? ${vidaSuficiente}, Ataque forte? ${ataqueForte}, Nível Avançado? ${nivelAvancado}`);
console.log(`Após tantos treinamentos, ela pode enfrentar o exército Malware? ${podeEnfrentarGuardiao}`);
console.log(`Sim, tudo valeu a pena, e agora a batalha final se aproxima!!`);


// Nível 2 - continuação da jornada do nível 1

// Estado atual da história
let localAtual = "Labirinto de códgo obscuro";
let missaoAtual = "atravessa-lo e derrotar o exército de Malwere";

// Recapitulando
console.log(`\n🎯A batalha de ${nome} - nível 2\n`);
console.log(`Como visto anteriormente, a ${classe} ${nome} está em frente a um ${localAtual}, com a missão de ${missaoAtual}.`);

//Novos atribitos para a batalha
let mana1 = ("camuflagem de dados");  //Faz com que a personagem se camufle
let mana2 = ("Ai Processing"); //Usa a inteligencia artificial para prever movimentos inimigos, calcular rotas, etc
let energiaMana1 = 80;  //máx de 100 - mana 1
let energiaMana2 = 80; //max de 100 - mana 2

let forca = 45;     //máximo é 100;
let defesa = 60;    //máximo é 100;
let agilidade = 40; //máximo é 100;
let combatesVencidos = 1;

console.log(`Agora, com novos poderes de ${mana1} = ${energiaMana1} e ${mana2} = ${energiaMana2}, ela segue com ${forca} de força, ${defesa} de defesa e ${agilidade} de agiliade. E ai vem uma grande jornada pela frente...🏹`);

//Capítulo 1: condições simples na narrativa
console.log(`\n📜 Capítulo 1: a fada desfarçada 🧚‍♀️`);
console.log(`Antes de atravessar o ${localAtual}:`);

//Veificação baseada no ouro 
if (ouro > 5) {
    console.log("Uma fada aparece e oferece a ela uma 🍊fruta deliciosa, em troca de algumas de suas moedas, dizendo que a fruta aumentará sua vida, ajudando na batalha");
    console.log(`Porém ${nome} recusa a oferta, desconfiando ser uma fruta Trojan, que a infectaria e 🩸diminuiria sua vida`);
}

//Verificação baseada na forca
if (forca < 50) {
    console.log("A forca física ainda é limitada, ela preisa treinar mais se quiser continuar");
}

//Verificação baseada na agilidade
if (agilidade < 50) {
    console.log(`A ${classe} percebe que seus poderes estão limitados, então decide treinar para aumentá-los`);
    forca += 40;
    agilidade += 30;
    console.log(`Então seus poderes aumentam para força = ${forca} e agilidade = ${agilidade}`);
}

console.log("✔ Agora ela está pronta para seguir sua jornada...");

//Capitulo 2: Escolha estratégica
console.log(`\n📜 Capítulo 2: Atravesando o Labirinto 🧠`);
console.log(`${nome} precisa atravessar o ${localAtual}, composto por milhares de armadilhas lógica e confusas, que está em sua frente, então precisa analisar seus atributos para decidir como fará isso`);

//Sistema baseado em energia de poderes especiais e vida
if (energiaMana2 > 40) {
    console.log(`A ${classe} tem poder de ${mana2} suficiente para calcular rotas`);
    console.log(`Ela utiliza seu poder para reconhecer os padrões e calcular as rotas que a ajudarão escapar do ${localAtual} com segurança`);
    energiaMana2 -= 40;
} else {
    console.log(`A ${classe} não tem poder de ${mana2} suficiente para calcular rotas`);
    vida -= 40;
    console.log(`Ela utiliza sua prórpia energia para reconhecer os padrões e calcular as rotas que a ajudarão escapar do ${localAtual}, gastando 40 de sua vida, ficando agora com ${vida}`);
}

console.log("Agora que ela conseguiu atravesar o labirinto, precisa destruí-lo, para que ninguém corra o perigo de se perder nele");

//Sistema baseado em energia de poderes especiais e atributos
if (energiaMana1 > 40) {
    console.log(`A heroína tem energia em seus poderes de ${mana1}, e decide usá-los`);
    console.log(`Ela se camufla e vai até o ponto de controle do ${localAtual}, sem ser vista pelo guardião, onde deleta todo o código 💣`);
    console.log(`O local começa a sumir, parte por parte.... Agora ninguém corre o risco de se perder 🎉!!`);
    nivel *= 2;
    energiaMana1 -=40;
    xp += 30;
    console.log(`🏆Recompensa: Nível dobrado e experiência aumentada. Nível: ${nivel} / Experiência: ${xp}`);
} else {
    console.log(`Infelizmente a heroína não tem energia suficiente em seus poderes de ${mana1}, então não poerá e camuflar`);
    console.log(`Ela precisará usar sua força, agilidade e defesa para derrotar o guarião e deletar o código`);
    forca -= 20;
    agilidade -= 5;
    defesa -= 10;
    console.log(`O local foi destruído, porém ela perdeu pontos de seus atributos 📉`);
}

console.log(`Agora que esse local perigoso foi destruido, ela pode partir para a parte final... derrotar o líder do exército de Malware`);

//Capítulo 3: A Batalha Decisiva
console.log(`\n📜 Capítulo 3: A Batalha Final!!💥`);
let nomeInimigo = "Robot Malware";
poderInimigo = 70;

console.log(`Agora, ${nome} está em frente a seu grande inimigo, ${nomeInimigo}, e precisa derrotá-lo, tirando todo o poder que está em ${poderInimigo} 🤖🤖`);

//Sistema que define qual será o comabte final da personagem, basedado na situação
if (DANO_BASE >= 50 && forca >= 80) {
    console.log(`Com toda sua força e sua arma ${NOME_ARMA}, ela ataca o inimigo!!`);
    console.log(`A arma corta todos os arquivos malicioso internos do inimigo! 👾`);
    forca /= 2;
    poderInimigo -= (DANO_BASE);
} else if (xp >= 200) {
    console.log(`Sua experiência a ajuda a lembrar de todas as lutas anteriores e ataques já planejados`);
    console.log(`Ela repete o que aprendeu em batalhas anteriores`);
    poderInimigo -= (forca - 15);
} else if (defesa >= 70 && agilidade >=40) {
    console.log(`Com toda sua agilidade e defesa, ela faz um ataque rápido`);
    console.log(`O inimigo perde poder com o ataque`);
    poderInimigo -= agilidade / 2;
} else {
    console.log(`Juntando seus poucos atributos restantes, ela executa um ataque final`);
    poderInimigo -= 40;
}

//Epílogo: resultado final

if (poderInimigo <= 0) {
    console.log(`\nBatalha concluída!!!✨✨ O ${nomeInimigo} foi derrotado!`);
    console.log(`${nome} recupera o 💰ouro preciso: dados pessoais, e fica reconhecida por todo reino!!`);
    xp += 100;
    nivel += 10;
    combatesVencidos++;
    ouro +=90;
} else {
    console.log(`\n${nome} consegue capturar o 💰ouro precioso: dados pessoais, porém não derrota o inimigo!😕`);
    console.log(`Foi uma batalha difícil, e ela sobrevive, mas terá que retornar para derrotar o ${nomeInimigo}`);
}

console.log(`\n📖FIM DO CAPÍTULO - Aguarde o próximo nível`);


// Nível 3 - continuação da jornada

console.log(`\n\n🎯A batalha de ${nome} - nível 3\n`);

localAtual = "Castelo dos Arrays"
console.log(`Após a batalha épica contra o ${nomeInimigo}, a ${classe} ${nome} recebe uma nova missão: explorar o 🏰${localAtual}🏰`);
console.log(`Agora ela segue com - nivel: ${nivel}, vida: ${vida}, xp: ${xp}, ouro: ${ouro}`);

//Novos elementos para a jornada
let inventario = ["Firesword wall", "Malware shield"]; //Ao decorrer da história novos serão adicionados
let inimigosEncontrados = ["Exército Malware", "Robot Malware", "Guardião"]; //Inimigos que já foram encontrados, com o tempo mais serão adicionados
let espacosCastelo = ["Escada descriptografada", "Sala Adware", "Biblioteca Viral"];
let tesouros = []; //Adicionados no decorrer da jornada

console.log(`Antes de entrar ela confere seu invertário, para analisar o que tem guardado:💼 ${inventario} - ${inventario.length} itens`);


//Capítulo 1: Descoberta de novos itens
console.log(`\n📜 Capítulo 1: Explorando e encontando itens`);

//Declaração e Inicialização
console.log(`Conforme ela entrava no castelo, encontrou poções, que seriam úteis para sua jornada.`);
let poçoesEncontradas = ["Poção do resfriamento", "poção IA", "poção de camuflagem"];

//Acesso de elementos e utilizando métodos array para aicionar itens
console.log(`Primeira poção encontrada: 🧪 ${poçoesEncontradas[0]}`);
inventario.push(poçoesEncontradas[0]);
console.log(`E após essa encontrou mais algumas, ficando com ${poçoesEncontradas.length} 🧪`);
inventario.push(poçoesEncontradas[1]);
inventario.push(poçoesEncontradas[2]);

console.log("Os novos itens foram adicionados no iventário. Iventário atual:");
console.table(inventario);

//Utilizando métodos array para modificar itens
inventario[0] = "Firesword wall épica";  // Upgrade da espada
console.log("Ela também gasou algumas moedas para fazer um upgrade em sua espada, chamada agora de " + inventario[0]);
