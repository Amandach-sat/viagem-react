import Styles from '../css/ComProps.module.css'

function ComProps({lugar , bandeira}) {
    return (
        <div className={Styles.cadastro}>
            <h2>Cadastre-se para conhecer esse lugar incrível! {lugar}</h2>
            <img src={bandeira} alt="bandera do pais" className={Styles.imagen_com} />

            <p>nome</p>
            <input type="text" placeholder='Digite seu nome' className={Styles.input_nome} />

            <p>email</p>
            <input type="email" placeholder='Digite seu email' className={Styles.input_email} />

            <p>telefone</p>
            <input type="tel" placeholder='Digite seu telefone' className={Styles.input_telefone} />

            <button>enviar</button>
        </div>
    )
}
export default ComProps