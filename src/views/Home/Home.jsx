import React, { useState } from 'react'
import BGVIDEO from '../../assets/bgvideo.mp4'
import Appinput from '../../components/Appinput/Appinput'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {

  const [img, setImg] = useState("");
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repo, setRepo] = useState("")
  const [url, setUrl] = useState("")


  const loadUser = async (username) => {
    console.log(username);
    try {
      const result = await axios.get(`https://api.github.com/users/${username}`);
      setImg(result.data.avatar_url);
      setName(result.data.name);
      setFollowers(result.data.followers)
      setFollowing(result.data.following)
      setRepo(result.data.public_repos)
      setUrl(result.data.html_url)
      console.log(result.data);
    }
    catch (error) {
      console.log("Error Occurred");
    }
  }

  return (
    <>

      <div className='h-screen w-screen bg-black flex justify-center items-center mt-[1px] pt-[50px]'>
        <div className='h-full w-full absolute top-5 left-5 flex flex-col items-center justify-center gap-8'>

          <video autoPlay loop muted className='h-[80%] w-full absolute object-contain backdrop-blur-md top-25'>
            <source src={BGVIDEO} type="video/mp4" />
          </video>

          <div className='relative h-[200px]  w-[600px] flex justify-center items-center flex-col mt-10  gap-5 z-15'>
            <h1 className='text-5xl font-bold text-white mr-15'>🔍GitFinder</h1>
            <p className='text-[12px] font-bold text-gray-300 md:text-[16px]'> Find GitHub repositories & AC quickly and easily with GitFinder.</p>

            <div className='flex flex-col md:flex-row justify-center items-center w-full gap-3'>
              <Appinput placeholder='Search Here ...' type='text' onChange={(text) => setUserName(text)} />
              <button className='h-[45px] w-[140px] md:w-[140px] bg-blue-800 outline-none border-2 border-white rounded-[7px] text-white font-bold flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-900' onClick={() => loadUser(username)}>
                <i className="fa-solid fa-magnifying-glass"></i> Search
              </button>
            </div>

          </div>

          <div className='h-[150px] w-[150px] rounded-full relative flex justify-center items-center z-10 white bg-white/10 backdrop-blur-sm border-2 border-white/20'>
            <img src={img} alt="" className='h-[140px] w-[140px] rounded-full object-cover' />
          </div>

          <div className='text-white z-10 relative font-bold text-3xl'>
            <h1>{name}</h1>
          </div>

          <div className='text-white z-10 relative font-bold flex gap-10'>
            <span>Repos : {repo}</span>
            <span>Followers : {followers}</span>
            <span>Following : {following}</span>
          </div>

          <div className='relative'>
            <Link to={url} className='text-blue-600 hover:underline text-2xl font-bold' >View Profile</Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home

