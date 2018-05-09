import React from "react";
import "./FriendCard.css";


const FriendCard = props => (
  <div className="img-container">
    <input className="image-input" value={props.id} type="image" src={props.image} alt={props.name} onClick={() => props.handleIncrement(props.id)}>
    </input>
  </div>

);

export default FriendCard;