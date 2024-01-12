const $btnKick = document.getElementById('btn-kick');
const $btnFireBlast = document.getElementById('btn-fire-blast');

const character = createPokemon('Pikachu', 'health-character', 'progressbar-character');
const enemy = createPokemon('Charmander', 'health-enemy', 'progressbar-enemy');

$btnKick.addEventListener('click', () => handleAttack('Thunder Jolt', enemy, random(20)));
$btnFireBlast.addEventListener('click', () => handleAttack('Fire Blast', character, random(30)));

function createPokemon(name, healthId, progressbarId) {
    const elHP = document.getElementById(healthId);
    const elProgressbar = document.getElementById(progressbarId);
    
    return {
        name,
        defaultHP: 100,
        damageHP: 100,
        elHP,
        elProgressbar,
    };
}

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    person.elHP.innerText = `${person.damageHP}/${person.defaultHP}`;
    person.elProgressbar.style.width = `${(person.damageHP / person.defaultHP) * 100}%`;
}

function handleAttack(attackName, target, damage) {
    console.log(`${target.name} использует ${attackName} и наносит ${damage} урона ${target.name}`);
    
    if (target.damageHP < damage) {
        target.damageHP = 0;
        alert(`Бедный ${target.name} проиграл бой!`);
        $btnKick.disabled = true;
        $btnFireBlast.disabled = true;
    } else {
        target.damageHP -= damage;
    }

    renderHP(target);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();
