export class AppFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
             .sg-footer {
                background: linear-gradient(135deg, var(--primary-color) 0%, #1e293b 100%);
                color: rgba(255, 255, 255, 0.75);
                padding-top: 80px;
                border-top: 5px solid var(--accent-color);
                position: relative;
            }

            .footer-heading {
                color: white;
                margin-bottom: 25px;
                font-family: 'Playfair Display', serif;
                font-size: 1.35rem;
                font-weight: 600;
                position: relative;
                padding-bottom: 10px;
            }

            .footer-heading::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 35px;
                height: 2px;
                background-color: var(--accent-color);
            }

            .footer-links a {
                color: rgba(255, 255, 255, 0.65);
                display: block;
                margin-bottom: 12px;
                transition: all 0.3s ease;
                text-decoration: none;
                font-size: 0.95rem;
            }

            .footer-links a:hover {
                color: var(--accent-color);
                transform: translateX(5px);
            }

            .footer-contact {
                padding-left: 0;
                list-style: none;
            }

            .footer-contact li {
                display: flex;
                gap: 15px;
                margin-bottom: 20px;
                font-size: 0.95rem;
                line-height: 1.5;
            }

            .footer-contact i {
                color: var(--accent-color);
                margin-top: 4px;
                font-size: 1.1rem;
            }

            .footer-contact a {
                color: rgba(255, 255, 255, 0.75);
                text-decoration: none;
                transition: color 0.3s ease;
            }

            .footer-contact a:hover {
                color: var(--accent-color);
            }

            .footer-social-link {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                color: rgba(255, 255, 255, 0.85);
                display: inline-flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                text-decoration: none;
            }

            .footer-social-link:hover {
                background: var(--accent-color);
                border-color: var(--accent-color);
                color: var(--primary-color) !important;
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(204, 164, 59, 0.3);
            }

            .copyright {
                background: rgba(0, 0, 0, 0.15);
                border-top: 1px solid rgba(255, 255, 255, 0.05);
                padding: 25px 0;
                text-align: center;
                margin-top: 60px;
                font-size: 0.85rem;
                color: rgba(255, 255, 255, 0.5);
            }

            .map-frame {
                width: 100%;
                height: 230px;
                border: 0;
                border-radius: 8px;
                transition: all 0.5s ease;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
            }

            .map-frame:hover {
                transform: translateY(-3px);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
            }
        </style>
        <footer class="sg-footer" id="contact">
            <div class="container">
                <div class="sg-grid-4">
                    <!-- Col 1: About -->
                    <div>
                        <h5 class="footer-heading">Sahil Group</h5>
                        <p style="color: rgba(255,255,255,0.65); font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px; text-align: justify;">
                            Sahil Group believes that innovative technology is the key asset for success for any business. Sahil Group always tries to adopt new technology available as a part of the technology adaptation. It has installed the most modern garment designing, pattern making, marker making, computer system, and all our cutting departments are equipped with modern fabric inspection machines.
                        </p>
                        <div style="display: flex; gap: 12px; margin-top: 20px;">
                            <a href="https://www.facebook.com/sahilgroupbangladesh" target="_blank" class="footer-social-link"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.youtube.com/@SahilGroupBD" target="_blank" class="footer-social-link"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    <!-- Col 2: Quick Links -->
                    <div>
                        <h5 class="footer-heading">Quick Links</h5>
                        <div class="footer-links">
                            <a href="about.html">Company Profile</a>
                            <a href="knitting.html">Knitting Division</a>
                            <a href="dyeing.html">Dyeing Division</a>
                            <a href="finishing.html">Finishing Division</a>
                            <a href="gallery.html">Gallery</a>
                            <a href="contact.html">Contact Us</a>
                        </div>
                    </div>

                    <!-- Col 3: Contact Info -->
                    <div>
                        <h5 class="footer-heading">Contact</h5>
                        <ul class="footer-contact">
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                <span>North Norsingpur, Kashipur, Fatullah 1400 Narayanganj, Dhaka, Bangladesh.</span>
                            </li>
                            <li>
                                <i class="fas fa-phone"></i>
                                <span>
                                    <a href="tel:+8801713008656">+88 017 1300 8656</a><br>
                                    <a href="tel:+8801713083991">+88 017 1308 3991</a>
                                </span>
                            </li>
                            <li>
                                <i class="fas fa-envelope"></i>
                                <span>
                                    <a href="mailto:sahilgroup@hotmail.com">sahilgroup@hotmail.com</a>
                                    <a href="mailto:nazrulsahilgroup@gmail.com" style="display: block; margin: 5px 0;">nazrulsahilgroup@gmail.com</a>
                                    <a href="mailto:kazisahilgroup@gmail.com">kazisahilgroup@gmail.com</a>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <!-- Col 4: Map -->
                    <div>
                        <h5 class="footer-heading">Location</h5>
                        <iframe class="map-frame"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.628120543332!2d90.46532381491635!3d23.61766638465496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b1b8f75fc5ff%3A0x385b887bcddccb3a!2sSahil%20Group%20Bangladesh!5e0!3m2!1sen!2sus"
                            allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <div class="container">
                    &copy; ${new Date().getFullYear()} Sahil Group. All Rights Reserved.
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('app-footer', AppFooter);
