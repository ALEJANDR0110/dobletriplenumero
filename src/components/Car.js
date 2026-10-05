import { useState } from "react"

function Car(props) {
    //VARIABLE PARA AVERIGUAR EL ESTADO DEL COCHE (APAGADO/ENCENDIDO)
    const [estado, setEstado] = useState(false);
    const [velocidad, setvelocidad] = useState(0);
    //DECLARAMOS UN OBJETO COCHE CON LOS DATOS DE PROPS
    let coche = {
        marca: props.marca,
        modelo: props.modelo,
        velocidadMaxima: parseInt(props.velocidadMaxima),
        aceleracion: parseInt(props.aceleracion)
    }

    //VAMOS A CREAR UN METODO QUE DIBUJARA UN HTML DINAMICO
    const comprobarEstado = () => {
        if (estado == true) {
            return (
                <h1 style={{color:"blue"}}>Arrancado</h1>
            )
        } else {
            return (
                <h1 style={{color:"red"}}>Apagado</h1>
            )
        }
    }

    const acelerarCoche = () => {
        if(estado == false) {
            alert("El coche esta apagado")
            setvelocidad(0)
        }else {
            if (velocidad >= coche.velocidadMaxima){
                setvelocidad(coche.velocidadMaxima)
            }else {
                //ACELERAMOS
                setvelocidad(velocidad + coche.aceleracion)
            }
        }
    }
    
    return (
        <div>
            <h1>{coche.marca} {coche.modelo}</h1>
            {/** ESTADO DEL COCHE Y QUE SIEMPRE SE ACTIVE */}
            { comprobarEstado() }
            <h2 style={{color:"fuchsia"}}>Velocidad actual: {velocidad}</h2>
            <button onClick={ () => {setEstado(!estado)} }>On/Off coche</button>
            <button onClick={ () => {acelerarCoche()} }>Acelerar {coche.aceleracion}</button>
        </div>
    )
}

export default Car;