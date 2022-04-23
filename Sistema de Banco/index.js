import {ContaCorrente} from "./ContaCorrente.js";
import {Cliente} from "./Cliente.js";
import { ContaPoupanca } from "./contaPoupanca.js";
import { Conta } from "./Conta.js";


const cliente1 = new Cliente("Ricardo", 11122233344);
const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupancaRicardo)
console.log(contaCorrenteRicardo)