import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AppSocialContainer } from "./SocialMediaStyles";

const SocialMedia = () => {
    return (
            <AppSocialContainer>
                <div>
                    <BsTwitter />
                </div>

                <div>
                    <FaFacebookF />
                </div>

                <div>
                    <BsInstagram />
                </div>
                
            </AppSocialContainer>
    );
};

export default SocialMedia;