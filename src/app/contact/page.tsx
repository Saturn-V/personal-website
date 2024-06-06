import Title, { Size, Weight } from "@/components/Title"
import styles from "./page.module.css"
import Link from "@/components/Link"
import Card from "@/components/Card"

export default function Page() {
  return <div className={styles.Contact}>
    <Title
      value={`Contact`}
      size={Size.Large}
      weight={Weight.Heavy}
      className={styles.title}
      margin
    />

    <Card>
      <div className={styles.Contacts}>
        <Link href="mailto:alexaaronpena@gmail.com">
          <Title
            value={`Email`}
            size={Size.Medium}
            weight={Weight.Heavy}
          />
        </Link>
        <Link href={"/files/resume.pdf"} newTab>
          <Title
            value={`Resume`}
            size={Size.Medium}
            weight={Weight.Heavy}
          />
        </Link>
        {/* <Link href="https://medium.com/@alexaaron" newTab>
        <Title
          value={`Medium`}
          size={Size.Medium}
          weight={Weight.Heavy}
        />
      </Link> */}
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
    </Card>
  </div>
}