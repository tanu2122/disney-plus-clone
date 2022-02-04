import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from './db.json';

const Detail = () => {

  const { id } = useParams();

  return <Container>
  {
    db.filter((val) => val.id === id).map((val) => {
        return <>
        <Background>
            <img src={val.backgroundImg} alt={val.title}/>
        </Background>
        <ImageTitle>
            <img src={val.titleImg} alt={val.title} />
        </ImageTitle>
        </>
    })
    
  }
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" alt="" />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
            <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/images/group-icon.png" alt=""/>
            </GroupWatchButton>
        </Controls>
        {
    db.filter((val) => val.id === id).map((val) => {
        return <>
        <Subtitle>
            {val.subTitle}
        </Subtitle>
        <Description>
            {val.description} 
        </Description>
        </>
    })
    
  }
        
  </Container>;
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `
    const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;
    margin-left: 10px;
    img {
        width: 70%;
        height: 70%;
        object-fit: contain;
    }`
    const Controls = styled.div`
    display: flex;
    align-items: center;
    `
    const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 45px;
    background:rgb(249, 249, 249);
    border:none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }

    `
    const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
    `
    const AddButton = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color:rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;
    border: 2px solid white;
    span {
        font-size: 30px;
        color: white;
    }

    `
    const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);
    `

    const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;`
    const Description = styled.div`
    line-height:1.4;
    font-size: 15px;
    margin-top: 16px;
    color: rgb(249, 249, 249);`