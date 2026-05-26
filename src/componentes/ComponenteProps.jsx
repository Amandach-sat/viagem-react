import Styles from '../css/ComponenteProps.module.css'

function ComponenteProps({ lugar, texto, bandeira }) {
    return (
        <div className={Styles.corpo_texto}>
            <h2>venha conhecer esse lugar incrivel!{lugar}</h2>
            <p>{texto}</p>
            <img src={bandeira} alt="bandera do pais" className={Styles.imagen_props} />    
        </div>
    )
}
export default ComponenteProps