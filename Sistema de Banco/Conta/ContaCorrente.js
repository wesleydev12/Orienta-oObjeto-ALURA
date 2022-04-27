import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
  static numeroDeContas = 0;
  constructor(saldoInicial, cliente, agencia){
    super(0, cliente, agencia)
    ContaCorrente.numeroDeContas += 1;
}
  sacar(valor){
    let taxa = 1.1;
      return super._sacar(valor, taxa);
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