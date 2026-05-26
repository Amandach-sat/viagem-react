import StyleS from '../css/Grand_canyon.module.css'
import ComponenteProps from './componenteprops'
import Bandeira_grand_canyon from '../assets/imagens/usa.png'
import ComProps from './ComProps';

function Grand_canyon() {
    return (
        <section className={StyleS.fundo_grand_canyon}>
            <h1>venha conhecer o Grand Canyon!</h1>
            <ComponenteProps
                lugar="Grand Canyon"
                texto="Descubra a grandiosidade e a história do Grand Canyon!"
                bandeira={Bandeira_grand_canyon}
            />

            <ComProps
                lugar="Grand Canyon"
                bandeira={Bandeira_grand_canyon}
            />

        </section>
    )
}
export default Grand_canyon