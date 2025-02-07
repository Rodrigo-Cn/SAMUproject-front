<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img id="mylogo" src="/assets/images/home/image (11).png" alt="Logo" width="80" height="80"
                        class="d-inline-block align-text-center">
                    <span class="navbar-brand"
                        style="margin-left: 5px; color: aliceblue; font-family: Helvetica;"><strong>SAMU
                            <span style="color: red;">192</span>
                        </strong></span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <strong @click="scrollToLogin" class="nav-link custom-login">
                                LOGIN
                            </strong>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div>
            <img src="public/assets/images/home/bem2.png" class="img-fluid" id="imagemMain">
        </div>
    </header>
</template>
<script setup>
import { computed, onMounted, onUnmounted } from 'vue';


const imageSrc = computed(() => {
    return window.innerWidth <= 767 ? '/assets/images/cell4.png' : '/assets/images/bem2.png';
});

const handleResize = () => {
    imageSrc.value = window.innerWidth <= 767 ? '/assets/images/cell4.png' : '/assets/images/bem2.png';
};

const scrollToLogin = () => {
    const loginSection = document.getElementById('login');
    if (loginSection) {
        loginSection.scrollIntoView({ behavior: 'smooth' });
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

</script>
<style scoped>
.navbar {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.35);
    box-shadow: none !important;
}

#nav-item {
    position: relative;
}

.navbar-brand {
    font-size: 22px;
}

.custom-login {
    color: white !important;
    font-size: 22px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    padding: 5px 15px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.custom-login:hover {
    opacity: 0.8;
    text-decoration: underline;
}

.navbar {
    align-items: baseline;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.45);
    height: 100vh;
}

#imagemMain {
    height: 100vh;
    width: 100vw;
    content: url('public/assets/images/home/image1.png');
}

@media (max-width: 767px) {
    #imagemMain {
        content: url('public/assets/images/home/image2.png');
    }

    #imagemMain {
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.05);
    }

    #mylogo {
        width: 60px;
        height: 60px;
    }


    .custom-login {
        font-size: 16px;
    }

    .navbar-brand {
        font-size: 16px;
    }
}

.btn-custom {
    background-color: #ffffff !important;
    color: #000000 !important;
    border-radius: 25px;
    padding: 10px 20px;
    font-family: Helvetica;
    text-align: center;
    border: 1px solid #ccc;
    transition: all 0.3s ease;
}

.btn-custom:hover {

    background-color: #ffffff;
    color: #000000;
    border: 1px solid #ccc;
}
</style>