import React from "react";
import {
  ContentDiv,
  FooterDiv,
  FooterWrapper,
  Icon,
  IconDiv,
  LinkDiv,
  Links,
} from "./style";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
function Footer() {
  const footerLinks = [
    "Terms of Use",
    "Privacy Policy",
    "Contact",
    "Blog",
    "FAQ",
  ];
  return (
    <FooterDiv>
      <FooterWrapper>
        <LinkDiv>
          {footerLinks.map((link) => {
            return (
              <Links
                key={link}
                to={link === "Contact" ? "/contact" : ""}
              >
                {link}
              </Links>
            );
          })}
        </LinkDiv>
        <ContentDiv>
          We strive to offer a seamless and delightful shopping experience. From
          our diverse range of high-quality products to our user-friendly
          interface, we are committed to providing our customers with the utmost
          satisfaction. Explore our categories, discover exclusive deals, and
          stay updated on the latest trends. Customer satisfaction is our
          priority, and we value your feedback. Connect with us on social media,
          sign up for our newsletter, and join our community to receive updates
          on new arrivals and special promotions.
        </ContentDiv>
        <IconDiv>
          <Icon
            href='https://www.linkedin.com/in/jeevan-neupane-16a407258/'
            target='_blank'
          >
            <AiFillLinkedin />
          </Icon>
          <Icon
            href='https://jeevanneupane.com.np/'
            target='_blank'
          >
            <CgProfile />
          </Icon>
          <Icon
            href='https://github.com/Jeevan-Neupane'
            target='_blank'
          >
            <FaGithub />
          </Icon>
          <Icon
            href='https://twitter.com/JeevanNeup38484'
            target='_blank'
          >
            <AiFillTwitterCircle />
          </Icon>
        </IconDiv>
      </FooterWrapper>
    </FooterDiv>
  );
}

export default Footer;
