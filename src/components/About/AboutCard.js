import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Senthil Kumar </span>
            from <span className="purple"> Erode, India.</span>
            <br />
            I am a third-year student at Bannari Amman Institute of Technology, pursuing a Bachelor’s degree in Artificial Intelligence and Machine Learning.
            <br />
            I am passionate about expanding my knowledge and skills in AI, machine learning, and emerging technologies, with a strong interest in developing innovative solutions and applying intelligent systems to address real-world challenges.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Designing intelligence with purpose."{" "}
          </p>
          <footer className="blockquote-footer">Senthil Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
