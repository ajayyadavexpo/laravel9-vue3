<template>
    <div class="container">
        <h2>Dashboard : </h2>
        <button type="button" class="btn btn-dark mt-2" @click="logout">Logout</button>
    </div>
</template>
<script>
    import { useRouter } from "vue-router"
    export default{
        setup(){
            const router = useRouter();

            function logout(){
                localStorage.removeItem('token');
                router.push({name:'Home'})
            }

            return {
                logout
            }
        }
    }
</script>
