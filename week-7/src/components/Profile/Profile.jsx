import React from "react";
import "./Profile.css";
import profileImg from "./profile-img.jpg";

const Profile = () => {
	return (
		<div className='profile'>
			<div className='top'>
				{/* <img className='profile-img' src='./profile-img.jpg' alt='Profile image' /> */}
				<img className='profile-img' src={profileImg} alt='Profile image' />
			</div>
			<div className='middle'>
				<div className='person'>
					<div className='person-name'>Maharshi Vashistha</div>
					<div className='person-age'>22</div>
				</div>
				<div className='location'>Hamirpur</div>
			</div>
			<div className='bottom'>
				<div className='social'>
					<div className='number'>80K</div>
					<div className='role'>Followers</div>
				</div>
				<div className='social'>
					<div className='number'>803K</div>
					<div className='role'>Likes</div>
				</div>
				<div className='social'>
					<div className='number'>1.4K</div>
					<div className='role'>Photos</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
