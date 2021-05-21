import React from "react";

const Header = (props) => {
    return (
        <div>
            {props.results.map ((element) => (
                <h2 key={element.name}>HIGH SCORES: {element.name}</h2>
            ))}
        </div>
    )
};

export default Header;