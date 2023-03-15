<template>
<h1>bojo</h1>
<div>
    <input type="text" v-model="search" class="input--search"/>
    <button @click="searchItem">Search</button>
    
   

    
</div>

</template>

<script>
export default{
    data(){
        return{
        search: "",
        post: [],
        isLoading: true
        };
    },

    // computed: {
    //     searchPost(){
    //         if(this.search.length >= 3){
    //   return this.post.filter(item =>
    //       item.login.toLowerCase().includes(this.search.toLowerCase())
    //    );}else{
    //     return ("not found");
    //    }
    //     }
    // },
    mounted(){
        this.searchItem()
    },

    methods: {
        searchItem(){
            this.isLoading = true;
      fetch(`https://api.github.com/users?=${this.search}`)
      .then((response) => response.json())
      .then(data => {this.post = data;
        this.isLoading = false 
    })
    .catch(error => {
        console.log(error);
        this.isLoading = false;
      })
        },
    }
}
</script>


<style scoped>
.input--search{
    display: flex;
    justify-content: center;
    place-items: center;
}
</style>