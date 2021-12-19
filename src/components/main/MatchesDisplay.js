import '../css/MatchesDisplay.css'
import { useEffect } from "react"

const MatchesDisplay = props => {
    // useEffect(() => {
        
    // }, [])

    let pendingMatchesArray = []
    let matchesArray = []

    if (!props.matches && !props.pendingMatches) {

        pendingMatchesArray = props.pendingMatches.map(match => {
            return <p>{match.firstName}</p>
        })

        matchesArray = props.matches.map(match => {
            return <p>{match.firstName}</p>
        })
    }

    return (
        <div className="matchesDisplay">
            <div className="matchesContainer">
            <h2>Pending Matches: </h2>
            <div className="pendingMatches">
                {/* {props.pendingMatches ? {pendingMatchesArray} : <p>'No pending matches'</p> } */}
            </div>
            <h2>Your Matches: </h2>
            <div className="yourMatches">
                {/* {props.matches ? {matchesArray} : <p>No matches, you bum!</p> } */}
            </div>
            </div>
        </div>
    )
}

export default MatchesDisplay