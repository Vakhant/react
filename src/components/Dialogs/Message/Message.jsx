import React from 'react';
import cls from './../Dialogs.module.css';

const Message = (props) => <div className={cls.message} dangerouslySetInnerHTML={{ __html: props.content }}></div>


export default Message;