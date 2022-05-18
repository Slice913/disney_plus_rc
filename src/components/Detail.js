import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
      // *  TS: 4:52:54
    <Container>
        <Background>
            <img src="https://images.trutv.com/tru/$dyna_params/https%3A%2F%2Fi.cdn.trutv.com%2Fassets%2Ftru%2Fprod%2Fimages%2F2021%2F01%2FRogueOne-AStarWarsStory-1600x900.jpg" />
        </Background>
        <ImgTitle>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/679119E881B53C0ED9485B0A245963AB9E428F65A165908BC64C1AFC46C4D8C6/scale?width=1200&aspectRatio=1.78" />
        </ImgTitle>
        <Controls>
            <PlayButton>
                <img src="/DisImages/play-icon-black.png" alt=" "/>
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src="/DisImages/play-icon-white.png" alt=" "/>
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/DisImages/group-icon.png" alt=" "/>
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2016 · 2hrs · Family, Fantasy, Kids
        </SubTitle>
        <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height:  calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

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
        height: 100%
        object-fit: cover;
    }
`

const ImgTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 25vw;
    min-width: 200px;
    margin-top: 60px;


    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb (249, 249, 249);
    border: none;
    padding: 0px  24px;
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
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color:rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }

`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;  
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;

`