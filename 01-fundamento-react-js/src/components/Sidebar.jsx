import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
                src="https://images.unsplash.com/photo-1501532358732-8b50b34df1c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            
            <div className={styles.profile}>

                <img className={styles.avatar}
                    src="https://media-exp2.licdn.com/dms/image/C4D03AQG5_iFfkbLbjg/profile-displayphoto-shrink_800_800/0/1516232532571?e=1663804800&v=beta&t=6f0eBYGMPj5eddR7LNJi-Fjss6H8SXkVVjJ65-3EAY0"
                />

                <strong>Conrado Costa</strong>
                <span>Firmware Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}></PencilLine>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );

}