import styles from '../css/Home.module.css'
function Home() {
    return (
        <section className={styles.container_home}>
            <div className={ styles.mala}></div>
            <div className={styles.texto}>
                <h2>encontre aqui a viagem dos seus sonhos</h2>
                <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Excepturi assumenda 
                    voluptatibus doloribus possimus quibusdam 
                    quo earum eum voluptates dolores ratione nihil, 
                    provident numquam culpa odit harum corporis consequatur accusamus hic.</p>
            </div>
        </section>
    )
}
export default Home