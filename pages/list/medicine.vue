<template>
    <div :class="['bg-theme', themeStore.theme]">
      <div id="wrapper">
        <NavBarAdministrator />
        <Header />
        <section class="py-5 content-wrapper">
          <DeleteMedicine :medicineId="medicineId" :fetchMedicines="fetchMedicines" />
          <EditMedicine :medicineId="medicineId" :fetchMedicines="fetchMedicines"/>
          <div class="col-md-12 search-buttom">
            <div class="search">
              <i class="fa fa-search"></i>
              <input v-model="searchQuery" type="text" class="form-control" placeholder="Nome do medicamento..."
                @keyup.enter="searchMedicines" />
              <button class="btn" @click="searchMedicines">Buscar</button>
            </div>
          </div>
  
          <div class="container px-4 px-lg-5 mt-5">
            <div v-if="loading" class="text-center">
              <div id="spinner" class="text-center">
                <div class="spinner-border text-danger mt-5 mb-5" role="status">
                  <span class="sr-only mt-5 mb-5">Loading...</span>
                </div>
              </div>
            </div>
            <div v-else-if="medicines.length === 0" class="text-center">Nenhum medicamento encontrado.</div>
            <div v-else class="row gx-4 gx-lg-5 justify-content-center flex-wrap">
              <div v-for="(medicine, index) in medicines" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                <div class="card h-100">
                  <img v-if="medicine.medicine_image" class="card-img-top" :src="`data:image/jpeg;base64,${medicine.medicine_image}`"
                    alt="Imagem do medicamento" />
                  <img v-else class="card-img-top" src="/assets/images/medicine.jpg" alt="Imagem do medicamento" />
                  <div class="card-body p-4">
                    <div class="text-center">
                      <h5 class="fw-bolder">{{ medicine.name }}</h5>
                      <p>{{ medicine.dosage }} - {{ medicine.manufacturer }}</p>
                    </div>
                  </div>
                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                    <a href="#"><i class="fas fa-eye fa-lg"></i></a>
                    <a href="#" @click="openEditModal(medicine.id)"><i class="fas fa-pencil-alt fa-lg"></i></a>
                    <a href="#" @click="openDeleteModal(medicine.id)"><i class="fas fa-trash fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="pagination_rounded" v-if="nextPage || prevPage">
            <ul>
              <li v-if="prevPage">
                <a href="#" class="prev" @click.prevent="fetchMedicines(prevPage)">
                  <i class="fa fa-angle-left" aria-hidden="true"></i> Prev
                </a>
              </li>
              <li v-if="nextPage">
                <a href="#" class="next" @click.prevent="fetchMedicines(nextPage)">
                  Next <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import { useThemeStore } from "~/stores/themeStore";
  import { title } from "~/composables/title";
  import { useAuthStore } from "~/stores/authtoken";
  
  const token = useAuthStore().token;
  const medicines = ref([]);
  const nextPage = ref(null);
  const prevPage = ref(null);
  const loading = ref(true);
  const searchQuery = ref('');
  const medicineId = ref(0);
  
  const openDeleteModal = (id) => {
      medicineId.value = id;
      $('#exampleModal4').modal('show');
  };
    
  const openEditModal = (id) => {
      medicineId.value = id;
      $('#editMedicineModal').modal('show');
  };
  
  const fetchMedicines = async (url = "http://127.0.0.1:8000/api/v1/medicines/") => {
      try {
          loading.value = true;
          const response = await axios.get(url, {
              params: {
                  name: searchQuery.value
              },
              headers: {
                  "Authorization": `Token ${token}`,
              },
          });
  
          medicines.value = response.data.results || [];
          nextPage.value = response.data.next;
          prevPage.value = response.data.previous;
      } catch (error) {
          console.error(error.response?.data || error.message);
      } finally {
          loading.value = false;
      }
  };
  
  const searchMedicines = () => {
      fetchMedicines();
  };
  
  onMounted(fetchMedicines);
  
  definePageMeta({
      middleware: ["auth"],
  });
  
  const themeStore = useThemeStore();
  title("Medicamentos");
  </script>  
<style scoped>
#spinner {
    margin-top: 100px;
    margin-bottom: 300px;
}

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

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
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

input::placeholder {
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