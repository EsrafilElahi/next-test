import Head from 'next/head'
import Styles from '../../styles/Contact.module.css'

function contact() {
    return (
        <div className={Styles.contact}>
            <Head>
                <title>Next Test | Contact Us</title>
            </Head>
            <h1>Be In Touch</h1>
            <h5>Instagram</h5>
            <h5>Twitter</h5>
            <h5>Telegram</h5>
            <h5>Email</h5>
        </div>
    )
}

export default contact
