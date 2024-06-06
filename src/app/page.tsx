import React from "react";
import moment from "moment";
import { promises as fs } from 'fs';

import Title, { Size, Weight } from "@/components/Title";

import styles from "./page.module.css";
import Card from "@/components/Card";

interface Role {
  isActive: boolean;
  name: string;
  joinedAt: number;
  leftAt?: number;
  color: string | null;
}

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/src/app/files/data.json', 'utf8');
  const data: { isAvailableForHire: boolean, roles: Role[] } = JSON.parse(file);

  const { isAvailableForHire } = data
  const currentRole = data.roles.find(({ isActive }) => isActive);
  const roles = data.roles.sort((a: any, b: any) => b.joinedAt - a.joinedAt).filter(({ isActive }) => !isActive);

  return (
    <div className={styles.App}>
      <Title
        value={`Experience`}
        size={Size.Large}
        weight={Weight.Heavy}
        className={styles.title}
        margin
      />

      {/* <div className={styles.content}> */}
      <Card className={styles.experience}>
        <>
          <Title value={`Current`} size={Size.Medium} weight={Weight.Heavy} />
          <div className={styles.current}>
            <div className={styles.experiences}>

              {!!currentRole && <div className={styles.role}>
                <Title
                  value={currentRole.name}
                  size={Size.Medium}
                  weight={Weight.Heavy}
                  color={currentRole.color}
                  gradient
                />

                <div style={{ display: "flex", flexDirection: "column" }}>
                  {humanizeRoleDates(currentRole.joinedAt + '').map((text) => (
                    <span key={text} className={styles.Text}>{text}</span>
                  ))}
                </div>
              </div>}
            </div>

            <div className={styles.label}>
              <Title
                value={`Available for hire!`}
                size={Size.Medium}
                weight={Weight.Heavy}
                gradient
              />
            </div>

          </div>
        </>
      </Card>

      <Card className={styles.experience}>
        <>
          <Title
            value={`Previous`}
            size={Size.Medium}
            weight={Weight.Heavy}
          />

          <div className={styles.experiences}>
            {roles.map(({ name, color, joinedAt, leftAt }) => {
              const joinedAtStr = `${joinedAt}`;
              const leftAtStr = leftAt ? `${leftAt}` : void 0;
              return (
                <div key={(joinedAt + '') + (leftAt || '')} className={styles.role}>
                  <Title
                    value={name}
                    size={Size.Medium}
                    weight={Weight.Heavy}
                    color={color}
                    gradient
                  />

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {humanizeRoleDates(joinedAtStr, leftAtStr).map((text) => (
                      <span key={text} className={styles.Text}>{text}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </Card>


      {/* </div> */}
    </div>
  );
};

function humanizeRoleDates(
  joinedAtStr: string,
  leftAtStr?: string,
): string[] {
  let parts: string[] = ["Joined", moment(joinedAtStr).format("MMMM YYYY")]

  if (leftAtStr) {
    parts.push("Left", moment(
      leftAtStr
    ).format("MMMM YYYY"));
  } else {
    leftAtStr = moment().format()
  }

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

  parts.push(humanizedParts.filter(Boolean).join(" "))

  return parts;
}