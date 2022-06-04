const input = document.getElementById('input-texto') as HTMLInputElement;

// Imprimindo no console o valor que foi digitado no input
input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
    
});
