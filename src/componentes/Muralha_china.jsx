import StyleS from '../css/Muralha_china.module.css'
import ComponenteProps from './componenteprops'
import Bandeira_china from '../assets/imagens/china.png'
import ComProps from './ComProps';

function Muralha_china() {
    return (
        <section className={StyleS.fundo_muralha_china}>
            <h1>venha conhecer a Muralha da China!</h1>
            <ComponenteProps
                lugar="Muralha da China"
                texto="Descubra a grandiosidade e a história da Muralha da China!"
                bandeira={Bandeira_china}
            />

            <ComProps
                lugar="Muralha da China"
                bandeira={Bandeira_china}
            />
        </section>
    );
}
export default Muralha_china