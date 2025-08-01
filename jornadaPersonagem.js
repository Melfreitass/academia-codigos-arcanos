//Etapa 1: Criação Variáveis Principais.

let nome = "CriptoBella";
let classe = "Ciber Guerreira";   
let nivel = 10;     
let vida = 100; 
let ouro = 50;      
let xp = 1;

//Etapa 2: Definição de Constantes Mágicas.

let NOME_ARMA = "Firesword wall";       
let DANO_BASE = 50;
let NOME_ARMADURA = "Malware shield";   
let DEFESA_BASE = 20;

//Etapa 3: Aplicação de Operadores de Atribuição.

xp += 150;  //A personagem treinou e ganhou 150 pontosde esperiência;
ouro -= 30; //Gastou 30 moedas de ouro;
vida += 40; //Recuperou 40 pontos de vida
DANO_BASE *= 2; //Dano da arma foi dobrado

//Etapa 4: Cálculo de Atributos Finais.
let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel / 2);

//Etapa5: Avaliação de Prontidão com Operadores Lógicos.
