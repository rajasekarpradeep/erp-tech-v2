import React from "react";
import styled from "styled-components";

export default function Industry() {
    return (

        <Wrapper id="industry">
            <div className="darkBg" style={{ padding: "60px 0" }}>
                <div className="container">
                    <HeaderInfo>
                        <h1 className="font30 extraBold whiteColor" style={{ color: '#f2b300' }}>Industry Expertise</h1>
                    </HeaderInfo> <br></br>
                </div>
                <CardWrapper>
                    <CardContainer>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#f2b300' }}>Chemicals</h2>
                      <p className="font10 semiBold whiteColor">ERP TECH is ready to help chemical corporations deliver pioneering products at scale and as outcome-oriented services with Chemicals add on package. We offer a full range of services to help chemical companies harness powerful innovation and transform their businesses.</p>
                      <br></br>
                    </div>
                    </CardContainer>
                    <CardContainer>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#f2b300' }}>Mill Products</h2>
                      <p className="font10 semiBold whiteColor">We help our clients build new or transform existing applications, scale-up existing development teams, or work to provide operations and support. ERP TECH is ready to help Mill Products deliver pioneering products at scale and as outcome-oriented services with Mill Product add on package</p>
                      <br></br>
                    </div>
                    </CardContainer>
                    <CardContainer>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#f2b300' }}>Mining</h2>
                                           <p className="font10 semiBold whiteColor">Our vision is to enable the natural resources industry adopt a ‘Synchronized Digital Mining’ information strategy. This supports a melodramatic enhancement in mining proficiencies, and reliable production to overcome the encounters of instable commodity prices, escalating costs, and diminishing shareholder return.</p>
                      <br></br>
                    </div>
                    </CardContainer>
                    <CardContainer>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#f2b300' }}>Oil, Gas and Energy</h2>
                      <p className="font10 semiBold whiteColor">We offer OEM expertise and service solutions for all lifecycle. Stage-oil-and-gas-entry-services. MAN Energy Solutions products. ERP TECH provides a full range of declaration, tax, and advisory services, with team members who understand the industry and issues that energy companies face.</p>
                      <br></br>
                    </div>
                    </CardContainer>
                    <CardContainer>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#f2b300' }}>Automotive</h2>
                      <p className="font10 semiBold whiteColor">Artificial intelligence technologies such as machine learning, deep learning, and computer vision find applications in robotic automation within the automotive industry. Digitization has revolutionized automotive industry. With increasing customer demands, stringent regulatory compliances and technology-driven digital.</p>
                      <br></br>
                    </div>
                    </CardContainer>
                    <CardContainer>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#f2b300' }}>High Tech</h2>
                      <p className="font10 semiBold whiteColor">Technology firms usually offer great solutions or platforms for your core business. Partner with FX Consultancy to reduce costs, increase customer satisfaction, modernize your network, and more.</p>
                      <br></br>
                    </div>
                    </CardContainer>
                    <CardContainer>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#f2b300' }}>Healthcare</h2>
                      <p className="font10 semiBold whiteColor">Ensure the safety and security of all of your data and medical records, Lower data capture and entry costs while improving data quality. Custom IT Solutions for your Healthcare Company, New HIPAA regulations, Threat of cyber security attacks, Support for remote working, Support for mobile devices.</p>
                      <br></br>
                    </div>
                    </CardContainer>
                    <CardContainer>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#f2b300' }}>Consumer Products</h2>
                        <p className="font10 semiBold whiteColor">Innovation, rapidly evolving software, and tech-savvy consumers are melodramatically fluctuating the way retail companies produce and dispense products. Success for consumer-packaged goods (CPG) companies depends on efficiency and productivity.</p>
                      <br></br>
                    </div>
                    </CardContainer>
                </CardWrapper>

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

const CardContainer = styled.div`
  width: 100%;
  cursor: default;
  padding: 1.25rem;
  border-radius: 0.25rem;
  background-color:transparent;
   box-shadow: 5px 5px 10px #f2b300;
  transition: transform 0.3s ease-in-out;
  &:hover{
     transform: translateY(-0.5rem);
}


`;

const CardWrapper = styled.div`
text-align:center;
  --space: 1.25rem;
  width: 60%;
  margin: 2rem auto;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
`;