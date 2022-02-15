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
                    <h1 class="h4 text-gray-900 mb-4">Edit customer <button class="btn btn-default btn-sm"><router-link to="/customer">List</router-link></button></h1>
                  </div>
                  <form class="user" @submit.prevent="customerUpdate" enctype="multipart/form-data"> 
                    <div class="form-group">
                      <input type="text" class="form-control" v-model="form.name" placeholder="Enter Full Name">
                      <small class="text-danger"   v-if="errors.name">{{errors.name[0]}}</small>
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control" v-model="form.email"  placeholder="Enter Email Address">
                      <small class="text-danger"   v-if="errors.email">{{errors.email[0]}}</small>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" v-model="form.address" placeholder="Address">
                      <small class="text-danger"   v-if="errors.address">{{errors.address[0]}}</small>
                    </div>
                    
                    <div class="form-group">
                      <input type="text" class="form-control" v-model="form.phone" placeholder="Phone">
                      <small class="text-danger"   v-if="errors.phone">{{errors.phone[0]}}</small>
                    </div>
                    <div class="form-group">
                      <input type="file" class="form-control" placeholder="Photo" @change="onFileSelected">
                      <img :src="form.newphoto" style="height:75px; width: 75px">
                      <small class="text-danger"   v-if="errors.photo">{{errors.photo[0]}}</small>
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
            name: '',
            email: '',
            address: '',
            phone: '',
            photo: '',
            newphoto: ''
        },
        errors:{}
        }
        },
        created(){
            let id = this.$route.params.id
            axios.get('/api/customer/'+id)
            .then(({data}) => (this.form = data))
            .catch(console.log('error'))
        },
        methods: {
          onFileSelected(event){

            let file = event.target.files[0];
          if (file.size > 1048770) {
              Toast.fire({
                icon: 'error',
                title: 'File size is too big!!!'
              })
            }else{
              let reader = new FileReader();
              reader.onload = event =>{
                this.form.newphoto =  event.target.result
                console.log(event.target.result)
              };
              reader.readAsDataURL(file); 
            }
            
          },
            customerUpdate(){
                let id = this.$route.params.id
              axios.patch('/api/customer/'+id,this.form)
              .then(() => {
                this.$router.push({ name: 'customer'})
                Toast.fire({
                icon: 'success',
                title: 'updated successfull'
              })
              })
              .catch(error =>this.errors = error.response.data.errors)

            }
        }



}

</script>

<style scoped>

</style>
