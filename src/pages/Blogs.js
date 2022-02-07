import React from 'react';
import Footers from '../navs/Footers/Footers';
import Headers from '../navs/Headers/Headers';
import { IMAGES } from '../navs/assets';

import { Container, ContainerLeft, Image2Left, Image2LeftDesc, Image2LeftDiv, ImageLeft, ImageLeftDesc, NewsContainerLeft, NewsTitle,
  Image3LeftDiv,Image3Left,Image3LeftDesc, Image4Left,Image4LeftDesc,Image4LeftDiv , ContainerRight, TitleRightDiv, TitleRight, AuthorRightDiv, AuthorRight, DateRightDiv, DateRight, ImageRightPos, ImageRight, DescRightDiv, DescRight, NewsTitleDiv} from './elements-pages/BlogsElements';

const Blogs = () => {
   //Cards data
 const cardData =[
  {id: 0, icon: IMAGES.hammer, title: 'Hammer', path: 'hammer'},
  {id: 1, icon: IMAGES.icon, title: 'Building', path: 'icon'},
  {id: 2, icon: IMAGES.toxic2, title: 'Building', path: 'toxic'},
 ]

  return (
  <>
        <Headers/>
        <Container>
          <ContainerLeft>
            <NewsTitleDiv>
            <NewsTitle>FEATURED BLOGS</NewsTitle>
            </NewsTitleDiv>
            <NewsContainerLeft>
                <ImageLeft src={cardData[0].icon}></ImageLeft>
                <ImageLeftDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum elit,molestie et lorem eu, vehicula mollis risus.</ImageLeftDesc>

                <Image2LeftDiv>
                <Image2Left src={cardData[1].icon}></Image2Left>
                <Image2LeftDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum elit,molestie et lorem eu, vehicula mollis risus.</Image2LeftDesc>
                </Image2LeftDiv>

                <Image3LeftDiv>
                <Image3Left src={cardData[1].icon}></Image3Left>
                <Image3LeftDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum elit,molestie et lorem eu, vehicula mollis risus.</Image3LeftDesc>
                </Image3LeftDiv>

                <Image4LeftDiv>
                <Image4Left src={cardData[1].icon}></Image4Left>
                <Image4LeftDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum elit,molestie et lorem eu, vehicula mollis risus.</Image4LeftDesc>
                </Image4LeftDiv>
            </NewsContainerLeft>
          </ContainerLeft>
          {/* //================================================ */}

          <ContainerRight>
            <TitleRightDiv>
              <TitleRight>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TitleRight>
            </TitleRightDiv>
            <AuthorRightDiv>
              <AuthorRight>BY JOHN DOE</AuthorRight>
            </AuthorRightDiv>

            <DateRightDiv>
              <DateRight>11/02/2021</DateRight>
            </DateRightDiv>

            <ImageRightPos>
              <ImageRight src={cardData[2].icon}/>
            </ImageRightPos>


            <DescRightDiv>
              <DescRight>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis scelerisque ex in pellentesque. Sed pharetra velit vitae nisl congue, 
              aliquet mattis massa volutpat. Nam placerat mauris lorem, vitae ornare ante mattis ac. Praesent euismod ligula tortor, vel feugiat orci molestie dignissim. 
              Vivamus luctus porta libero, quis suscipit mauris imperdiet ac. Suspendisse 
              porttitor sapien in ipsum finibus ornare. Nulla imperdiet risus quis nunc congue faucibus.</DescRight>
            </DescRightDiv>


          </ContainerRight>




        </Container>


        <Footers/>
        
  </>
  )
  ;
}
export default Blogs;