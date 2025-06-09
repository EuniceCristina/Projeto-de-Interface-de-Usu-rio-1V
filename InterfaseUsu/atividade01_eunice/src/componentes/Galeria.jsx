import React, { useState } from 'react'
import Card from './Card'
import alya from '../assets/alya.jpg'
import ladybug from '../assets/ladybug.jpg'
import nino from '../assets/nino.jpg'
import catnoir from '../assets/catnoir.jpg'
import vilao from '../assets/vilao.jpg'
import lyla from '../assets/lyla.jpg'
import './Galeria.css'
export default function Galeria(props){
    const [selecionado, setSelecionado] = useState({imagem : null, nome : "", descricao : ""});

    function escolherPersonagem(imagem, nome, descricao) {
        setSelecionado({ imagem, nome, descricao })
      }
    return (
        <>
        <div>
           <h1>Galeria dos personagens</h1>
           <div className="personagens">
            <button className='buttonGeral' onClick={() => escolherPersonagem(ladybug, "Ladybug", "Marinette, a heroína que usa o Miraculous da joaninha para salvar Paris.")}>
                <Card imagem={ladybug} nome='Ladybug' />
            </button>
            <button className='buttonGeral' onClick={() => escolherPersonagem(alya, "Alya", " Melhor amiga da Marinette, fã da Ladybug e dona do blog Ladyblog.")}>
                <Card imagem={alya} nome='Alya' />
            </button>
            <button className='buttonGeral' onClick={() => escolherPersonagem(catnoir, "CatNoir", "Adrien, parceiro de Ladybug, usa o Miraculous do gato preto.")}>
                <Card imagem={catnoir} nome='CatNoir' />
            </button>
            <button className='buttonGeral' onClick={() => escolherPersonagem(nino, "Nino", "Melhor amigo de Adrien, DJ e parceiro do Cat Noir.")}>
                <Card imagem={nino} nome='Nino' />
            </button>
            <button className='buttonGeral' onClick={() => escolherPersonagem(vilao, "Hawk Moth", "Hawk Moth (ou Papillon em francês) transforma em akumatizados para causar problemas a Ladybug e Cat Noir.")}>
                <Card imagem={vilao} nome='Hawk Moth' />
            </button>
            <button className='buttonGeral' onClick={() => escolherPersonagem(lyla, "Lyla", "Repórter que cobre as ações dos heróis em Paris.")}>
                <Card imagem={lyla} nome='Lyla' />
            </button>
           </div>

          
            <div>
            <h2>{selecionado.nome}</h2>
            <img id='imagem' src={selecionado.imagem} alt={selecionado.nome} />
            <p>{selecionado.descricao}</p>
            </div>
  
                
          
           

            
        </div>
        </>
    )
}