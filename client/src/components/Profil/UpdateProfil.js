import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Uploading from './UploadImg'
import { updateBio } from '../../actions/user.actions'
import { dateParser } from '../Utils'

const UpdateProfil = () => {

    const [bio, setBio] = useState('')
    const [updateForm, setUpdateForm] = useState(false)
    const userData = useSelector((state) => state.userReducer)
    const usersData = useSelector((state) => state.usersReducer)
    const dispatch = useDispatch()
    const [followingPopup, setFollowingPopup] = useState(false)
    const [followersPopup, setFollowersPopup] = useState(false)

    const handleUpdate = () => {
        dispatch(updateBio(userData._id, bio))
        setUpdateForm(false)

    }
    return (
        <div className='profil-container'>
            <h1>Profil de {userData.pseudo}</h1>
            <div className='update-container'>
                <div className='left-part'>
                    <h3>Photo de profil</h3>
                    <img src={userData.picture} alt='user-pic' />
                    {/* <p>{errors.maxSize}</p>
                    <p>{errors.format}</p> */}
                    <Uploading />
                </div>
                <div className='right-part'>
                    <div className='bio-update'>
                        <h3>Bio</h3>
                        {updateForm === false && (
                            <>
                                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                                <button onClick={() => setUpdateForm(!updateForm)}>Update bio</button>
                            </>
                        )}
                        {updateForm && (
                            <>
                                <textarea
                                    type='text'
                                    defaultValue={userData.bio} onChange={(e) => setBio(e.target.value)}>
                                </textarea>
                                <button onClick={handleUpdate}>Validate update</button>
                            </>
                        )}
                    </div>
                    <h4>Member since:  {dateParser(userData.createdAt)}
                        <br />
                        Profile updated:  {dateParser(userData.updatedAt)}</h4>
                </div>
            </div>
            {followingPopup &&
                <div className='popup-profil-container'>
                    <div className='modal'>
                        <h3>Followings</h3>
                        <span className='cross' onClick={() => setFollowingPopup(false)}>&#10005;</span>
                        <ul>
                            {usersData.map((user) => {
                                for (let i = 0; i < userData.following.length; i++) {
                                    if (user._id === userData.following[i]) {
                                        return (
                                            <li key={user._id}>
                                                <img src={user.picture} alt='user-pic' />
                                                <h4>{user.pseudo}</h4>
                                                <div className='follow-handler '>

                                                </div>
                                            </li>
                                        )
                                    }
                                }
                                return null
                            })}

                        </ul>
                    </div>
                </div>

            }
            {followersPopup &&
                <div className='popup-profil-container'>
                    <div className='modal'>
                        <h3>Followers</h3>
                        <span className='cross' onClick={() => setFollowersPopup(false)}>&#10005;</span>
                        <ul>
                            {usersData.map((user) => {
                                for (let i = 0; i < userData.followers.length; i++) {
                                    if (user._id === userData.followers[i]) {
                                        return (
                                            <li key={user._id}>
                                                <img src={user.picture} alt='user-pic' />
                                                <h4>{user.pseudo}</h4>
                                                <div className='follow-handler '>

                                                </div>
                                            </li>
                                        )
                                    }
                                }
                                return null
                            })}

                        </ul>
                    </div>
                </div>

            }
        </div>
    )
}

export default UpdateProfil;