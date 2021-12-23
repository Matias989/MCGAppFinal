import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavReact from "../Navbar/index"
import HomeStyle from "./home.module.css"
import { merge, fadeIn, shake } from 'react-animations'
import Radium from 'radium';
import StyleRoot from 'radium/lib/components/style-root'
const fadeInHeadShake = merge(fadeIn, shake);

const styles = {
    fadeInHeadShake: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInHeadShake, 'fadeInHeadShake')
    }
  }

const Home = () => {
    return (
        <>
            <NavReact></NavReact>
            <Container>
                <Row>
                    <Col className={HomeStyle.TitleText}>
                        <StyleRoot>
                            <div style={styles.fadeInHeadShake}>
                                MCGA
                            </div>
                        </StyleRoot>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home 