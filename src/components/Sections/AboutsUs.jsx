import React from "react";
import styled from "styled-components";
import AboutImg from "../../assets/img/about.png"


export default function AboutUs() {
    return (

        <Wrapper id="about">
            <div className="darkBg" style={{ padding: "60px 0" }}>
                <div className="container">
                    <HeaderInfo>
                        <h1 className="font40 extraBold whiteColor">ABOUT US</h1>
                        <p className="font20 semiBold whiteColor" style={{ color: '#f2b300' }}> Innovating the Future, One Solution at a Time </p>
                        <p className="font15 whiteColor">We are committed to delivering innovative solutions that empower businesses to thrive.
                            Our team of experts brings a wealth of experience and passion to every project.We believe in sustainable growth and strive to make a positive impact on the world.
                            Customer satisfaction is at the core of everything we do.
                        </p>
                    </HeaderInfo> <br></br> <br></br>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 whiteColor" >
                            <ul style={{listStyle:'disc'}}>
                                <li><p>ERP TECH has always sort to be a value driven organization and it has more than 14 years of experience these values continue to direct our growth and business.</p></li> <br></br>
                                <li><p>ERP TECH is at the vanguard of ERP solutions, providing incomparable amenities affiliated to the ERP Logistics & Supply Chain Management requests and business goals of our customers</p></li> <br></br>
                                <li><p>Our moralities are trustworthiness, Scrupulousness, Truthfulness, Consistency transparency & reciprocated admiration</p></li> <br></br>
                                <li><p>ERP TECH focusses in technical and IT-related amenities such as edifice cloud, infrastructure, & grid solutions</p></li> <br></br>
                            </ul>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
                            <CardImg>
                            <img src={AboutImg} alt="office" />
                            </CardImg>



                            {/* <svg width="100" height="100" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">

                                <g fill="none" stroke="#000" stroke-width="2">

                                    <rect x="5" y="8" width="54" height="40" rx="3" ry="3" stroke="#3498db" />
                                    <polyline points="20,18 14,24 20,30" stroke="#3498db" />
                                    <polyline points="44,18 50,24 44,30" stroke="#3498db" />
                                    <line x1="26" y1="22" x2="38" y2="22" stroke="#333" />
                                    <line x1="26" y1="28" x2="38" y2="28" stroke="#333" />
                                    <line x1="20" y1="48" x2="44" y2="48" stroke="#333" />
                                    <line x1="30" y1="48" x2="30" y2="56" stroke="#333" />
                                    <line x1="34" y1="48" x2="34" y2="56" stroke="#333" />
                                </g>
                            </svg> */}



                        </div>
                    </div>
                </div>

            </div>
        </Wrapper>






    )
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  text-align:center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const CardImg = styled.div`
 width: 100%;
  height: 25rem;
  overflow: hidden;
  position: relative;
  border-radius: 0.25rem;
  img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}
`;