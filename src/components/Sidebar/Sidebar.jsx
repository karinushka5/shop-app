import React from 'react';

import styles from '../../styles/Sidebar.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import EosIconsThreeDotsLoading from "../Loader/loader";

const Sidebar = () => {
    const {list, isLoading} = useSelector(({categories}) => categories);
    console.log(isLoading, 'loading categories')
    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    {isLoading && !list.length && EosIconsThreeDotsLoading()}
                    {!isLoading && list.length && list.map(({id, name})=> (
                        (id<=5) && <li key={id}>
                            <NavLink to={`/categories/${id}`}
                            className={({isActive})=> `${styles.link} ${isActive? styles.active : "" }`}>{name}</NavLink>
                        </li>
                    ))}

                </ul>
            </nav>
            <div className={styles.footer}>
                <a href="/help" target="_blank" className={styles.link}>Help</a>
                <a href="/terms" target="_blank" className={styles.link} style={{textDecoration:"underline"}}>Terms & Conditions</a>
            </div>
        </section>
    );
};

export default Sidebar;