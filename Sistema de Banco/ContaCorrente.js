export class ContaCorrente{
  agencia;
  cliente;


  _saldo = 0;

  sacar(valor){
  if(this._saldo >= valor){
    this._saldo -= valor;
    console.log("Você sacou: ", valor);
    console.log("Seu saldo é: ", this._saldo); 
  }
    return valor;
  }
  depositar(valor){
    if(valor > 0){
      this._saldo += valor; 
    }
  }

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado); 
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