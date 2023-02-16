import React from 'react';
import { Container } from './styles';
import PrimaryImage from "../../assets/image-web-3-desktop.jpg"

const Home: React.FC = () => {
  return (
    <Container>
      <div className="left-content">
        <img src={PrimaryImage} alt="Web image" />
        <div className="text">
          <div className="title">
            <h1>The Bright future of web 3.0</h1>
          </div>

          <div className="text-content">
            <span>We dive into the next evolution of the web that claims to put the power of the plataforms back into the hands of people. But is it really fulfilling its promise ?</span>

            <button>Read More</button>
          </div>
        </div>
      </div>

      <div className="right-content">
        <h1>New</h1>

        <div className="new-content">
          <h3>Hydrogen VS Eletric cars</h3>
          <span>Will Hydrogen-fueiried cars over catch up to EVs ?</span>
        </div>
        <div className="new-content">
          <h3>The Downsides of Al Artistry</h3>
          <span>What are the possible adverse effects of on-demand Ai image geneeration ?</span>
        </div>
        <div className="new-content">
          <h3>Is VC Funding Drying Up</h3>
          <span>Private funding by VC firms is down 50 YOY. We take a look at what that means</span>
        </div>
      </div>
    </Container>
  )
}

export default Home;
