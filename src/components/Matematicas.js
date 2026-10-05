function Matematicas(props) {
    // recuperamos
    let numero = props.numero

    let dobleNum = props.dobleNum
    let tripleNum = props.tripleNum

    return(
        <div>
            <h1>Hijo mates: {numero}</h1>
            <button onClick={() => dobleNum(numero)}>Doblar numero</button>
            <button onClick={() => tripleNum(numero)}>Triplicar numero</button>
        </div>
    )
};

export default Matematicas;