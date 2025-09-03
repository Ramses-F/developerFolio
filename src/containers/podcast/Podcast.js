import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection)
    console.error("podcastSection object for Podcast section is missing");

  if (!podcastSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          <a
            href="https://www.youtube.com/@UnJourUneFaille"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.8rem 1.5rem',
              background: 'linear-gradient(90deg, #FF0000 60%, #282828 100%)',
              color: '#fff',
              borderRadius: '30px',
              fontWeight: 'bold',
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              border: 'none',
              margin: '1rem auto',
              maxWidth: '320px',
              cursor: 'pointer',
              gap: '10px'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,0,0,0.15)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.10)';
            }}
          >
            <i className="fab fa-youtube" style={{fontSize: '1.4rem', color: '#fff'}}></i>
            <span style={{fontFamily: 'Montserrat'}}>Voir ma chaîne YouTube</span>
          </a>
        </div>
      </div>
    </Fade>
  );
}
