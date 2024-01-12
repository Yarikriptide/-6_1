const $btnKick = document.getElementById('btn-kick');
const $btnFireBlast = document.getElementById('btn-fire-blast');

const character = createPokemon('Pikachu', 'health-character', 'progressbar-character');
const enemy = createPokemon('Charmander', 'health-enemy', 'progressbar-enemy');

$btnKick.addEventListener('click', () => enemy.handleAttack('Thunder Jolt', random(20)));
$btnFireBlast.addEventListener('click', () => character.handleAttack('Fire Blast', random(30)));

function createPokemon(name, healthId, progressbarId) {
    const elHP = document.getElementById(healthId);
    const elProgressbar = document.getElementById(progressbarId);
    
    return {
        name,
        defaultHP: 100,
        damageHP: 100,
        elHP,
        elProgressbar,
        renderHP() {
            this.elHP.innerText = `${this.damageHP}/${this.defaultHP}`;
            this.elProgressbar.style.width = `${(this.damageHP / this.defaultHP) * 100}%`;
        },
        handleAttack(attackName, damage) {
            console.log(`${this.name} использует ${attackName} и наносит ${damage} урона ${this.name}`);
            
            this.damageHP -= damage; 

            if (this.damageHP <= 0) {
                this.damageHP = 0;
                alert(`Бедный ${this.name} проиграл бой!`);
                $btnKick.disabled = true;
                $btnFireBlast.disabled = true;
            }

            this.renderHP();
        },
    };
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

init();
