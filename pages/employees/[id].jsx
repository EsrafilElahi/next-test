import Head from 'next/head'
import styles from '../../styles/Employees.module.css'


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(item => {
        return {
            params: { id: item.id.toString() }
        }
    })

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        props: { data }
    }
}




function Item({ data }) {

    return (
        <>
            <Head>
                <title>Employee | {data.id}</title>
            </Head>
            <div className={styles.detailContainer}>
                <h1 className={styles.detail}>Employee Detail</h1><hr />
                <p className={styles.detailName}><span>Name : </span>{data.name}</p>
                <p className={styles.detailName}><span>Email : </span>{data.email}</p>
                <p className={styles.detailName}><span>Website : </span>{data.website}</p>
                <p className={styles.detailName}><span>Company : </span>{data.company.name}</p>
                <p className={styles.detailName}><span>Phone : </span>{data.phone}</p>
            </div>
        </>
    )
}

export default Item

