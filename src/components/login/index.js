import React , {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { handleLogin } from '../../store/actions/login/loginActions'
import styles from './login.module.css'

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { message, logged } = useSelector((state) => state.login);

  const handleLoginView = async () => {
    const response = await dispatch(handleLogin(email,password))
    if(response.type === 'LOGIN_SUCCESS') {
      props.history.push('/home')
    }
  }

  return (
      <>
        <div className={styles.container}>
          <div className={styles.box}>
            <h1 className={styles.loginText}>Iniciar sesión</h1>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button onClick={handleLoginView} className={styles.button}>
              Login
              </button>
            {message && (
              <p
                className={styles.message}
                style={{ color: logged ? '#17fd00' : '#ad2c2c' }}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </>
  );
};

export default Login