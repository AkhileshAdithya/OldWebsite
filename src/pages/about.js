import React, { Component } from 'react'
import { Col, Container, Row, Nav, Navbar } from 'react-bootstrap'
import '../components/about.css'
import Background from '../components/background'
import SEO from '../components/seo'
import Image from '../components/image'

import { DiCss3 } from '@react-icons/all-files/di/DiCss3'
import { DiHtml5 } from '@react-icons/all-files/di/DiHtml5'
import { DiJavascript } from '@react-icons/all-files/di/DiJavascript'
import { DiPython } from '@react-icons/all-files/di/DiPython'
import { DiJava } from '@react-icons/all-files/di/DiJava'
import { DiNpm } from '@react-icons/all-files/di/DiNpm'
import { BiCodeAlt } from '@react-icons/all-files/bi/BiCodeAlt'
import { DiReact } from '@react-icons/all-files/di/DiReact'
import { DiHtml53DEffects } from '@react-icons/all-files/di/DiHtml53DEffects'

class About extends Component {
    render() {
        return (
            <div>
                <SEO title="About" description="Hi There, I'm Akhilesh Adithya, a student|web developer|designer" />
                <Background />
                <Navbar expand="md" variant="dark" collapseOnSelect={true}>
                    <a href="https://akhileshadithya.github.io/OldWebsite"><Navbar.Brand>Akhilesh Adithya</Navbar.Brand></a>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <a href="https://akhileshadithya.github.io/OldWebsite/about"><div className="navbar-content">About</div></a>
                            <a href="https://akhileshadithya.github.io/OldWebsite/projects"><div className="navbar-content">Projects</div></a>
                            <a href="https://akhileshadithya.github.io/xertz"><div className="navbar-content">Xertz</div></a>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container className="about">
                    <Row>
                        <Col>
                            <Row className="about-spacing-big">

                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                            <Image src="akhilesh.jpg" className="about-image" />
                        </Col>
                        <Col xs={12} md={9}>
                            <Row>
                                <Col className="about-intro d-flex justify-content-center align-items-center">
                                    Hi There, I'm Akhilesh Adithya
                                </Col>
                            </Row>
                            <Row>
                                <Col className="about-text-white">
                                    I am a full stack web developer proficient in MERN stack, MEVN stack, Three.js and
                                    Scripting in python and JS. I am currently learning AI/ML focussed on Nueral Networks with keras library. 
                                    I'm also interested in computer security, pentesting and prevention of virtual machine detection.
                                    I am also an avid reader who loves reading all sorts of books. I'm mainly interested in books of Asian origins.
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row className="about-spacing-big">

                            </Row>
                        </Col>
                    </Row>
                    {/* <Col className="about-title d-flex justify-content-center align-items-center">
                            About
                        </Col>
                    </Row></Row>
                    <Row>
                        <Col className="about-text d-flex justify-content-center align-items-center">
                            I am a full stack web developer proficient in MERN stack, MEVN stack, Three.js and 
                            Scripting in python and JS. I am currently learning AI/ML in n with tensorflow. I am also an
                            avid reader who loves reading all sorts of books. I'm mainly interested in books of Asian origins.
                        </Col> 
                    </Row> */}
                    <Row>
                        <Col lg={12} className="about-title d-flex justify-content-center align-items-center">
                            Languages and Libraries that I'm good in
                        </Col>
                        <Col>
                            <Row className="about-spacing-small">

                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <Row className="about-icons">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    <DiHtml5 />
                                </Col>
                            </Row>
                            <Row className="about-icon-text">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    HTML
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row className="about-icons">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    <DiJavascript />
                                </Col>
                            </Row>
                            <Row className="about-icon-text">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    Javascript
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row className="about-icons">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    <DiCss3 />
                                </Col>
                            </Row>
                            <Row className="about-icon-text">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    Css
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row className="about-icons">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    <DiReact />
                                </Col>
                            </Row>
                            <Row className="about-icon-text">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    React
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row className="about-icons">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    <DiPython />
                                </Col>
                            </Row>
                            <Row className="about-icon-text">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    Python
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row className="about-icons">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    <BiCodeAlt />
                                </Col>
                            </Row>
                            <Row className="about-icon-text">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    C++
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row className="about-icons">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    <DiHtml53DEffects />
                                </Col>
                            </Row>
                            <Row className="about-icon-text">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    ThreeJS
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row className="about-icons">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    <DiNpm />
                                </Col>
                            </Row>
                            <Row className="about-icon-text">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    Node
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row className="about-icons">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    <DiJava />
                                </Col>
                            </Row>
                            <Row className="about-icon-text">
                                <Col className="d-flex justify-content-center about-icon-holder">
                                    Java
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6}>
                            <Row className="about-spacing-big">

                            </Row>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    HTML/Javascript/CSS
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={100} />
                                </Col>                            
                            </Row>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    Python
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={90} />
                                </Col>                            
                            </Row>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    React
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={90} />
                                </Col>                            
                            </Row>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    Three.js
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={80} />
                                </Col>                            
                            </Row>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    Node
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={70} />
                                </Col>                            
                            </Row>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    Java
                                </Col>
                                <Col xs={12} lg={8}>
                                    <ProgressBar now={60} />
                                </Col>                            
                            </Row>
                            <Row>
                                <Col xs={12} lg={4} className="about-text2 d-flex justify-content-center align-items-center">
                                    C++
                                </Col>
                                <Col className="about-bar" xs={12} lg={8}>
                                    <ProgressBar now={40} />
                                </Col>                            
                            </Row>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col className="about-title d-flex justify-content-center align-items-center" lg={12}>
                            Education
                        </Col>
                        <Col>
                            <Row className="about-spacing-small">

                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col xs={12} lg={3} className="about-year d-flex justify-content-center">
                                    <span className="about-edu-year">2007-2017</span>
                                </Col>
                                <Col xs={12} lg={9}>
                                    <Row className="about-subtitle d-flex justify-content-center align-items-center">
                                        <span className="about-edu-name">Kautilya Vidyalaya, Mysore</span>
                                    </Row>
                                    <Row className="about-text d-flex justify-content-center align-items-center">
                                        I got interested in linux at this point. Started distro hopping and playing with some basic kernel stuff.
                                        Also got introduced to the world of custom roms and rooting in android phones. This sorta gave me the push
                                        to take up computer science as my major.
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className="about-spacing-small">

                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} lg={3} className="about-year d-flex justify-content-center">
                                    2017-2019
                                </Col>
                                <Col xs={12} lg={9}>
                                    <Row className="about-subtitle d-flex justify-content-center align-items-center">
                                        <span className="about-edu-name">Jnanodaya PU College, Mysore</span>
                                    </Row>
                                    <Row className="about-text d-flex justify-content-center align-items-center">
                                        This is where I learnt the basics of Programming and how computers actually worked. Most of my messy 
                                        practical knowledge was fused together with the sctructured theoretial knowledge and this made me more confident 
                                        to pursue a career in the field of Computer Science
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className="about-spacing-small">

                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} lg={3} className="about-year d-flex justify-content-center">
                                    <span className="about-edu-year">2019-2023</span>
                                </Col>
                                <Col xs={12} lg={9}>
                                    <Row className="about-subtitle d-flex justify-content-center align-items-center">
                                        <span className="about-edu-name">Birla Institute of Science and Technology, Goa</span>
                                    </Row>
                                    <Row className="about-text d-flex justify-content-center align-items-center">
                                    This was when I was introduced to computer science as well as developement. Some of my seniors were really
                                        helpful and got me on track. This was also when I learnt about FOSS and was influenced by it's ideology. I learnt
                                        web development and react through the offcial docs. I am currently learning AI/ML focussed around neural networks and the keras library.
                                        I am also learning about pentesting and computer security.
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className="about-spacing-big">

                                    </Row>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col xs={12} lg={3} className="about-year d-flex justify-content-center">
                                    <span className="about-edu-year">2019-2023</span>
                                </Col>
                                <Col>
                                    <Row className="about-subtitle d-flex justify-content-center align-items-center">
                                        <span className="about-edu-name">Birla Institute of Science and Technology, Goa</span>
                                    </Row>
                                    <Row className="about-text d-flex justify-content-center align-items-center about-bottom">
                                        <Col className="about-bottom">This was when I was introduced to computer science as well as developement. Some of my seniors were really
                                        helpful and got me on track. This was also when I learnt about FOSS and was influenced by it's ideology. I learnt
                                        web development and react through the offcial docs. I am currently learning AI/ML focussed around neural networks and the keras library.
                                    </Col></Row>
                                </Col>
                            </Row> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About