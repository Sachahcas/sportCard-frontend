import styles from '../styles/Warrior.module.css'

export default function Warrior(props) {

    const isHighestScore = props.score === props.highestScore 
    return (
        <div className={styles.warriorCard}>
            <h3 className={isHighestScore ? styles.bestNameDisplay : styles.nameDisplay}>{props.name}</h3>
            <p><span>Pompes :</span> <span>{props.actions.pompesScore}</span></p>
            <p>Abdos : {props.actions.abdosScore}</p>
            <p>Tractions : {props.actions.tractionsScore}</p>
            <p>Squats : {props.actions.squatsScore}</p>
            <p>Cardio : {props.actions.cardioScore}</p>
            <p>Haltères : {props.actions.haltèresScore}</p>
            <p className={isHighestScore ? styles.bestTotalDisplay : styles.totalDisplay}>Total : {props.score}</p>
        </div>
    )
}