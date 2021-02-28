import React from "react";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";
import * as axios from 'axios';
import { userAPI } from "../../api/api";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && styles.selectedPage}
                onClick={(e) => { props.onPagesChanged(p) }}
            >{p}</span>
        })}
        {
            props.users.map(u =>
                <div id={u.id} key={u.id}>
                    <NavLink to={"/profile/" + u.id}>
                        <img className={styles.avatar} src={u.photos.small != null ? u.photos.small : "https://sun9-8.userapi.com/c855136/v855136606/2251c4/8wx3mFlFggg.jpg"} alt="" />
                    </NavLink>
                    {u.name} <br />
                    {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unFollow(u.id);
                        }}>unFollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id);
                        }}>Follow</button>
                    }

                    <br />
                    <span>
                        <span>{u.name} {u.status}</span><br />
                    </span>
                    <span>
                        {"u.location.country"}<br />
                        {"u.location.city"}<br /><br />
                    </span>
                </div>)
        }

    </div>
}

export default Users;
