<template>
    <div :class="['bg-theme', themeStore.theme]">
        <div id="wrapper">
            <NavBarAdministrator />
            <Header />
            <section class="py-5 content-wrapper">
                <div class="container px-4 px-lg-5 mt-5">
                    <!-- Apliquei a classe "row" e também "flex-wrap" para garantir que os itens sejam distribuídos corretamente -->
                    <div class="row gx-4 gx-lg-5 justify-content-center flex-wrap">
                        <!-- Usei v-for para gerar os cards dinamicamente -->
                        <div v-for="(product, index) in products" :key="index"
                            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                            <div class="card h-100">
                                <!-- Product image-->
                                <img class="card-img-top" :src="product.image" alt="..." />
                                <!-- Product details-->
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <!-- Product name-->
                                        <h5 class="fw-bolder">{{ product.name }}</h5>
                                        ${{ product.price }}
                                    </div>
                                </div>
                                <div
                                    class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                                    <a href="#"><i class="fas fa-eye fa-lg"></i></a>
                                    <a href="#"><i class="fas fa-pencil-alt fa-lg"></i></a>
                                    <a href="#"><i class="fas fa-trash fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="pagination_rounded">
            <ul>
                <li>
                    <a href="#" class="prev"> <i class="fa fa-angle-left" aria-hidden="true"></i> Prev </a>
                </li>
                <li><a href="#">1</a>
                </li>
                <li class="hidden-xs"><a href="#">2</a>
                </li>
                <li class="hidden-xs"><a href="#">3</a>
                </li>
                <li><a href="#" class="next"> Next <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { useThemeStore } from "~/stores/themeStore";
import { title } from "/composables/title";

// Definindo os dados para os produtos
const products = [
    {
        name: "Fancy Product",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
    }
];

definePageMeta({
    middleware: ['auth']
});

const themeStore = useThemeStore();
title("Medicamentos");
</script>
<style scoped>
.pagination_rounded, .pagination_square {
    display: flex;
    flex-direction: row;
    align-items:baseline;
    justify-content: center;
    color: white;
}

.pagination_rounded ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.pagination_rounded li:first-child {
    margin-left: 0px;
}

.pagination_rounded ul li {
    float: left;
    margin-left: 20px;
}

.pagination_rounded ul li a:hover {
    background: #ffffff;
    color: #8a8a8a;
    border: 1px solid #8a8a8a;
}

a:link {
  text-decoration: none;
}

.pagination_rounded .prev {
    margin-left: 0px;
    border-radius: 35px;
    width: 90px;
    height: 34px;
    line-height: 34px;
}


.pagination_rounded ul li a {
    float: left;
    color: #ffffff;
    border-radius: 50%;
    line-height: 30px;
    height: 30px;
    width: 30px;
    text-align: center;
    margin-bottom: 40px;
    border: 1px solid #e0e0e0;
}

.pagination_rounded .prev i {
    margin-right: 10px;
}

.pagination_rounded .next {
    border-radius: 35px;
    width: 90px;
    height: 34px;
    line-height: 34px;
}

.visible-xs {
    display: none!important;
}
</style>