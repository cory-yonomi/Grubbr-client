import '../css/CreateProfile.css'
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
        <div>
            <h2>Pending Matches</h2>
            <div>
                {/* {props.pendingMatches ? {pendingMatchesArray} : <p>'No pending matches'</p> } */}
            </div>
            <h2>Your Matches</h2>
            <div>
                {/* {props.matches ? {matchesArray} : <p>No matches, you bum!</p> } */}
            </div>
        </div>
    )
}

export default MatchesDisplay