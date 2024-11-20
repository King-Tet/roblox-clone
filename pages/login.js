import { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // userCredential can be used if necessary
      router.push('/'); // Redirect to homepage
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login with Element Games</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
      <p>
        <br />
        <a href='/signup'>Don't have an account? Sign up here. (not working)</a>
      </p>
    </div>
  );
}
