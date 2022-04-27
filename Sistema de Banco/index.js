import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { Cliente } from "./Cliente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";



const cliente1 = new Cliente("Ricardo", 11122233344);
const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(20);
console.log(contaSalario)