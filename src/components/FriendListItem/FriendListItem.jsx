import React from "react";
import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friend}>
      <span className={`${s.status} ${isOnline ? s.online : s.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </span>
      <img className={s.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
