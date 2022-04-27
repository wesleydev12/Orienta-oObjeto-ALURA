// ### CLASE BASE ###

export class Funcionario {
  constructor(nome, salario, cpf) {
    this._nome = nome;
    this._cpf = cpf;
    this._salario = salario;
    this.bonificacao = 1;
  }
}