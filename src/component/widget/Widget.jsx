import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./widget.css";

const widget = () => {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
     <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      
      {newsArticle('Dawayne the software developer is back', "Breaking News - CNN ")}
     
     
      {newsArticle('Coronavirus: UK updates', "Breaking News - fox45")}
     

      {newsArticle('Tesla hits new highs', "Breaking News - ABC")} 
      

      {newsArticle('Bitcoin breaks $22k', "Breaking News - WJZ")} 


      {newsArticle('React taking over the front-end market', "Breaking News - Tech News")} 
     
      
    </div>
  );
};

export default widget;
