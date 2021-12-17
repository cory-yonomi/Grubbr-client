import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const userProfileContent = {
  backgroundColor: `rgba(93, 130, 51, .8)`,
  height: "100vh",
  padding: "2%",
};

const buttonStyle = {
    width: "150px",
  height: "70px",
  margin: "5px",
  backgroundColor: '#E7D9EA',
  borderRadius: '20px'
}

const UserProfile = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
      // get ONE users SPECIFIC profile
      axios.get(`http://localhost:8000/profile/${props.user._id}`, {
          headers: {
            Authorization: `Bearer ${props.user.token}`,
          },
        })
        .then((profile) => {
          console.log('this is the ONE USERS profile', profile)
          setUser(profile.data);
        })
        .catch((err) => console.log(err));
  }, [])
  

  return (
    <div className="userProfile">
      <div style={userProfileContent}>
        <div className='UserInfo'>
          <h1>{user.firstName} {user.lastName}</h1>
          <h5 className=''>About Me:</h5>
          <p>{user.bio}</p>
        </div>
        <div className='buttonStyle'>
          <Link to="/edit-profile">
            <button style={buttonStyle}>Edit Profile</button>
          </Link>
          {/* <Link to='/delete-profile'><small>Delete Profile</small></Link> */}
          <Link to="/create-profile">
              <button style={buttonStyle}>Create Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;