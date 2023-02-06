import Banner from 'Components/Banner'
import Titulo from 'Components/Titulo'
import { useParams } from 'react-router-dom'

import styles from './Player.module.css'
import NaoEncontrada from 'pages/NaoEncontrada'
import { useEffect, useState } from 'react'

function Player(){
    const [video,setVideos]=useState([])
    const {id} = useParams()
    
    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/jggauss/cinetag-api/videos?=id${id}`)
        .then(resposta=>resposta.json())
        .then(dados=>{
            setVideos(...dados)
        })
    },[])


    if(!video){
        return<NaoEncontrada/>
    }
    return (
        <>
            <Banner imagem= "player"/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
            <iframe 
            width="100%" 
            height="100%"
            src={video.link} 
            title={video.titulo} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>

            </iframe>
            </section>

        </>
    )
}

export default Player