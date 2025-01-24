<template>
        <form @submit="login()">
            <div class="form-group">
                <label for="exampleInputEmailId" class="sr-only">Email ID</label>
                <div class="position-relative has-icon-right">
                    <input v-model="username" type="text" id="exampleInputEmailId" class="form-control input-shadow"
                        placeholder="Usuário" />
                    <div class="form-control-position">
                        <i class="icon-user"></i>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword" class="sr-only">Password</label>
                <div class="position-relative has-icon-right">
                    <input v-model="password" type="password" id="exampleInputPassword" class="form-control input-shadow"
                        placeholder="Senha" />
                    <div class="form-control-position">
                        <i class="icon-lock"></i>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-6"></div>
                <div class="form-group col-6 text-right"></div>
            </div>
            <button type="button" class="btn btn-light btn-block">
                Entrar
            </button>
            <div class="text-center mt-3">Seja bem-vindo! {{ token }}</div>
        </form>
</template>
<script>
    import axios from 'axios';

    export default{
        data:{
            username:'',
            password:'',
            token:''
        },
        methods:{
            async login(){
                axios.post()
            },
        }
    }
</script>