<template>
    <div  class="bg-theme bg-theme">
        <div id="wrapper">
            <div class="card card-authentication1 mx-auto my-5">
                <div class="card-body">
                    <div class="card-content p-2">
                        <div class="text-center">
                            <img src="public/assets/images/image.png" alt="logo icon"
                                style="width: 100px; height: auto" />
                        </div>
                        <div class="card-title text-uppercase text-center py-3">Login</div>
                        <FormLogin/>
                    </div>
                </div>
                <div class="card-footer text-center py-3">
                    <p class="text-warning mb-0">
                        Não Possui Cadastrado?
                        <a>Consulte a Administração</a>
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    
</template>
<script>
import { title } from '/composables/title';

export default {
  mounted() {
    title('Login');
  },
};
</script>
