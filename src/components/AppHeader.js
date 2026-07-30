export class AppHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .sg-header {
                background: var(--white);
                box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
                position: sticky;
                top: 0;
                z-index: 1000;
                padding: 15px 0;
            }

            .sg-nav-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .sg-logo {
                font-size: 24px;
                font-weight: 700;
                color: var(--primary-color);
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .sg-logo img {
                height: 50px;
            }

            .sg-nav-links {
                display: flex;
                gap: 30px;
                align-items: center;
            }

            .sg-nav-links a {
                color: var(--primary-color);
                font-weight: 500;
                font-size: 15px;
                text-transform: uppercase;
                transition: color 0.3s ease;
            }

            .sg-nav-links a:hover,
            .sg-nav-links a.active {
                color: var(--accent-color);
            }

            .sg-nav-links a.nav-social-link {
                font-size: 17px;
            }

            .mobile-menu-btn {
                display: none;
                font-size: 24px;
                cursor: pointer;
            }

            @media(max-width: 768px) {
                .sg-nav-links {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    padding: 20px;
                    box-shadow: 0 15px 30px rgba(15, 23, 42, 0.08);
                    border-top: 1px solid #edf2f7;
                    gap: 5px;
                    z-index: 1100;
                }

                .sg-nav-links.active {
                    display: flex;
                    animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .sg-nav-links a {
                    width: 100%;
                    padding: 12px 20px;
                    border-radius: 8px;
                    display: block;
                    transition: all 0.25s ease;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                }

                .sg-nav-links a:hover,
                .sg-nav-links a.active {
                    background: #f8fafc;
                    color: var(--accent-color);
                    padding-left: 25px;
                }

                .mobile-menu-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 8px;
                    background: #f8fafc;
                    transition: all 0.25s ease;
                    font-size: 20px;
                }

                .mobile-menu-btn:hover {
                    background: rgba(204, 164, 59, 0.1);
                    color: var(--accent-color);
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            }
        </style>
        <header class="sg-header">
            <div class="container sg-nav-container">
                <a href="index.html" class="sg-logo">
                    <img src="/logo.webp" alt="Sahil Group" style="height: 50px;">
                    <span>Sahil Group</span>
                </a>
                <nav class="sg-nav-links">
                    <a href="index.html" id="link-home">Home</a>
                    <a href="about.html" id="link-about">About</a>
                    <a href="knitting.html" id="link-knitting">Knitting</a>
                    <a href="dyeing.html" id="link-dyeing">Dyeing</a>
                    <a href="finishing.html" id="link-finishing">Finishing</a>
                    <a href="gallery.html" id="link-gallery">Gallery</a>
                    <a href="contact.html" id="link-contact">Contact</a>
                    <a href="https://www.facebook.com/kazinazrul.islam.73" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="nav-social-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.youtube.com/@SahilGroupBD" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="nav-social-link"><i class="fab fa-youtube"></i></a>
                </nav>
                <div class="mobile-menu-btn"><i class="fas fa-bars"></i></div>
            </div>
        </header>
        `;

        this.highlightActiveLink();
        this.initMobileMenu();
    }

    initMobileMenu() {
        const btn = this.querySelector('.mobile-menu-btn');
        const nav = this.querySelector('.sg-nav-links');

        if (btn && nav) {
            btn.addEventListener('click', () => {
                nav.classList.toggle('active');
                // Optional: Change icon
                const icon = btn.querySelector('i');
                if (nav.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }
    }

    highlightActiveLink() {
        const currentPath = window.location.pathname;
        const page = currentPath.split('/').pop() || 'index.html';
        const linkId = `link-${page.replace('.html', '')}`;
        const activeLink = this.querySelector(`#${linkId}`);
        if (activeLink) {
            activeLink.classList.add('active');
        } else if (page === 'index.html' || page === '') {
            const homeLink = this.querySelector('#link-home');
            if (homeLink) homeLink.classList.add('active');
        }
    }
}

customElements.define('app-header', AppHeader);
