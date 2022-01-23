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
                    <h1 class="h4 text-gray-900 mb-4">Expense <button class="btn btn-default btn-sm"><router-link to="/store-expense">Add</router-link></button></h1>
                  </div>
                  <table class="table align-items-center table-flush">
                    <thead class="thead-light">
                      <tr>
                        <th>Details</th>
                        <th>Amount </th>
                        <th>Date</th>
                          <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="expense in filtersearch" :key="expense.id">
                        <td> {{ expense.details }} </td>
                        <td> {{ expense.amount }} </td>
                        <td> {{ expense.expense_date }} </td>
                       
            <td>
   <router-link :to="{name: 'edit-expense', params:{id:expense.id}}" class="btn btn-sm btn-primary">Edit</router-link>

 <a @click="deleteExpense(expense.id)" class="btn btn-sm btn-danger"><font color="#ffffff">Delete</font></a>
            </td>
                      </tr>
                    
                    </tbody>
                  </table>
    
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
            expenses:[],
            searchTerm:''
        }
        },
        computed:{
        filtersearch(){
        return this.expenses.filter(expense => {
            return expense.expense_date.match(this.searchTerm)
        }) 
        }
        },
        methods: {
            allExpense(){
            axios.get('/api/expense/')
            .then(({data}) => (this.expenses = data))
            .catch()
            },

            deleteExpense(id){
             Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.value) {
                axios.delete('/api/expense/'+id)
               .then(() => {
                this.expenses = this.expenses.filter(expense => {
                  return expense.id != id
                })
               })
               .catch(() => {
                this.$router.push({name: 'expense'})
               })
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            })

  }
           
        },

        created(){
            this.allExpense();
        } 



}

</script>

<style scoped>

</style>
