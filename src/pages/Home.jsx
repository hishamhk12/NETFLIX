import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main/>
        <Row rowID="1"  title="TvShows" fetchURL={requests.requestTv}/>
        <Row rowID="2" title='Up Coming' fetchURL={requests.requsetUpComing}/>
        <Row rowID="3" title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID="4" title='Now Playing' fetchURL={requests.requsetNowPlaying}/>


    </div>
  )
}

export default Home