<template>
    <div class="container">
       <div class="row mt-3" v-if="$gate.isAdmin() || $gate.isSKAdmin()">
          <div class="col-12">
            <div class="col-md-12">
                <h2>File Management</h2>
                <iframe src="/laravel-filemanager" style="width: 100%; height: 500px; overflow: hidden; border: none;"></iframe>
            </div>
          </div>
        </div>
        <div v-if="!($gate.isAdmin() || $gate.isSKAdmin())">
            <not-found></not-found>
        </div>

    </div>
</template>


<script>

    export default {
        data() {
            return {
            }
        },
        methods:{
        },
        created() {
        }
    }

</script>



