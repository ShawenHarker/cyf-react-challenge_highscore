import React from "react";
import allCountryScores from "./Scores";

function CountryName () {
    return (
        <div>
            <ul>
                {allCountryScores.sort((a, b) => (a.name < b.name ? -1 : 1))
                .map ((element, index) => {
                    return (
                        <li className="list-item" key={index}>
                            <h2>{element.name}</h2>
                            <table className="table">
                                <thead>
                                    <th scope="col"></th>
                                </thead>
                                <tbody>
                                {element.scores.sort((a, b) => b.s - a.s)
                                    .map((player) => {
                                        return (
                                            <tr scope="row" key={player.s} className="table-row">
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

export default CountryName;