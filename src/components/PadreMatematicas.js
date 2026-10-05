import Matematicas from './Matematicas'

function PadreMatematicas() {

    const dobleNumero = (numero) => {
        let doble = numero * 2;
        console.log('Doble: ' + doble);
    }

    const tripleNumero = (numero) => {
        let triple = numero * 3
        console.log('Triple: ' + triple);
    }

    return(
        <div>
            <h1>Padre Mate</h1>
            <Matematicas numero='7'  dobleNum={dobleNumero} tripleNum={tripleNumero} />
            <Matematicas numero='99' dobleNum={dobleNumero} tripleNum={tripleNumero} />
        </div>
    )
};

export default PadreMatematicas;