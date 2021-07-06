import Head from 'next/head'
import Styles from '../../styles/About.module.css'

function About() {
    return (
        <div className={Styles.about}>
            <Head>
                <title>Next Test | About Us</title>
            </Head>
            <h1>Esrafil Elahi</h1>
            <p>all right reserved 2021</p>
        </div>
    )
}

export default About
