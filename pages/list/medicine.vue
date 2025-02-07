<template>
    <div :class="['bg-theme', themeStore.theme]">
        <div id="wrapper">
            <NavBarAdministrator />
            <Header />
            <section class="py-5 content-wrapper">

                <div class="col-md-12 search-buttom">
                    <div class="search">
                        <i class="fa fa-search"></i>
                        <input type="text" class="form-control" placeholder="Nome do medicamento...">
                        <button class="btn">Buscar</button>
                    </div>
                </div>

                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center flex-wrap">
                        <div v-for="(product, index) in products" :key="index"
                            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                            <div class="card h-100">
                                <img class="card-img-top" :src="product.image" alt="..." />
                                <div class="card-body p-4">
                                    <div class="text-center">
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
                <div class="pagination_rounded">
                    <ul>
                        <li>
                            <a href="#" class="prev">
                                <i class="fa fa-angle-left" aria-hidden="true"></i> Prev
                            </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li class="hidden-xs"><a href="#">2</a></li>
                        <li class="hidden-xs"><a href="#">3</a></li>
                        <li>
                            <a href="#" class="next">
                                Next <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { useThemeStore } from "~/stores/themeStore";
import { title } from "/composables/title";

const products = [
    {
        name: "Fancy Product",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
        name: "Popular Item",
        price: "40.00",
        image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
];

definePageMeta({
    middleware: ["auth"],
});

const themeStore = useThemeStore();
title("Medicamentos");
</script>
<style scoped>
.pagination_rounded,
.pagination_square {
    display: flex;
    flex-direction: row;
    align-items: baseline;
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

.search {
    position: relative;
    box-shadow: 0 0 40px rgba(51, 51, 51, .1);
}

.search input {
    height: 60px;
    text-indent: 25px;
}

.search input:focus {
    box-shadow: none;
    border: 2px solid rgb(90, 90, 90);
}

.search .fa-search {
    position: absolute;
    top: 20px;
    left: 16px;
}

.search button {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 50px;
    width: 110px;
    background: rgba(0, 0, 0, 0.2);
    border: 2px solid rgb(114, 114, 114);
    color: white;
    transition: 0.5s;
}

.search button:hover {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    transition: 0.5s;
}


.search-buttom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5%;
}

.search {
    width: 100%;
    max-width: 70%;
}

input::placeholder{
    color: white;
}

@media (max-width:599px) {

.search button {
    height: 40px;
    width: 80px;
    font-size: 9px;
}

.search {
    width: 100%;
    max-width: 100%;
}

.search input {
    height: 50px;
    text-indent: 25px;
}
}
</style>