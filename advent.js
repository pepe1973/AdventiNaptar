let fiokok = document.querySelectorAll('.fiok');

for (let i = 0; i < fiokok.length; i++) {
    fiokok[i].setAttribute('data-bs-toggle', 'modal');
    fiokok[i].setAttribute('data-bs-target', '#myModal');
    fiokok[i].addEventListener('click', () => {
        console.log(i);
    });
}
