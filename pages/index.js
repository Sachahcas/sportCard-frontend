import React, {useState} from 'react'
import styles from '../styles/home.module.css';
import { addUserToStore } from '../reducers/users';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const backendIP = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_IP;

function Index() {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [nameLogin, setNameLogin] = useState('')
    const [wrongName, setWrongName] = useState(false)
    const [alreadyExists, setAlreadyExists] = useState(false)
    const router = useRouter();
    console.log(nameLogin);

const clickedOnGo = () => {
    dispatch(addUserToStore(name))
    fetch(`${backendIP}/users/new/${name}`,{method: 'POST'})
    .then(response => response.json())
    .then(data => {
      data.result ? router.push('/home') : setAlreadyExists(true)
    })
}

const clickedOnSignInGo = () => {
  dispatch(addUserToStore(nameLogin))
  fetch(`${backendIP}/users/login/${nameLogin}`)
  .then(response => response.json())
  .then(data => {
    data.result ? router.push('/home') : setWrongName(true)
  })
}


  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
        T'es nouveau?
        </h1>
        <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Mets ton prénom"></input>
        <button className={styles.validateButton} onClick={() => clickedOnGo()}>Go</button>
        {alreadyExists && <p>Y a déjà un guerrier avec ce nom, trouves-en un mieux pour lui montrer qui tu es</p>}
        <h1 className={styles.title}>
        T'es déjà un guerrier?
        </h1>
        <input className={styles.input} value={nameLogin} onChange={(e) => setNameLogin(e.target.value)} placeholder="Mets ton prénom de guerrier"></input>
        <button className={styles.validateButton} onClick={() => clickedOnSignInGo()}>Go</button>
        {wrongName && <p>Soit tu te fous de moi, soit tu tapes comme une merde</p>}
      </main>
    </div>
  );
}

export default Index;
