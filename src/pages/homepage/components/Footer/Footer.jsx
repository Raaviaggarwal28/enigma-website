import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
<footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <div className="footer-col">
              <h4>About</h4>
              <p>Videograph is a fictional video production company. Here, we can display more information about our company and the services we offer.</p>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="footer-col middle">
              <h4>Contact</h4>
              <ul>
                <li><i className="fas fa-envelope"></i> hello@videograph.com</li>
                <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                <li><i className="fas fa-map-marker-alt"></i> 123 Videograph St, Los Angeles, CA 90001</li>
              </ul>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="footer-col last">
              <h4>Social</h4>
              <ul>
                <li><i className="fab fa-facebook-f"></i> Videograph</li>
                <li><i className="fab fa-twitter"></i> @videograph</li>
                <li><i className="fab fa-instagram"></i> @videograph</li>
                <li><i className="fab fa-linkedin-in"></i> Videograph</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
