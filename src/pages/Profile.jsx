import React, { useState } from 'react';
import './Profile.scss';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile,updateProfile } from '../context/profileSlice';
const Profile = () => {
    const [data, setData] = useState({
        name: "", selectedFile: '', position: '',
    });
    const { profile } = useSelector((state) => state.profileSlice)
    console.log(profile)

    const dispatch = useDispatch()
    const handleSubmit = (e) => {

        e.preventDefault();
        if(profile.length===0){
            console.log('create')
            dispatch(createProfile(data))
        }
        else{
            console.log('update')
            console.log(data)
            dispatch(updateProfile(profile[0]._id,data))
        }




    };
    return (
        <div className='user__profile__div'>
            <form action="">
                <input type="text" placeholder='name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                <div className="profileImg">

                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setData({ ...data, selectedFile: base64 })
                        }
                    />


                </div>

                <input type="text" placeholder='position' value={data.position} onChange={(e) => setData({ ...data, position: e.target.value })} />

                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

export default Profile