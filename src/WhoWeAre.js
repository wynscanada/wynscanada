import 'bootstrap/dist/css/bootstrap.min.css';
import { whoweare } from "./assets/data.js";
import styles from './whoweare.module.css';

function WhoWeAre() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.title}>WHO WE ARE</h1>
                <p className={styles.body}>{whoweare}</p>
                <a className={styles.button}
                   target="_blank" rel="noopener noreferrer" 
                   href="https://drive.google.com/file/d/1viyYQ1lovlO8T2sbsiM9slJrvAOBLzZ4/view?usp=sharing">
                    OUR CERTIFICATION
                </a>
            </div>
            <div className={styles.right}>
                <p className={styles.center}>Insert image here</p>
            </div>
        </div>
    );
}

export default WhoWeAre;
