import React from "react";
import moment from "moment";

import { Navigation } from "./components/Navigation";
import Title, { Size, Weight } from "./components/Title";
import Link from "./components/Link";

import utilStyles from "./util.module.css";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <div className={styles.MainContent}>
        <Navigation />
        <div className={`${styles.Content} ${utilStyles.Debug}`}>
          <Title
            value={`👋\nHey there *waves*, my name is Alex, software engineer, learner and tinkerer.`}
            size={Size.Large}
            weight={Weight.Heavy}
            className={styles.AboutMe}
          />
          <br />
          <Title
            value={`Impacting communities around me through what I help create has always been what's kept me interested in writing software. My experiences thus far have presented me with opportunities to do just that, and Notable has been no exception. I loved the work I was apart of there, improving doctor-patient visit experiences both in and out of the medical facility.`}
            size={Size.Small}
            weight={Weight.Heavy}
            className={styles.AboutMe}
          />

          <Title value={`Current`} size={Size.Large} weight={Weight.Heavy} margin/>
          <div className={styles.Role}>		          
             <div className={styles.FlexWrapper}>		
               <Title		               
                 value={`Omada`}		 
                 size={Size.Medium}		 
                 weight={Weight.Heavy}
                 className={`${styles.Gradient} ${styles.Omada}`}
               />		
               <span className={`${styles.Text}`}>		
                 joined {moment("20210111").fromNow()}		
               </span>		
            </div>
          </div>

          <div className={styles.Spacer} />

          <Title value={`Previous`} size={Size.Large} weight={Weight.Heavy} margin/>
          <div className={styles.Role}>
            <div className={styles.FlexWrapper}>
              <Title value={`Notable`} size={Size.Medium} weight={Weight.Heavy} className={`${styles.Gradient} ${styles.Notable}`}/>
              <span className={styles.Text}>
                {" "}
                left {moment("20201030").fromNow()}, employed 2 years 6 months
              </span>
            </div>
          </div>
          <div className={styles.Role}>
            <div className={styles.FlexWrapper}>
              <Title value={`Shyp`} size={Size.Medium} weight={Weight.Heavy} />
              <span className={styles.Text}>
                {" "}
                left {moment("20180301").fromNow()}, employed 10 months
              </span>
            </div>
          </div>
          <div className={styles.Role}>
            <div className={styles.FlexWrapper}>
              <Title value={`Aux`} size={Size.Medium} weight={Weight.Heavy} className={`${styles.Gradient} ${styles.Aux}`} />
              <span className={styles.Text}>
                {" "}
                left {moment("20180301").fromNow()}, employed 1 year
              </span>
            </div>
          </div>

          <div className={styles.Spacer} />

          <div className={styles.Contact}>
            <Title value={`Contact`} size={Size.Large} weight={Weight.Heavy} margin/>
            <div className={styles.Contacts}>
              <Link href="mailto:alexaaronpena@gmail.com">
                <Title
                  value={`Email`}
                  size={Size.Medium}
                  weight={Weight.Heavy}
                />
              </Link>
              <Link href="https://medium.com/@alexaaron" newTab>
                <Title
                  value={`Medium`}
                  size={Size.Medium}
                  weight={Weight.Heavy}
                />
              </Link>
              <Link href="https://github.com/Saturn-V" newTab>
                <Title
                  value={`Github`}
                  size={Size.Medium}
                  weight={Weight.Heavy}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/alexaaronpena" newTab>
                <Title
                  value={`LinkedIn`}
                  size={Size.Medium}
                  weight={Weight.Heavy}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
