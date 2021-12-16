import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/UserProfile.css";

const userProfileContent = {
  backgroundColor: `rgba(93, 130, 51, .8)`,
  height: "100vh",
  padding: "2%",
};

const buttonStyle = {
    width: "85px",
  height: "85px",
  margin: "10px",
}

const UserProfile = (props) => {
  const [user, setUser] = useState([]);

  const useEffect(() => {
      // get ONE users SPECIFIC profile
      axios.get(`http://localhost:8000/profile/${props.user._id}`, {
          headers: {
            Authorization: `Bearer ${props.user.token}`,
          },
        })
        .then((profile) => {
          console.log('this is the ONE USERS profile', profile.data)
          setUser(profile.data);
        })
        .catch((err) => console.log(err));
  }, [])
  

  return (
    <div className="userProfile">
      <div style={userProfileContent}>
        <div className='UserInfo'>
          <h1>{user.firstName}</h1>
          <h3>{}</h3>
        </div>
        <div className='buttonStyle'>
          <Link to="/edit-profile">
            <button className={buttonStyle}>Edit Profile</button>
          </Link>
          {/* <Link to='/delete-profile'><small>Delete Profile</small></Link> */}
          <Link to="/create-profile">
              <button className={buttonStyle}>Create Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
