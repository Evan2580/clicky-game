import React from "react";

 function FriendCard(props) { //pass in props look at react docs

  return (
    <div className="card" style={{display:'inline-block'}}>
      <div className="img-container"  >
        <img alt={props.name} src={props.image}style={{ height:100, width:100}} />
      </div>
     
    </div>
  );
}

export default FriendCard;
