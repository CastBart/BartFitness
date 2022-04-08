import styles from './Navigation.module.css'

const Navigation = props =>{

    return <div className={styles.navigation} >
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Training Plans</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </div>

}


export default Navigation;