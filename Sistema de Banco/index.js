class Cliente{
  nome;
  cpf;
  
}

class contaCorrente{
  agencia;
  _saldo = 0;

  sacar(valor){
  if(this._saldo >= valor){
    this._saldo -= valor;
    console.log("Você sacou: ", valor);
    console.log("Seu saldo é: ", this._saldo);
    
  }else{
    console.log("Você não tem saldo o suficiente!", this._saldo)
  }
    return valor;
  }

// COLOCAR # ANTES DA VARIÁVEL QUER DIZER QUE EU ESTOU DEIXANDO ELA PRIVADO


/*
                                  ### OUTRA FORMA ###

  depositar(valor){
    if(valor <= 0)
    {
      return;
    }
    this._saldo += valor
  }

  depositar(valor){
    if(valor <= 0) return;
    this._saldo += valor;
  }

*/



  depositar(valor){
    if(valor > 0){
      this._saldo += valor;
      console.log(`Depósito no valor de: ${valor}\nSaldo atual: ${this._saldo}`)
    }else{
      console.log(this._saldo)
      console.log("Valor incorreto");
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 00022233355;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 44411133355;


const contaCorrenteRicardo = new contaCorrente();
// contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

// ### SAQUES ###
// contaCorrenteRicardo.sacar(50)



// ## DEPÓSITOS ###
contaCorrenteRicardo.depositar(150)
// contaCorrenteRicardo.depositar(150)
// contaCorrenteRicardo.depositar(150)


// ## CONSOLE.LOG ##
const valorSacado = contaCorrenteRicardo.sacar(50)

console.log("Valor sacado:", valorSacado);
console.log(contaCorrenteRicardo); 










// const cliente3 = new Cliente();
// cliente3.nome = "João";
// cliente3.cpf = 88811144422;
// cliente3.agencia = 1001;
// cliente3.saldo = 0;