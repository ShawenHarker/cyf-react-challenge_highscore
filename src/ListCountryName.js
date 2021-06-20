import React, { useState } from "react";

function ListCountryName (props) {
    const sort = [
        {
            class: "ascending",
            value: (a, b) => b.s - a.s
        },
        {
            class: "descending",
            value: (a, b) => a.s - b.s
        }
    ]

    const [sortedScore, setSortedScore] = useState(sort[0]);

    const ToggleScore = () => {
        if (sortedScore === sort[0]) {
            return setSortedScore(sort[1]);
        }else {
        return setSortedScore(sort[0]);
        }
    }
    return (
        <div>
            <ul>
                {props.results.sort((a, b) => (a.name < b.name ? -1 : 1))
                .map ((element, index) => {
                    return (
                        <li className="list-item" key={index}>
                            <h2>{element.name}</h2>
                            <table className="table">
                                <tbody>
                                    {element.scores.sort(ToggleScore)
                                    .map((player) => {
                                        return (
                                            <tr key={player.s} className="table-row">
                                                <th scope="row"></th>
                                                <td className="player-name">{player.n}</td>
                                                <td className="player-score">{player.s}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </li>
                    )
                })}
            </ul> 
        </div>
    )
}

export default ListCountryName;