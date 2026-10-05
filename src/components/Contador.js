//DEBEMOS IMPORTAR useState de react
import { useState } from "react"

function Contador() {
    //LAS VARIABLES state SE DECLARAN CON NOMBRE PARA GET
    //Y METODO PARA SET
    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        //PARA MODIFICAR EN LA PAGINA WEB EL NUMERO
        //UTILIZAMOS el del set
        setNumero(numero + 1)
    }

    return(
        <div>
            <h1>Contador State</h1>
            <h3 style={{color:"red"}}>Contador: {numero}</h3>
            <button onClick={ () => incrementar() }>Incrementar</button>
            <button onClick={ () => setNumero(numero - 1) }>Restar</button>
        </div>
    )
}

export default Contador;