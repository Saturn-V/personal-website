import { useNavigation } from '@/context/navigation'
import styles from './index.module.css'

interface Props {
    isOpen: boolean
    toggle: () => void
    className?: string
}
export default function NavIcon({ isOpen, toggle, className }: Props) {
    // const navigation = useNavigation()
    return <>
        <div className={`${styles.menu_icon} ${className}`}>
            <input className={styles.menu_icon_checkbox} type="checkbox" checked={isOpen} onChange={toggle} />
            <div className={styles.icon}>
                <span></span>
                <span></span>
            </div>
        </div>
    </>
}