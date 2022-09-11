let player1 = {
    name: "John SNOW",
    age: 30,
    familly: "Stark"
};

let player2 = {
    name: "Daenerys",
    age: 32,
    familly: "Targaryen"
};

let player3 = {
    name: "Tywin",
    age: 65,
    familly: "Lannister "
};

switch (player1.familly) {
    case 'Stark':
        console.log('Tu es un nordien John Snow !');

        break;
    case 'Lannister':
        console.log('Tu es de Kastle Rock !');

        break;
    case 'Targaryen':
        console.log('Tu es un dragon !');
        break;

    default:
        console.log('Famille inconnu !');
}
