import React, { useState } from 'react';
import './ProfileModal.scss';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { profileModalOff } from '../../context/stateSlice';
import { IoMdClose } from "react-icons/io";
import { createProfile,updateProfile  } from '../../context/profileSlice';
import {useNavigate} from 'react-router-dom'


const ProfileModal = () => {

    const { user } = useSelector((state) => state.userSlice)
    const {profiles}  = useSelector((state)=> state.profileSlice)
    const profile = profiles.find((profile)=> profile?.authorSub === user?.sub)
    const nav = useNavigate()

    const [data, setData] = useState({
        name: "", selectedFile: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EADIQAAICAQEGAwYFBQAAAAAAAAABAgMRBBIhMUFhcQUyURNSU4GRsRUiM0LRFEOSwfD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuIAAAAAAAAAyABpK2K69jR3rkgJgV/bP0HtnzQFgESuXNM3jOMuDA2AAAAAAAAAAAAAAAAAILLG9y4AbTuUdy3shlNy4mDAAAEAAADJgASRtlHjvRPCamsp/IqGU8SynvKLgI67NrjxJAAAAAAAAAABrZLZjkCK6eMxRCAQAAAMTnGCzOSiupDqtQqVsrDm+C/2cycpTeZNt+oHSesp9W+yNoaqmTxt477jlDuVHc+3qYOVp9RKlpZzHnFnUhONkFOD3MisgADKezvXEtQkpRTKptVLYl0fEotAAAAAAAAFe+X5sehYKcnlsDAAIAk0otvgkCLVPGnsfQDl2Tds3OXFv6GoBUAAALnh1mJurk967lMl0rxqa8eoHWBlmCKAAC1TLah23G5Bp3va9ScoAAAAANZvEW+hULdnkl2ZUAAAgGtsduuUfVYNh2A4jTTaYLmu07UnbDenxXoUyoAAAWNBDa1KeN0VkginKSjFZb4I6ulo9jXh+Z+YKmMAEAAASU/qIslWr9SJaKAAAAADWXB9iqXCpNYk+4GoAIABiUoxWZSSXUDOOhVt0UJb4PYb5cTM9bUniOZdUaf18Pcl9SiKWhtW5bD65Mw0M2/zyil03kn4hD4cvqPxCHw5fUCxRp66d8Fl82+JIVP6+HuSJa9VTZ+7ZfpLcBMACAAAJKfOWSHTrc2TFAAAAAAIdRHhJfMmMSSaaYFMGZRcZYfEx/zII9RdGmG0+PBLqcu22ds9qb+XI21Frutk+S3R7ERUAAAAAAAAWdNq3ViM3mH2Okmmsp5XqjiF/w63KlW+W+PYKuGUsvAJKI5e0+QE0FsxSNgAAAAAAAAAI7YbSzzRT1DcKbH+5RZ0CDV0e2plCLxJriB54G9tU6pOFkcSRoEAAAAAAAACbRS2dTDruIS54fpbLbYW4xCLzl8+wV0oQcmWUsJJGIxUVhGwAAAAAAAAAAAAABHdTXdHZsipL7HL1Hhc476HtL3XuaOwAPNWV2VvFkJRfVGh6eSUtzWUQT0enn5qY/YDz4O6/DdL8N/5v8AkLw7Sr+19ZP+QOET06S+7y1vHq9yO5Xp6q/JXFfIlA5+m8MrrxK57cly5IvpJLGDIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=', position: '', authorSub: user?.sub,
    });
    const dispatch = useDispatch()

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(profile)
    
        if (!profile) {
            console.log('create')
            dispatch(createProfile(data))
        }
        else {
            console.log('update')
            console.log(data,profile?.authorSub)
            dispatch(updateProfile({ authorSub: profile?.authorSub, data }))

        }
        dispatch(profileModalOff())
        nav('/')




    };
    return (
        <div className='profileModal__div'>
            <section className='modal__center'>
                <div className="modal__content">
                    <h2
                    >Edit intro</h2>
                    <br />
                    <hr /><br />
                    <p>* Indicates required</p>
                    <br />
                    <form action="">
                        <label htmlFor="name">Name*</label>
                        <br />
                        <input type="text" id='name' placeholder='name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                        <br />

                        <label htmlFor='pic'>Profile Pic*</label>
                        <br />
                        <div className="profileImg" id="pic">
                            <FileBase
                            
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) =>
                                    setData({ ...data, selectedFile: base64 })
                                }
                            />
                        </div>
                        
                        <label htmlFor="position">Posiion*</label>
                        <br />
                        <input type="text" placeholder='position' value={data.position} onChange={(e) => setData({ ...data, position: e.target.value })} />
                        <button type='button' className='close icon__button' onClick={() =>profile && dispatch(profileModalOff())}><IoMdClose size={22}/></button>
                        <button className="post__btn" onClick={handleSubmit} >submit</button>
                    </form>

                </div>
            </section>
        </div>
    )
}

export default ProfileModal