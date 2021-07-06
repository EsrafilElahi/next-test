import Head from 'next/head'
import styles from '../../styles/Users.module.css'


export async function getServerSideProps(context) {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }
    }
}

function Item({ data }) {

    return (
        <>
            <Head>
                <title>User | {data.id}</title>
            </Head>
            <div className={styles.detailContainer}>
                <h1 className={styles.detail}>User Detail</h1><hr />
                <p className={styles.detailName}><span>Name : </span>{data.name}</p>
                <p className={styles.detailName}><span>Email : </span>{data.email}</p>
                <p className={styles.detailName}><span>Description : </span>{data.body}</p>
            </div>
        </>
    )
}

export default Item
