import styles from './NaoEncontrada.module.css'

function NaoEncontrada(){
    return(
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado</p>
            <img src="https://http.cat/404" alt="imagem de gato"/>
        </section>
    )
}
export default NaoEncontrada