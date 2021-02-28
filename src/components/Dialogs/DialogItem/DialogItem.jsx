import React from 'react';
import cls from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={cls.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={cls.active}>
                <img className={cls.avatar} src="https://sun9-8.userapi.com/c855136/v855136606/2251c4/8wx3mFlFggg.jpg" alt="" />
                <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default DialogItem;