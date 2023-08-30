import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { emptyStore } from '../reducers/users';
import Card from '../components/Card';
import Warrior from '../components/Warrior';
import Countdown from '../components/Countdown';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Modal } from 'antd';

const backendIP = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_IP;

function Home() {

  const dispatch = useDispatch()
  const targetDate = "2023-09-02T00:00:00";
  const loggedName = useSelector((state) => state.users.value)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inactiveScreen, setInactiveScreen] = useState(false)
  const router = useRouter();


  if (typeof window !== 'undefined' && !loggedName) {
    router.push('/');
  }

  const [warriors, setWarriors] = useState([])
  const [scores, setScores] = useState({
    pompesScore: 0,
    cardioScore: 0,
    squatsScore: 0,
    abdosScore: 0,
    haltèresScore: 0,
    tractionsScore: 0,
    sallyScore: 0,
  });
  const [resetUseEffect, setResetUseEffect] = useState(false)

  const initialScores = {
    pompesScore: 0,
    cardioScore: 0,
    squatsScore: 0,
    abdosScore: 0,
    haltèresScore: 0,
    tractionsScore: 0,
    sallyScore: 0,
  };

  useEffect(() => {
    fetch(`${backendIP}/users/all`)
    .then(response => response.json())
    .then(data => {
      setWarriors(data.warriors)
    })
  },[resetUseEffect])


  const highestScore = warriors.length > 0 ? Math.max(...warriors.map(warrior => warrior.score)) : 0;

  const mappedWarriors = warriors.map(e => {
    return <Warrior name={e.name} score={e.score} actions={e.actions} highestScore={highestScore} />
  })

  const clickedOnValidate = () => {
    fetch(`${backendIP}/users/score/${loggedName}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          score: totalScore,
          actions: scores,
      }),
    })
    .then(response => response.json())
    .then(data => {
      data.result && setScores(initialScores)
      setResetUseEffect(!resetUseEffect)
      setInactiveScreen(false)
    })
  }

  const totalScore = Object.values(scores).reduce((accumulator, currentScore) => accumulator + currentScore, 0);

  const updateScore = (scoreName, increment) => {
    setScores(prevScores => ({
      ...prevScores,
      [scoreName]: prevScores[scoreName] + increment
    }));
  };
  const resetScore = (scoreName) => {
    setScores(prevScores => ({
      ...prevScores, 
      [scoreName] : 0
    }))
  }

  const handleOk = () => {
    clickedOnValidate()
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCountdownComplete = () => {
    setInactiveScreen(true)
    console.log("Le compte à rebours est terminé !");
  }

  const handleLogout = () => {
    dispatch(emptyStore())
    router.push('/');
  }


  return (
    <div>
      <Modal title="T'es sûr de toi?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Tu nous la met pas à l'envers ? Ca serait contraire à l'esprit guerrier ça.</p>
        <p>Aussi, le score sera envoyé dans le Valhalla, on ne pourra plus y toucher après.</p>
      </Modal>
      <main className={styles.main}>
        <button className={styles.logoutButton} onClick={handleLogout}>JE SUIS LÂCHE</button>
        <Countdown targetDate={targetDate} countDownComplete={handleCountdownComplete}/>
        <h1 className={styles.title}>
        LEADERBOARD DES GUERRIERS
        </h1>
        <div className={styles.leaderBoardDiv}>
        {mappedWarriors}
        </div>
        <h2>Session de {loggedName} en cours</h2>
        <h2>Score : {totalScore}</h2>
        <button className={styles.validateButton} onClick={() => totalScore && setIsModalOpen(true)}>VALIDER LA SESSION</button>
        <Card resetScore={resetScore} updateScore={updateScore} scores={scores}/>
        <h2>BRING SALLY UP CHALLENGE</h2>
        <button className={styles.veryBigButton} onClick={() => updateScore('sallyScore', 250)}>+250</button>
      </main>
    </div>
  );
}

export default Home;