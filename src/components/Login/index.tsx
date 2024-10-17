import styles from "./styles.module.scss";

export default function Login() {
  return (
    <div className={styles.container}>
      <h2>Sign In</h2>

      <form action="">
        <input type="text" placeholder="Digite seu email" />
        <input type="text" placeholder="Digite sua senha" />
        <button>Login</button>
      </form>
    </div>
  );
}
