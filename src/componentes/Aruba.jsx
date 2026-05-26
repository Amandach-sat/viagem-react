import StyleS from '../css/Aruba.module.css'
import ComponenteProps from './componenteprops'
import Bandeira_aruba from '../assets/imagens/aruba.png'
import ComProps from './ComProps'


function Aruba() {
    return (
       <section className={StyleS.fundo_aruba}>
        <h1>venha conhecer a Aruba!</h1>
        <ComponenteProps
                lugar="Aruba"
                texto="Descubra a beleza tropical e a rica cultura da Aruba!"
                bandeira={Bandeira_aruba}
            />
        
            <ComProps 
            lugar="Aruba"
            bandeira={Bandeira_aruba}
            />
       </section>
    );
}
export default Aruba