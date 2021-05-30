import React from "react";
import allCountryScores from "./Scores";

function PlayerRatings () {
    return (
        <div>
            <ul>
                {allCountryScores.sort((a, b) => (a.name < b.name ? -1 : 1))
                .map ((element, index) => {
                    return (
                        <li className="list-item" key={index}>
                            <h2>{element.name}</h2>
                            <table className="table">
                                <tbody>
                                {element.scores.sort((a, b) => b.s - a.s)
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

export default PlayerRatings;