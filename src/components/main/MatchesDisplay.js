import '../css/MatchesDisplay.css'
import { useEffect } from "react"
import '../css/MatchesDisplay.css'

const MatchesDisplay = props => {
    // useEffect(() => {
        
    // }, [])

    let pendingMatchesArray = []
    let matchesArray = []

    if (props.matches.length >= 1) {
        matchesArray = props.matches.map(match => {
            return (
                <div className="matchCard" key={match._id}>
            <div className="portrait">
            <img src="https://i.imgur.com/k0YbOVE.png" alt="user" className="matchPhoto"/>
            </div>
            <div className="bio">
                <p>{match.firstName}</p>
                <p>{match.zipCode}</p>
                <p>{match.bio}</p>
            </div>
            </div>
            )
        })
    }

    if (props.pendingMatches.length >= 1) {   
        pendingMatchesArray = props.pendingMatches.map(match => {
            return (
                <div className="matchCard">
                    <div className="portrait">
                    <img src="https://i.imgur.com/k0YbOVE.png" alt="user" className="matchPhoto"/>
                    </div>
                    <div className="bio">
                        <p>{match.firstName}</p>
                        <p>{match.zipCode}</p>
                        <p>{match.bio}</p>
                    </div>
                </div>
            )
        })

    }

    return (

        <div className='matchesDiv'>
            <div className='matchDesignDiv'>
            <div>
            <h2>Pending Matches</h2>
                {pendingMatchesArray}
            </div>
            <div>
            <h2>Your Matches</h2>

                {matchesArray}
            </div>
            </div>
        </div>
    )
}

export default MatchesDisplay