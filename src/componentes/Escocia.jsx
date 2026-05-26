import StyleS from '../css/Escocia.module.css'
import ComponenteProps from './componenteprops'
import Bandeira_escocia from '../assets/imagens/escocia.png'
import ComProps from './ComProps';



function Escocia() {
    return (
        <section className={StyleS.fundo_escocia}>
            <h1>venha conhecer a Escócia!</h1>
            <ComponenteProps
                lugar="Escócia"
                texto="Descubra a beleza natural e a rica cultura da Escócia!"
                bandeira={Bandeira_escocia}
            />
            
            <ComProps 
            lugar="Escócia" 
            bandeira={Bandeira_escocia}
            />
        </section>
    );
}
export default Escocia