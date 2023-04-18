const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');

// L'evenement au click
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        result.textContent += e.target.id;
        // console.log(result.textContent);
    });
});

// Pour afficher le résultat
equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent);
    
});

// Pour effacer le resultat
clear.addEventListener('click', () => {
    result.textContent = '';
})