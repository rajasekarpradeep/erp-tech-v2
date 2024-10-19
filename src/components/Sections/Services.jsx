import React from "react";
import styled from "styled-components";
// Components
// import ClientSlider from "../Elements/ClientSlider";
// import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

import ServiceImg1 from "../../assets/img/service1.jpg";
import ServiceImg2 from "../../assets/img/service2.jpg";
import ServiceImg3 from "../../assets/img/service3.jpg";
import ServiceImg4 from "../../assets/img/service4.jpg";
import ServiceImg5 from "../../assets/img/service5.jpg";
import ServiceImg6 from "../../assets/img/service6.jpg";
import ServiceImg7 from "../../assets/img/service7.jpg";
import ServiceImg8 from "../../assets/img/service8.jpg";


export default function Services() {
  return (
    <Wrapper id="services">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          {/* <ClientSlider /> }
        </div>
      </div> */}
      <div className="lightBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo style={{ textAlign: 'center' }}>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              We are committed to delivering outstanding services tailored to meet your needs. With a focus on innovation, quality, and customer satisfaction, here’s what sets us apart:              <br />
            </p>
          </HeaderInfo>
          <CardWrapper>
            <CardContainer>
              <CardImg>
                <img src={ServiceImg1} alt="#" />
              </CardImg>
              <div style={{ padding: '0px 10px 0px 10px' }}>
                <h2 className="font20 extraBold" style={{ color: '#132D7B' }}>S/4 HANA Implementation Project</h2>
                <p className="font10 semiBold">SAP allows easy and global integration of business processes by creating an efficient work environment for the users thereby reducing the possibility of errors and redundant information. SAP has immense capabilities to deliver data-driven solutions for various operations, but SAP implementation demands a high-end accuracy and acuteness to yield maximum benefits.</p>
                <BtnWrapper style={{ padding: '0px 10px 0px 10px' }}>
                  <FullButton title="Read more" />
                </BtnWrapper>
              </div>
            </CardContainer>

            <CardContainer>
              <CardImg>
                <img src={ServiceImg2} alt="#" />
              </CardImg>
              <div style={{ padding: '0px 10px 0px 10px' }}>
                <h2 className="font20 extraBold" style={{ color: '#132D7B' }}>S/4 HANA Support Project</h2>
                <p className="font10 semiBold">All Functional support activities (except new requirements) shall be carried out, Our SAP Application Functional Support Services Accountability finding in transaction.</p>
                <br></br>
                <div style={{ justifyContent: 'center' }}>
                  <ul style={{ listStyle: 'disc' }}>
                    <li>Finance & Controlling (FICO)</li>
                    <li>Sales and Distribution (SD)</li>
                    <li>Sales and Distribution (SD)</li>
                    <li>Production Planning (PP)</li>
                    <li>Quality Management (QM)</li>
                    <li>Project Systems (PS)</li>
                  </ul><br></br>
                  <BtnWrapper style={{ padding: '0px 10px 0px 10px' }}>
                    <FullButton title="Read more" />
                  </BtnWrapper>
                </div>

              </div>
            </CardContainer>

            <CardContainer>
              <CardImg>
                <img src={ServiceImg3} alt="#" />
              </CardImg>
              <div style={{ padding: '0px 10px 0px 10px' }}>
                <h2 className="font20 extraBold" style={{ color: '#132D7B' }}>S/4 HANA Rollout Project</h2>
                <p className="font10 semiBold">First, identify your requirements, such as business process, integration flow, and testing scenarios, and then analyze the impact those requirements will have on your organization. For example, when you plan to release a certain global standard in your organization’s financial reporting, each unit may have to create a specific financial transaction/process in SAP to meet that standard requirement. In this case, you’ll need to be aware that there are regions</p>
                <br></br>
                <BtnWrapper style={{ padding: '0px 10px 0px 10px' }}>
                  <FullButton title="Read more" />
                </BtnWrapper>
              </div>
            </CardContainer>
          </CardWrapper>
        </div>

        <div className="lightBg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <CardWrapper>
                  <CardContainer>
                    <CardImg>
                      <img src={ServiceImg1} alt="#" />
                    </CardImg>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#132D7B' }}>The Intelligent Enterprise</h2>
                      <p className="font10 semiBold">An intelligent, sustainable enterprise is one that consistently applies advanced technologies and best practices within agile, integrated business processes. Run at your best with FX Consultancy that can help you grow more robust, more profitable, and more justifiable.</p>
                      <br></br>
                      
                    </div>
                  </CardContainer>
                </CardWrapper>

              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
                <CardWrapper>
                  <CardContainer>
                    <CardImg>
                      <img src={ServiceImg2} alt="#" />
                    </CardImg>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#132D7B' }}>Cloud ERP</h2>
                      <p className="font10 semiBold">Cloud ERP is enterprise resource planning software that is accessible over the Internet. Organizations worldwide use cloud/on-premises ERP to integrate the core business processes needed to run a company in a single instance.</p>
                      <br></br>
                      
                    </div>
                  </CardContainer>
                </CardWrapper>


              </div>
            </div>

          </div>

        </div>
        <div className="lightBg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <CardWrapper>
                  <CardContainer>
                    <CardImg>
                      <img src={ServiceImg4} alt="#" />
                    </CardImg>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#132D7B' }}>The Intelligent Enterprise</h2>
                      <p className="font10 semiBold">An intelligent, sustainable enterprise is one that consistently applies advanced technologies and best practices within agile, integrated business processes. Run at your best with FX Consultancy that can help you grow more robust, more profitable, and more justifiable.</p>
                      <br></br>
                     
                    </div>
                  </CardContainer>
                </CardWrapper>

              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
                <CardWrapper>
                  <CardContainer>
                    <CardImg>
                      <img src={ServiceImg5} alt="#" />
                    </CardImg>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#132D7B' }}>Cloud ERP</h2>
                      <p className="font10 semiBold">Cloud ERP is enterprise resource planning software that is accessible over the Internet. Organizations worldwide use cloud/on-premises ERP to integrate the core business processes needed to run a company in a single instance.</p>
                      <br></br>
                     
                    </div>
                  </CardContainer>
                </CardWrapper>


              </div>
            </div>

          </div>

        </div>

        <div className="lightBg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <CardWrapper>
                  <CardContainer>
                    <CardImg>
                      <img src={ServiceImg6} alt="#" />
                    </CardImg>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#132D7B' }}>The Intelligent Enterprise</h2>
                      <p className="font10 semiBold">An intelligent, sustainable enterprise is one that consistently applies advanced technologies and best practices within agile, integrated business processes. Run at your best with FX Consultancy that can help you grow more robust, more profitable, and more justifiable.</p>
                      <br></br>
                      
                    </div>
                  </CardContainer>
                </CardWrapper>

              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
                <CardWrapper>
                  <CardContainer>
                    <CardImg>
                      <img src={ServiceImg3} alt="#" />
                    </CardImg>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#132D7B' }}>Cloud ERP</h2>
                      <p className="font10 semiBold">Cloud ERP is enterprise resource planning software that is accessible over the Internet. Organizations worldwide use cloud/on-premises ERP to integrate the core business processes needed to run a company in a single instance.</p>
                      <br></br>
                      
                    </div>
                  </CardContainer>
                </CardWrapper>


              </div>
            </div>

          </div>

        </div>

        <div className="lightBg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <CardWrapper>
                  <CardContainer>
                    <CardImg>
                      <img src={ServiceImg7} alt="#" />
                    </CardImg>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#132D7B' }}>The Intelligent Enterprise</h2>
                      <p className="font10 semiBold">An intelligent, sustainable enterprise is one that consistently applies advanced technologies and best practices within agile, integrated business processes. Run at your best with FX Consultancy that can help you grow more robust, more profitable, and more justifiable.</p>
                      <br></br>
                     
                    </div>
                  </CardContainer>
                </CardWrapper>

              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
                <CardWrapper>
                  <CardContainer>
                    <CardImg>
                      <img src={ServiceImg8} alt="#" />
                    </CardImg>
                    <div style={{ padding: '0px 10px 0px 10px' }}>
                      <h2 className="font20 extraBold" style={{ color: '#132D7B' }}>Cloud ERP</h2>
                      <p className="font10 semiBold">Cloud ERP is enterprise resource planning software that is accessible over the Internet. Organizations worldwide use cloud/on-premises ERP to integrate the core business processes needed to run a company in a single instance.</p>
                      <br></br>
                    </div>
                  </CardContainer>
                </CardWrapper>


              </div>
            </div>

          </div>

        </div>



        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A few words about company</h4>
                <h2 className="font40 extraBold">A Study of Creativity</h2>
                <p className="font12">
                  At ERP TECH, we are passionate about empowering businesses through innovative technology solutions. Founded in [Year], our mission is to help companies of all sizes unlock their full potential by providing customized, end-to-end services in web development, mobile app development, cloud solutions, SAP integration, and digital marketing.            </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  padding:0px 10px 0px 10px;
  align-items:center;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const CardImg = styled.div`
 width: 100%;
  height: 15rem;
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

const CardContainer = styled.div`
  width: 100%;
  cursor: default;
  padding: 1.25rem;
  border-radius: 0.25rem;
  background-color:#fefefe ;
  transition: transform 0.3s ease-in-out;
  &:hover{
     transform: translateY(-0.5rem);
}


`;

const CardWrapper = styled.div`
  --space: 1.25rem;
  width: 90%;
  margin: 2rem auto;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;










