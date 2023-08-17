import styles from '../styles/Card.module.css';
import { useSelector } from 'react-redux';

function Card(props) {

  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardCategory}>
            <h3>Pompes {props.scores.pompesScore}</h3>
            <div className={styles.buttonDiv}>
            <p>1 Pompe genoux</p>
            <button className={styles.addButton} onClick={() => props.updateScore('pompesScore', 0.5)}>+0.5</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>10 Pompes genoux</p>
            <button className={styles.addButton} onClick={() => props.updateScore('pompesScore', 10)}>+10</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>1 Pompe</p>
            <button className={styles.addButton} onClick={() => props.updateScore('pompesScore', 1)}>+1</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>10 Pompes</p>
            <button className={styles.addButton} onClick={() => props.updateScore('pompesScore', 15)}>+15</button>
            </div>
            <span onClick={() => {props.resetScore('pompesScore')}} className={styles.reset}>Reset</span>

        </div>
        <div className={styles.cardCategory}>
            <h3>Abdos {props.scores.abdosScore}</h3>
            <div className={styles.buttonDiv}>
            <p>1 Crunch</p>
            <button className={styles.addButton} onClick={() => props.updateScore('abdosScore', 1)}>+1</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>10 Crunch</p>
            <button className={styles.addButton} onClick={() => props.updateScore('abdosScore', 15)}>+15</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>10s Gainage</p>
            <button className={styles.addButton} onClick={() => props.updateScore('abdosScore', 1)}>+1</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>60s Gainage</p>
            <button className={styles.addButton} onClick={() => props.updateScore('abdosScore', 10)}>+10</button>
            </div>
            <span onClick={() => {props.resetScore('abdosScore')}} className={styles.reset}>Reset</span>
        </div>
        <div className={styles.cardCategory}>
            <h3>Tractions {props.scores.tractionsScore}</h3>
            <div className={styles.buttonDiv}>
            <p>1 Traction supi</p>
            <button className={styles.addButton} onClick={() => props.updateScore('tractionsScore', 2)}>+2</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>5 Tractions supi</p>
            <button className={styles.addButton} onClick={() => props.updateScore('tractionsScore', 20)}>+20</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>1 Traction prona</p>
            <button className={styles.addButton} onClick={() => props.updateScore('tractionsScore', 3)}>+3</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>5 Tractions prona</p>
            <button className={styles.addButton} onClick={() => props.updateScore('tractionsScore', 30)}>+30</button>
            </div>
            <span onClick={() => {props.resetScore('tractionsScore')}} className={styles.reset}>Reset</span>

        </div>
        <div className={styles.cardCategory}>
            <h3>Squats {props.scores.squatsScore}</h3>
            <div className={styles.buttonDiv}>
            <p>1 Squat</p>
            <button className={styles.addButton} onClick={() => props.updateScore('squatsScore', 1)}>+1</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>10 Squats</p>
            <button className={styles.addButton} onClick={() => props.updateScore('squatsScore', 15)}>+15</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>1 Squat Emilie </p>
            <button className={styles.addButton} onClick={() => props.updateScore('squatsScore', 10)}>3</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>10 Squats Emilie</p>
            <button className={styles.addBigButton} onClick={() => props.updateScore('squatsScore', 50)}>50</button>
            </div>
            <span onClick={() => {props.resetScore('squatsScore')}} className={styles.reset}>Reset</span>
        </div>
        <div className={styles.cardCategory}>
            <h3>Cardio {props.scores.cardioScore}</h3>
            <div className={styles.buttonDiv}>
            <p>1 min de course</p>
            <button className={styles.addButton} onClick={() => props.updateScore('cardioScore', 1)}>+1</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>15 min de course</p>
            <button className={styles.addButton} onClick={() => props.updateScore('cardioScore', 20)}>+20</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>30 min de course</p>
            <button className={styles.addBigButton} onClick={() => props.updateScore('cardioScore', 60)}>+60</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>60 min de course</p>
            <button className={styles.addBigButton} onClick={() => props.updateScore('cardioScore', 150)}>+150</button>
            </div>
            <span onClick={() => {props.resetScore('cardioScore')}} className={styles.reset}>Reset</span>

        </div>
        <div className={styles.cardCategory}>
            <h3>Haltères {props.scores.haltèresScore}</h3>
            <div className={styles.buttonDiv}>
            <p>Au choix</p>
            <button className={styles.addButton} onClick={() => props.updateScore('haltèresScore', 1)}>+1</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>Au choix plus dur</p>
            <button className={styles.addButton} onClick={() => props.updateScore('haltèresScore', 5)}>+5</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>Encore plus dur</p>
            <button className={styles.addButton} onClick={() => props.updateScore('haltèresScore', 5)}>+10</button>
            </div>
            <div className={styles.buttonDiv}>
            <p>Pire encore</p>
            <button className={styles.addButton} onClick={() => props.updateScore('haltèresScore', 20)}>+20</button>
            </div>
            <span onClick={() => {props.resetScore('haltèresScore')}} className={styles.reset}>Reset</span>

        </div>
    </div>
  );
}

export default Card;