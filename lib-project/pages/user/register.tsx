import styles from '@/styles/register.module.css';

export default function registerPage() {

    return (
        <main className={`flex min-h-screen`}>
            <form className={styles.formulario}>
                <div className={styles.form_container}>

                    <input type="text" placeholder="Digite o seu nome" />
                    <br />
                    <input type="email" placeholder="Email" min={9} max={64} required />
                    <br />
                    <input type="text" placeholder="Usuário" min={5} max={32} required />
                    <br />
                    <input type="password" placeholder="Senha" min={6} max={32} required />
                    <br />
                    <input type="password" placeholder="Confirmação de Senha" min={6} max={32} required />
                    <br />

                    <button className={styles.form_btn}>Enviar</button>
                </div>
            </form>
        </main>
    );
}