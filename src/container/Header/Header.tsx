import React from "react";
import { TargetAndTransition } from "framer-motion";
import { images } from "../../constants/images";
import { HeaderContainer, HeaderInfo, HeaderBadgeContainer, IconNameContainer, IconHand, DescriptionContainer, CircleIconContainer, CircleIconBadge, CircleIconBadgeImage, ProfileImageContainer, OverlayCircle } from "./HeaderStyles";
import AppWrap from "../../wrapper/AppWrap";

const Header = () => {

  const viewBehavior: TargetAndTransition = { x:[-100,0], opacity:[0,1] };

  const transition = { duration: 1 };

  const scaleVariants = {
    whileInView: {
      scale: [0 ,1],
      opacity: [0 ,1],
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };
  
  return (
      <HeaderContainer>
        <HeaderInfo whileInView={viewBehavior} transition = {transition}>
            
            <HeaderBadgeContainer>
              <IconNameContainer>
              <IconHand>👋</IconHand>
               <div>
               <p>Hello, I am</p>
                <h1>Kweayon</h1>
               </div>
              </IconNameContainer>

              <DescriptionContainer>
                <p>software developer</p>
                <p>freelancer</p>
              </DescriptionContainer>
            </HeaderBadgeContainer>

        </HeaderInfo>

        <ProfileImageContainer whileInView={{ opacity: [0,1] }} transition={{ duration: 1, delayChildren: 0.5 }}>
         
          <img src={images.profile} alt="profile_bg"/>
          <OverlayCircle whileInView={{ scale: [0, 1] }} transition = {{duration: 1, ease: "easeInOut"}} src={images.circle} alt="profile_circle"/>
        
        </ProfileImageContainer>

        <CircleIconContainer variants={scaleVariants} whileInView = {scaleVariants.whileInView}>
          {[images.flutter, images.redux, images.sass].map((circle, index) => (
            <CircleIconBadge key={`circle-${index}`}>
                <CircleIconBadgeImage src={circle} alt="circle"/>
            </CircleIconBadge>
          ))}
        </CircleIconContainer>
      </HeaderContainer>
    )
}

export default AppWrap(Header, "home", "");