import companyLogo from '../../assets/img/avatars/CompLogo.svg';
import styles from './Header.module.css'
import userAvatar from '../../assets/img/avatars/user.png'
import profileIcon from '../../assets/img/icons/Profile-stroke.svg'
export default function Header(props) {
    return <header>
        <section className={`container ${styles.header_container}`}>
            <div className={styles.header_logo}>
                <img src={companyLogo} alt="company_logo" />
            </div>
            <div className={styles.search_container}>
                <span>
                    <input className={styles.header_search_input} name="header_search_input"
                        placeholder="Найти..." />
                </span>
            </div>
                <div className={styles.user_data_container}>
                    <div className={styles.user_data}>
                    <span>Константин</span>
                    <img src={userAvatar} alt="user_avatar" />
                </div>
                </div>
                <div className={styles.profile_icon_container}>
                    <img className={styles.profile_icon} src={profileIcon} alt="profile_icon" />
                </div>
        </section>
        <div className={styles.header_mobile_search_input_container}>
                    <input className={styles.header_search_input_mobile} name="header_search_input"
                        placeholder="Найти..." />
                </div>
    </header>
}