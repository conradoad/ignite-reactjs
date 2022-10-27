import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
                src="https://images.unsplash.com/photo-1501532358732-8b50b34df1c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            
            <div className={styles.profile}>

                <Avatar src="https://avatars.githubusercontent.com/u/29844580?s=400&u=cf819c4a627fb896a0746e43943483e17adf999d&v=4"/>

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