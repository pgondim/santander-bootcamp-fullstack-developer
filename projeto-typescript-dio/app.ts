let button = document.getElementById('action');
let input1 = document.getElementById('number1') as HTMLInputElement;
let input2 = document.getElementById('number2') as HTMLInputElement;

function somar(number1: number, number2: number){
    return (number1 + number2);
}

function printar(variavel: any){
    console.log(variavel);
}

button?.addEventListener('click', () => console.log(somar(Number(input1?.value), Number(input2?.value))));
