import {ContaCorrente} from "./ContaCorrente.js";
import {Cliente} from "./Cliente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "00022233355";
const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 44411133355;
const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice.cliente = cliente2;

const cliente3 = new Cliente();
cliente3.nome = "Wesley";
cliente3.cpf = "05841777394";
const conta3 = new ContaCorrente();
conta3.agencia = 1001;
conta3.cliente = cliente3;




// ### SAQUES ###
// contaCorrenteRicardo.sacar(50)



// ## DEPÓSITOS ###
// contaCorrenteRicardo.depositar(150)
// contaCorrenteRicardo.depositar(150)
// contaCorrenteRicardo.depositar(150)


// ## CONSOLE.LOG ##
//const valorSacado = contaCorrenteRicardo.sacar(50)

//console.log("Valor sacado:", valorSacado);

// ### TRANSFERENCIA ###
contaCorrenteRicardo.transferir(200, conta3);


console.log(contaCorrenteRicardo); 
console.log(contaCorrenteAlice); 
console.log(conta3)










// const cliente3 = new Cliente();
// cliente3.nome = "João";
// cliente3.cpf = 88811144422;
// cliente3.agencia = 1001;
// cliente3.saldo = 0;