import '../css/SignOut.css'
import { useNavigate } from 'react-router-dom'

import { Button, ButtonGroup } from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
    const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
        signOut(user)
            .finally(() =>
                msgAlert({
                    heading: 'Signed Out Successfully',
                    message: messages.signOutSuccess,
                    variant: 'success',
                })
            )
            .finally(() => navigate('/'))
            .finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

    return (
        <>
            <div className='row signOutDiv'>
                <div className='signOut'>
                    <h2>Are you sure you want to sign out?</h2>
                    <small>We hate to see you go...</small><br />
                    <button className='danger' onClick={onSignOut}>
                        Sign Out
                    </button>
                    <button className='warning' onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    )
}

export default SignOut
