let dinheiro_saldo = 500;
let dinheiro_deposito = 300;
let dinheiro_saque = 400;

function saque(){
    if (dinheiro_saldo >= dinheiro_saque) {
        dinheiro_saldo -= dinheiro_saque;
        console.log(`Saque efetuado com sucesso, saldo atual = R$ ${dinheiro_saldo}`);
    } else {
        console.log("Parece que o seu saque é maior que o saldo");
    }
}

function deposito() {
    dinheiro_saldo += dinheiro_deposito;
    console.log(`Deposito efetuado com sucesso, novo saldo = R$ ${dinheiro_saldo}`);
}

console.log(deposito());
console.log(deposito());
console.log(saque());
console.log(saque());
console.log(saque());
console.log(saque());
