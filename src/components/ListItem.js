import React from "react";

const ListItem = ({...props}) => {
    return (item) => (<li>{item}</li>);
    
};

export default ListItem;