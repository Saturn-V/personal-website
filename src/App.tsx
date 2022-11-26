import React from "react";
import moment from "moment";

import { Navigation } from "./components/Navigation";
import Title, { Size, Weight } from "./components/Title";
import Link from "./components/Link";

import data from "./data.json";
import resumePDF from "./resume.pdf";
import utilStyles from "./util.module.css";
import styles from "./App.module.css";
import WorkPage from "./pages/Work";

interface Role {
  isActive: boolean;
  name: string;
  joinedAt: number;
  leftAt: number;
  color: string | null;
}

const roles: Role[] = data.roles.sort((a, b) => b.joinedAt - a.joinedAt);
const currentRole = roles.find(({ isActive }) => isActive);

function humanizeRoleDates(
  joinedAtStr: string,
  leftAtStr: string
): [string, string] {
  const part1 = `${moment(joinedAtStr).format("MMMM YYYY")} - ${moment(
    leftAtStr
  ).format("MMMM YYYY")}`;
  const humanizedParts = [];

  const duration = moment.duration(moment(leftAtStr).diff(moment(joinedAtStr)));
  const years = duration.years();
  const months = duration.months();

  // if (years || months) humanizedParts.push("·");
  if (years !== 0) {
    humanizedParts.push(`${years}`);
    if (years > 1) {
      humanizedParts.push("yrs");
    } else {
      humanizedParts.push("yr");
    }
  }
  if (months !== 0) {
    humanizedParts.push(`${months}`);
    if (years > 1) {
      humanizedParts.push("mos");
    } else {
      humanizedParts.push("mo");
    }
  }

  return [part1, humanizedParts.filter(Boolean).join(" ")];
}

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <div className={styles.MainContent}>
        <Navigation />

        <div className={`${styles.Content} ${utilStyles.Debug}`}>
          <div className={styles.Intro}>
            <Title
              value={`👋\nHey there *waves*, my name is Alex, software engineer, learner and tinkerer.`}
              size={Size.Large}
              weight={Weight.Heavy}
              className={styles.AboutMe}
              margin
            />
            <Title
              value={`Impacting communities around me through what I help create has always been what's kept me interested in writing software. My experiences thus far have presented me with opportunities to do just that, and Notable has been no exception. I loved the work I was apart of there, improving doctor-patient visit experiences both in and out of the medical facility.`}
              size={Size.Small}
              weight={Weight.Heavy}
              className={styles.AboutMe}
              margin
            />
          </div>

          <div className={styles.Spacer} />

          <div className={styles.Experience}>
            <Title
              value={`Experience`}
              size={Size.Large}
              weight={Weight.Heavy}
              margin
            />

            <Title value={`Current`} size={Size.Medium} weight={Weight.Heavy} />
            <div className={styles.Role}>
              {currentRole ? (
                <Title
                  value={currentRole.name}
                  size={Size.Medium}
                  weight={Weight.Heavy}
                  className={`${styles.Gradient}`}
                  color={currentRole.color}
                />
              ) : (
                <Title
                  value={`Available for hire!`}
                  size={Size.Medium}
                  weight={Weight.Heavy}
                  gradient
                />
              )}
            </div>

            <div className={styles.Spacer} />

            <Title
              value={`Previous`}
              size={Size.Medium}
              weight={Weight.Heavy}
            />
            {roles.map(({ name, color, joinedAt, leftAt }) => {
              const joinedAtStr = `${joinedAt}`;
              const leftAtStr = `${leftAt}`;
              return (
                <div key={joinedAt + leftAt} className={styles.Role}>
                  <div className={styles.FlexWrapper}>
                    <Title
                      value={name}
                      size={Size.Medium}
                      weight={Weight.Heavy}
                      color={color}
                      gradient
                    />

                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {humanizeRoleDates(joinedAtStr, leftAtStr).map((text) => (
                        <span className={styles.Text}>{text}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.Spacer} />

          <WorkPage />

          <div className={styles.Spacer} />

          <div className={styles.Contact}>
            <Title
              value={`Contact`}
              size={Size.Large}
              weight={Weight.Heavy}
              margin
            />
            <div className={styles.Contacts}>
              <Link href="mailto:alexaaronpena@gmail.com">
                <Title
                  value={`Email`}
                  size={Size.Medium}
                  weight={Weight.Heavy}
                />
              </Link>
              <Link href={resumePDF} newTab>
                <Title
                  value={`Resume`}
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
