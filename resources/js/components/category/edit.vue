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
                    <h1 class="h4 text-gray-900 mb-4">Edit Category <button class="btn btn-default btn-sm"><router-link to="/category">List</router-link></button></h1>
                  </div>
                  <form class="user" @submit.prevent="CategoryUpdate"> 
                    <div class="form-group">
                      <input type="text" class="form-control" v-model="form.category_name" placeholder="Enter Category">
                      <small class="text-danger"   v-if="errors.category_name">{{errors.category_name[0]}}</small>
                    </div>
                   
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">Update</button>
                    </div>
                  </form>
    
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

        data(){
        return {
        form:{
            category_name: ''
        },
        errors:{}
        }
        },
        created(){
            let id = this.$route.params.id
            axios.get('/api/category/'+id)
            .then(({data}) => (this.form = data))
            .catch(console.log('error'))
        },
        methods: {
           CategoryUpdate(){
               let id = this.$route.params.id
              axios.patch('/api/category/'+id,this.form)
              .then(() => {
                this.$router.push({ name: 'category'})
                Toast.fire({
                icon: 'success',
                title: 'Inserted successfull'
              })
              })
              .catch(error =>this.errors = error.response.data.errors)

            }
        }



}

</script>

<style scoped>

</style>
