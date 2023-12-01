import styles from "@/styles/movie.module.css";

export default function page({ movieName }:any) {
    
    return (
        <main>
            <div className={styles.container}>
                <p>O filme selecionado se chama: {movieName}</p>
            </div>
        </main>
    );
}

export function getServerSideProps( context:any ) {
    const { movieName } = context.query;

    return {
        props: {
            movieName
        }
    }
}