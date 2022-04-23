const cliente1 = new Cliente("Ricardo", "00022233355");
// cliente1.nome = "Ricardo";
// cliente1.cpf = "00022233355";
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
// contaCorrenteRicardo.agencia = 1001;
// contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);


const cliente2 = new Cliente("Alice", 44411133355);
// cliente2.nome = "Alice";
// cliente2.cpf = 44411133355;
const contaCorrenteAlice = new ContaCorrente(1001, cliente2);
// contaCorrenteAlice.agencia = 1001;
// contaCorrenteAlice.cliente = cliente2;

const cliente3 = new Cliente("Wesley", "05841777394");
// cliente3.nome = "Wesley";
// cliente3.cpf = "05841777394";
const conta3 = new ContaCorrente(1001, cliente3);
// conta3.agencia = 1001;
// conta3.cliente = cliente3;




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


const contaPoupanca = new ContaPoupanca(500, cliente1, 1001);
console.log(contaPoupanca)


/*
  export class Conta{
  constructor(tipo, saldoInicial, cliente, agencia){
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
    this._tipo = tipo;
  }

  set cliente(novoValor){
    if(novoValor instanceof Cliente){
      this._cliente = novoValor;
    }
  }

  get cliente(){
    return this._cliente;
  }
  
  get saldo(){
    return this._saldo;
  }

  sacar(valor){
    let taxa = 1;
    if(this._tipo == "corrente"){
      taxa = 1.1;
    } 
    if(this._tipo == "salario"){
      taxa = 1.05;
    } 
    if(this._tipo == "empresarial"){
      taxa = 1.15;
    } 
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
      this._saldo -= valorSacado;
     
      return valorSacado;
    }
    }
  
  
    depositar(valor){
      if(valor > 0){
        this._saldo += valor; 
      }
    }
  
  
    transferir(valor, conta){
      if(this._tipo == "salario"){
        return;
      }
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado); 
    }


}

*/