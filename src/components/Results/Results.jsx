import React from 'react'
import styles from "./Results.module.css";
import skills from "../../data/skills.json";
import history from "../../data/historyR.json";
import { getImageUrl } from "../../utils";

const Results = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Results and Reviews</h2>
       <div className={styles.content}>
       <div className='video'>
       <iframe class="youtube" height="345" src="https://www.youtube.com/embed/mPrD1cRq_B0">
</iframe>
       </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
              
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} ${historyItem.organisation}`}</h3>
                  
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}

export default Results
