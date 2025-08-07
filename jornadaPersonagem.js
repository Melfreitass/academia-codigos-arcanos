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
let localAtual = "Labirinto de códgo obscuro, no castelo Firewallia"
let missaoAtual = "atravessa-lo e derrotar o exército de Malwere"

// Recapitulando
console.log(`\n🎯A batalha de ${nome} - nível 2\n`);
console.log(`Como visto anteriormente, a ${classe} ${nome} está em frente a um ${localAtual}, com a missão de ${missaoAtual}.`);

//Novos atribitos para a batalha
let mana1 = ("camuflagem de dados")  //Faz com que a personagem se camufle
let mana2 = ("Ai Processing") //Usa a inteligencia artificial para prever movimentos inimigos e hackear sistemas
let energiaMana1 = 100  //máx de 100 - mana 1
let energiaMana2 = 100 //max de 100 - mana 2

let forca = 40;     //máximo é 50;
let defesa = 45;    //máximo é 50;
let agilidade = 30; //máximo é 50;
let combatesVencidos = 1;

console.log(`Agora, com novos poderes de ${mana1} = ${energiaMana1} e ${mana2} = ${energiaMana2}, ela segue com ${forca} de força, ${defesa} de defesa e ${agilidade} de agiliade. E ai vem uma grande jornada pela frente...🏹`);


