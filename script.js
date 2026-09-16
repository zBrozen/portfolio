/**
 * Logique d'interaction du modal de détails de projet
 */

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("project-modal");
    const modalBackdrop = document.getElementById("modal-backdrop");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalContent = document.getElementById("modal-content");

    if (!modal || !modalContent) return;

    // Map d'icônes SVG pour les mécaniques
    const ICONS_MAP = {
        "shield": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        "brush": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/></svg>`,
        "zap": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
        "message-square": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        "monitor": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
        "award": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
        "flame": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"/></svg>`,
        "book-open": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
        "activity": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`
    };

    /**
     * Ouvre le modal et génère son contenu
     */
    function openProjectModal(projectId) {
        if (typeof PROJECTS_DATA === "undefined") return;
        const project = PROJECTS_DATA.find(p => p.id === projectId);
        if (!project) return;

        // Génération du contenu HTML du modal
        modalContent.innerHTML = renderProjectModalHTML(project);

        // Activation du modal
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        // Mise à jour de l'URL hash sans défilement brusque
        if (window.location.hash !== `#${project.id}`) {
            history.pushState(null, "", `#${project.id}`);
        }

        // Initialisation de la visionneuse de la galerie
        initGallery();
    }

    /**
     * Ferme le modal et réinitialise l'état
     */
    function closeProjectModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");

        // Met en pause les vidéos actives dans le modal
        const videos = modalContent.querySelectorAll("video");
        videos.forEach(v => v.pause());

        // Réinitialise l'URL hash sans rechargement
        if (window.location.hash) {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    }

    /**
     * Génère le balisage HTML complet de la fiche projet
     */
    function renderProjectModalHTML(project) {
        const rolesText = project.roles ? project.roles.join(" · ") : "";
        const techBadges = project.tech
            ? project.tech.map(t => `<span class="skill-tag">${t}</span>`).join(" ")
            : "";

        // Génération des paragraphes de l'histoire
        const storyHTML = project.story
            ? project.story.map(paragraph => `<p>${paragraph}</p>`).join("")
            : "";

        // Génération des cartes de mécaniques
        const mechanicsHTML = project.mechanics
            ? project.mechanics.map(m => `
                <div class="mechanic-card">
                    <div class="mechanic-header">
                        <div class="mechanic-icon">
                            ${ICONS_MAP[m.icon] || ICONS_MAP["zap"]}
                        </div>
                        <h4 class="mechanic-title">${m.title}</h4>
                    </div>
                    <p class="mechanic-desc">${m.desc}</p>
                </div>
            `).join("")
            : "";

        // Données Média Initial (Premier élément de la galerie)
        const initialMedia = project.gallery && project.gallery.length > 0 ? project.gallery[0] : null;

        // Génération des vignettes de la galerie
        const galleryThumbsHTML = project.gallery
            ? project.gallery.map((media, index) => {
                const isActive = index === 0 ? "active" : "";
                const isVideo = media.type === "video";
                const thumbSrc = media.poster || media.src;
                return `
                    <button type="button" class="gallery-thumb ${isActive}" data-media-index="${index}" aria-label="Afficher le média ${index + 1}">
                        <img src="${thumbSrc}" alt="${media.caption || 'Miniature'}" />
                        ${isVideo ? `
                            <div class="gallery-thumb-video-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        ` : ''}
                    </button>
                `;
            }).join("")
            : "";

        // Génération des boutons de liens (GitHub, Itch.io, Démo, etc.)
        let linksHTML = "";
        if (project.links) {
            if (project.links.github && project.links.github !== "#") {
                linksHTML += `
                    <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn-project-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                        Code GitHub
                    </a>
                `;
            }
            if (project.links.itch && project.links.itch !== "#") {
                linksHTML += `
                    <a href="${project.links.itch}" target="_blank" rel="noopener noreferrer" class="btn-project-link itch">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2.215 3.518c.038.01.077.02.115.029h19.34c.038-.009.077-.019.115-.029.173.064.297.23.297.426v.444c0 .085-.029.164-.078.228-.01.013-.021.025-.032.037l-2.021 2.215v9.758c0 .885-.717 1.602-1.602 1.602H5.734c-.885 0-1.602-.717-1.602-1.602V6.868L2.11 4.653c-.011-.012-.022-.024-.032-.037a.374.374 0 0 1-.078-.228v-.444c0-.196.124-.362.297-.426zM7.4 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM10.5 15h3v1.5h-3V15z"/></svg>
                        Page Itch.io
                    </a>
                `;
            }
            if (project.links.demo && project.links.demo !== "#") {
                linksHTML += `
                    <a href="${project.links.demo}" target="_blank" rel="noopener noreferrer" class="btn-project-link primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                        Tester la Démo
                    </a>
                `;
            }
        }

        return `
            <div class="modal-project-header">
                <div class="modal-badges-row">
                    <span class="modal-badge dim-badge">${project.dimension}</span>
                    <span class="modal-badge">${project.year}</span>
                    <span class="modal-badge">${project.duration}</span>
                </div>
                <h2 class="modal-project-title">${project.title}</h2>
                <p class="modal-project-tagline">${project.tagline}</p>
            </div>

            <!-- Métadonnées principales -->
            <div class="modal-meta-grid">
                <div class="modal-meta-cell">
                    <span class="modal-meta-label">Rôles occupés</span>
                    <span class="modal-meta-value">${rolesText}</span>
                </div>
                <div class="modal-meta-cell">
                    <span class="modal-meta-label">Équipe</span>
                    <span class="modal-meta-value">${project.teamSize}</span>
                </div>
            </div>

            ${linksHTML ? `<div class="modal-actions">${linksHTML}</div>` : ''}

            <!-- Galerie Multimédia -->
            ${initialMedia ? `
                <div class="modal-gallery">
                    <h3 class="modal-section-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        Illustrations & Vidéos
                    </h3>
                    <div class="gallery-display" id="gallery-display">
                        ${renderMediaHTML(initialMedia)}
                        ${project.gallery && project.gallery.length > 1 ? `
                            <button type="button" class="gallery-nav-btn prev" id="gallery-prev-btn" aria-label="Média précédent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                            </button>
                            <button type="button" class="gallery-nav-btn next" id="gallery-next-btn" aria-label="Média suivant">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                            </button>
                        ` : ''}
                    </div>
                    <p class="gallery-caption" id="gallery-caption">${initialMedia.caption || ''}</p>
                    ${project.gallery.length > 1 ? `
                        <div class="gallery-thumbnails" id="gallery-thumbnails">
                            ${galleryThumbsHTML}
                        </div>
                    ` : ''}
                </div>
            ` : ''}

            <!-- Histoire et rôle -->
            ${storyHTML ? `
                <div class="modal-story">
                    <h3 class="modal-section-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        L'Histoire du Projet & Mon Rôle
                    </h3>
                    <div class="modal-story-paragraphs">
                        ${storyHTML}
                    </div>
                </div>
            ` : ''}

            <!-- Mécaniques de jeu -->
            ${mechanicsHTML ? `
                <div class="modal-mechanics">
                    <h3 class="modal-section-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                        Mécaniques de Jeu Clés
                    </h3>
                    <div class="mechanics-grid">
                        ${mechanicsHTML}
                    </div>
                </div>
            ` : ''}

            <!-- Technologies utilisées -->
            ${techBadges ? `
                <div class="modal-tech">
                    <h3 class="modal-section-title">Technologies</h3>
                    <div class="skills-tags">
                        ${techBadges}
                    </div>
                </div>
            ` : ''}
        `;
    }

    /**
     * Génère l'élément HTML Média (Vidéo WebM ou Image WebP/PNG)
     */
    function renderMediaHTML(media) {
        if (media.type === "video") {
            return `
                <video controls autoplay loop muted playsinline poster="${media.poster || ''}">
                    <source src="${media.src}" type="video/webm" />
                    Votre navigateur ne prend pas en charge la lecture de vidéo WebM.
                </video>
            `;
        }
        return `<img src="${media.src}" alt="${media.caption || 'Capture d\'écran'}" />`;
    }

    /**
     * Initialise la logique de sélection et de navigation dans la galerie
     */
    function initGallery() {
        const thumbnailsContainer = document.getElementById("gallery-thumbnails");
        const displayContainer = document.getElementById("gallery-display");
        const captionElem = document.getElementById("gallery-caption");

        if (!displayContainer) return;

        const currentHash = window.location.hash.replace("#", "");
        const project = PROJECTS_DATA.find(p => p.id === currentHash);
        if (!project || !project.gallery || project.gallery.length === 0) return;

        let currentIndex = 0;

        function updateGalleryMedia(index) {
            if (index < 0) index = project.gallery.length - 1;
            if (index >= project.gallery.length) index = 0;

            currentIndex = index;
            const media = project.gallery[currentIndex];

            // Remplacement du média principal
            const mediaHTML = renderMediaHTML(media);
            const navBtnsHTML = project.gallery.length > 1 ? `
                <button type="button" class="gallery-nav-btn prev" id="gallery-prev-btn" aria-label="Média précédent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button type="button" class="gallery-nav-btn next" id="gallery-next-btn" aria-label="Média suivant">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
            ` : '';

            displayContainer.innerHTML = mediaHTML + navBtnsHTML;

            if (captionElem) {
                captionElem.textContent = media.caption || "";
            }

            // Réattacher les événements sur les flèches de navigation
            bindNavButtons();

            // Mise à jour de la classe active et défilement fluide des vignettes
            if (thumbnailsContainer) {
                const thumbs = thumbnailsContainer.querySelectorAll(".gallery-thumb");
                thumbs.forEach((t, i) => {
                    if (i === currentIndex) {
                        t.classList.add("active");
                        t.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                    } else {
                        t.classList.remove("active");
                    }
                });
            }
        }

        function bindNavButtons() {
            const prevBtn = document.getElementById("gallery-prev-btn");
            const nextBtn = document.getElementById("gallery-next-btn");
            if (prevBtn) {
                prevBtn.onclick = (e) => {
                    e.stopPropagation();
                    updateGalleryMedia(currentIndex - 1);
                };
            }
            if (nextBtn) {
                nextBtn.onclick = (e) => {
                    e.stopPropagation();
                    updateGalleryMedia(currentIndex + 1);
                };
            }
        }

        bindNavButtons();

        // Écouteur de clic sur les vignettes
        if (thumbnailsContainer) {
            thumbnailsContainer.addEventListener("click", (e) => {
                const btn = e.target.closest(".gallery-thumb");
                if (!btn) return;
                const index = parseInt(btn.dataset.mediaIndex, 10);
                if (!isNaN(index)) {
                    updateGalleryMedia(index);
                }
            });
        }
    }

    // --- GESTION DU MODAL CONTACT ---
    const contactModal = document.getElementById("contact-modal");
    const contactModalBackdrop = document.getElementById("contact-modal-backdrop");
    const contactModalCloseBtn = document.getElementById("contact-modal-close-btn");
    const navContactBtn = document.getElementById("nav-contact-btn");
    const contactForm = document.getElementById("contact-form");
    const contactStatusMsg = document.getElementById("contact-status-msg");

    /**
     * Ouvre le modal de contact
     */
    function openContactModal() {
        if (!contactModal) return;
        // Si le modal projet est ouvert, on le ferme d'abord
        if (modal.classList.contains("active")) {
            closeProjectModal();
        }

        contactModal.classList.add("active");
        contactModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        if (window.location.hash !== "#contact") {
            history.pushState(null, "", "#contact");
        }
    }

    /**
     * Ferme le modal de contact
     */
    function closeContactModal() {
        if (!contactModal) return;
        contactModal.classList.remove("active");
        contactModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");

        if (window.location.hash === "#contact") {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    }

    // Écouteurs de clics pour le modal de contact
    if (navContactBtn) {
        navContactBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openContactModal();
        });
    }

    if (contactModalCloseBtn) {
        contactModalCloseBtn.addEventListener("click", closeContactModal);
    }

    if (contactModalBackdrop) {
        contactModalBackdrop.addEventListener("click", closeContactModal);
    }

    // Soumission du formulaire de contact via Web3Forms
    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const submitBtn = document.getElementById("contact-submit-btn");
            const submitTextElem = submitBtn ? submitBtn.querySelector("span") : null;
            const originalText = submitTextElem ? submitTextElem.textContent : "Envoyer le message";

            // État visuel de chargement
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.style.opacity = "0.75";
                if (submitTextElem) submitTextElem.textContent = "Envoi en cours...";
            }

            try {
                const formData = new FormData(contactForm);
                if (!formData.get("access_key")) {
                    formData.append("access_key", "c32c38b8-83db-454d-ba90-82c8309731ba");
                }

                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    const senderName = formData.get("name") || "";
                    const senderEmail = formData.get("email") || "";
                    showContactStatus("success", `✔ <strong>Message envoyé avec succès !</strong><br>Merci ${senderName}, votre message a bien été transmis à Alexandre Babé. Une réponse vous sera envoyée à <strong>${senderEmail}</strong> dans les plus brefs délais.`);
                    contactForm.reset();
                } else {
                    showContactStatus("error", `❌ Erreur : ${data.message || "Impossible d'envoyer le message pour le moment."}`);
                }
            } catch (error) {
                showContactStatus("error", "❌ Une erreur de connexion est survenue. Veuillez vérifier votre réseau et réessayer.");
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = "1";
                    if (submitTextElem) submitTextElem.textContent = originalText;
                }
            }
        });
    }

    function showContactStatus(type, htmlContent) {
        if (!contactStatusMsg) return;
        contactStatusMsg.className = `contact-status-msg ${type}`;
        contactStatusMsg.innerHTML = htmlContent;
    }

    // --- ÉCOUTEURS D'ÉVÉNEMENTS GÉNÉRAUX ---

    // Écoute des clics sur les cartes de projets `.project-card`
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", (e) => {
            const projectId = card.dataset.projectId;
            if (projectId) {
                e.preventDefault();
                openProjectModal(projectId);
            }
        });
    });

    // Clic sur le bouton de fermeture ✕ du projet
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeProjectModal);
    }

    // Clic sur le fond obscur (backdrop) du projet
    if (modalBackdrop) {
        modalBackdrop.addEventListener("click", closeProjectModal);
    }

    // Touches du clavier (Échap pour fermer, Flèches Gauche/Droite pour naviguer dans la galerie)
    document.addEventListener("keydown", (e) => {
        if (modal && modal.classList.contains("active")) {
            if (e.key === "Escape") {
                closeProjectModal();
            } else if (e.key === "ArrowLeft") {
                const prevBtn = document.getElementById("gallery-prev-btn");
                if (prevBtn) prevBtn.click();
            } else if (e.key === "ArrowRight") {
                const nextBtn = document.getElementById("gallery-next-btn");
                if (nextBtn) nextBtn.click();
            }
        }
        if (contactModal && contactModal.classList.contains("active") && e.key === "Escape") {
            closeContactModal();
        }
    });

    // Vérification du deep-linking au chargement de la page et aux changements de hash
    function checkURLHash() {
        const hash = window.location.hash.replace("#", "");
        if (!hash) return;

        if (hash === "contact") {
            openContactModal();
            return;
        }

        if (typeof PROJECTS_DATA !== "undefined") {
            const project = PROJECTS_DATA.find(p => p.id === hash);
            if (project) {
                openProjectModal(project.id);
            }
        }
    }

    checkURLHash();
    window.addEventListener("hashchange", checkURLHash);
});

