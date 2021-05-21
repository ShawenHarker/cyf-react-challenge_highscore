import React from "react";

const DisplayPlayerScore = (props) => {
    return (
        <div>
            <div className="Card">
                {props.results.map ((element) => (
                    <table className="table">
                        <tbody>
                            <tr key={element.n}>{element.n}</tr>
                            <tr key={element.s}>{element.s}</tr>
                        </tbody>
                    </table>
                ))}
            </div>
        </div>
    )
}

export default DisplayPlayerScore;