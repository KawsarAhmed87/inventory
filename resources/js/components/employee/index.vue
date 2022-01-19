<template>
    <div>
        <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">All employee <button class="btn btn-default btn-sm"><router-link to="/store-employee">Create</router-link></router-link></button></h1>
                  </div>
                
                  <hr>
                  <div class="text-center">
                    <router-link to="/">Already have an account?</router-link>
                  </div>
                  <div class="text-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script type="text/javascripts">
export default{

        created(){
            if (!User.loggedIn()) {
            this.$router.push({name: '/'})
            }
        },

        
        methods: {
            
        }



}

</script>

<style scoped>

</style>
