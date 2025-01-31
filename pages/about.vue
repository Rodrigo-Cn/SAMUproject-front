<template>
    <div :class="['bg-theme', themeStore.theme]">
        <HeaderAbout />
        <div class="container py-12">
            <h2 class="text-center mb-4 title-subtitle">
                <span><i class="fas fa-laptop-code fa-1.5x"></i> Equipe de Desenvolvimento</span>
            </h2>
            <p class="text-center mb-5 description">
                O sistema foi desenvolvido pelos alunos do
                <strong>Instituto Federal Baiano - Campus Guanambi</strong> do curso Tecnológico
                em Análise e Desenvolvimento de Sistemas no ano de 2025.
            </p>
            <div class="row">
                <div class="col-md-4" v-for="(member, index) in teamMembers" :key="index">
                    <div class="card shadow-lg position-relative rounded-3">
                        <img :src="member.photo" class="card-img-top rounded-top" alt="photo" />
                        <div class="card-body text-center">
                            <h5 class="card-title">{{ member.name }}</h5>
                            <p class="card-text">{{ member.role }}</p>
                            <p class="card-description">{{ member.description }}</p>
                            <div id="about-nav">
                                <a :href="member.linkedin" target="_blank" class="text-white mx-2">
                                    <i class="fab fa-linkedin"></i> LinkedIn
                                </a>
                                <a :href="member.github" target="_blank" class="text-white mx-2">
                                    <i class="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                        <div
                            class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50 text-white p-3 rounded-3">
                            <div>
                                <a :href="member.linkedin" target="_blank" class="text-white mx-2">
                                    <i class="fab fa-linkedin"></i> LinkedIn
                                </a>
                                <a :href="member.github" target="_blank" class="text-white mx-2">
                                    <i class="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script setup>
import { useThemeStore } from "~/stores/themeStore";
import { title } from "/composables/title";

const themeStore = useThemeStore();
title("Sobre Nós");

const teamMembers = [
    {
        name: 'Éllen Conceição',
        role: 'Desenvolvedor Front-End',
        description: 'Desenvolvimento de telas e da arquitetura do sistema.',
        photo: '/assets/images/Ellen.jpeg',
        linkedin: 'https://github.com/EllenBarbosa26',
        github: 'https://github.com/EllenBarbosa26'
    },
    {
        name: "Rodrigo Costa",
        role: "Desenvolvedor Full-Stack",
        description: "Desenvolvimento da API, arquitetura do sistema e implementação do front-end.",
        photo: "/assets/images/RodrigoCn.jpg",
        linkedin: "https://www.linkedin.com/in/rodrigo-costa-411038255/",
        github: "https://github.com/Rodrigo-Cn"
    },
    {
        name: 'Samuel Araújo',
        role: "Desenvolvedor Full-Stack",
        description: "Desenvolvimento da API, arquitetura do sistema e implementação do front-end.",
        photo: "/assets/images/Samuel.jpeg",
        linkedin: 'https://www.linkedin.com/in/samuel-ara%C3%BAjo-silveira-b205711a4/?originalSubdomain=br',
        github: 'https://github.com/Samuel-Araujo-Silveira'
    }
];
</script>
<style scoped>
#about-nav {
    display: none;
}

img {
    height: 400px;
    object-fit: cover;
}

.container {
    padding-top: 120px;
    padding-bottom: 100px;
}

h2.title {
    font-family: "Arial", sans-serif;
    font-weight: 1000;
    font-size: 1.3rem;
    text-align: center;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 15px;
    border-radius: 8px;
    background: white;

    -webkit-background-clip: text;
    -moz-background-clip: text;
    -ms-background-clip: text;
    -o-background-clip: text;
    background-clip: text;

    color: transparent;
}

h2.title-subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-family: "Arial", sans-serif;
    font-weight: 700;
    font-size: 1.7rem;
    text-align: center;
    color: #ffffff;
    text-shadow: 3px 3px 12px rgba(108, 107, 104, 0.6);
    padding-bottom: 10px;
}

.title-subtitle .line {
    flex: 1;
    height: 2px;
    background-color: white;
    max-width: 20px;
}

.description {
    font-family: "Arial", sans-serif;
    font-size: 1rem;
    color: #ffffff;
    line-height: 1.5;
    max-width: 800px;
    margin: 0 auto 40px;
}

.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 15px;
    background: linear-gradient(135deg, #222, #333);
    overflow: hidden;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 4px 20px rgba(255, 215, 0, 0.3);
}

.overlay {
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card:hover .overlay {
    opacity: 1;
}

.bi {
    font-size: 20px;
}

.card-title {
    font-size: 1.4rem;
    color: #ffffff;
    text-shadow: 2px 2px 10px rgba(153, 153, 153, 0.6);
}

.card-text {
    font-size: 1rem;
    color: #dedada;
}

.card-description {
    font-size: 0.95rem;
    color: #ffffff !important;
}

.card-body {
    background-color: rgba(83, 83, 83, 0.5);
}

@media (max-width:599px) {
    #about-nav {
        display: block;
    }
}
</style>