import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
  static numeroDeContas = 0;
  constructor(saldoInicial, cliente, agencia){
    super(saldoInicial, cliente, agencia)
    ContaCorrente.numeroDeContas += 1;
  }

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