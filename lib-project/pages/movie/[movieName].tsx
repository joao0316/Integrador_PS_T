import styles from "@/styles/movie.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import imageMovie from "@/public/image.png";

export default function page({ movieName }: any) {

    const [movie, setMovie]: any = useState();
    const router = useRouter();

    async function fetchData() {
        try {
            const response = await fetch(`/api/action/movie/find?name=` + movieName, {
                method: 'GET'
            });

            const responseJson = await response.json();

            setMovie(responseJson);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    useEffect(() => {
        fetchData();

    }, []);


    return (
        <main>
            <div className={styles.container}>

                {movie != undefined ?

                    <div className={styles.page}>
                        <img src={imageMovie.src} className={styles.movieImage} />

                        <div className={styles.movieInfos}>
                            <p className={styles.field}>Informações do Filme</p>
                            <p className={styles.field}>O nome do filme é : {movie.name} </p>
                            <p className={styles.field}>A data de lançamento é: {movie.releaseDate} </p>
                        </div>

                    </div>

                    :

                    <div>
                        <p>Filme não encontrado.</p>
                    </div>

                }

            </div>
        </main>
    );
}

export function getServerSideProps(context: any) {
    const { movieName } = context.query;

    return {
        props: {
            movieName
        }
    }
}