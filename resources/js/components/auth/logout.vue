<template>
    <div>
       
    </div>
</template>
<script>
export default{
    created(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        /*------ start Toast------- */ 
      Toast.fire({
        icon: 'success',
        title: 'Logout successfully'
      })
      /*------ end Toast------- */

      this.$router.push({name: '/'})

    }
}
</script>

<style scoped>

</style>
