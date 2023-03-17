<template>
   <!-- <slot name="context"  :response="response"></slot> -->
  <div>
    <!-- <h1>My Repos</h1> -->
    <div v-if="isLoading" class="loader-body">
    <div class="loader"></div>
    </div>
    <div v-else >
      <div v-for="post in displayedData" :key="post.id"  class="repo--container">
       
        <h3 class="repo--name"> {{ post.name }} </h3>
       <div class="link--container">
        <router-link :to="`/repos/${post.id}`" class="repo--item-link">View more &#x2197;</router-link>
      </div>
      </div>
    </div>
    <div class="paginate--arrows">
      <button @click="prevPage" :disabled="currentPage === 1" class="paginate--button"> &lt; </button>

      <p>Page {{ currentPage }}</p>
      <button @click="nextPage" :disabled="currentPage === numberPages" class="paginate--button"> &gt; </button>
    </div>
  </div>
   
</template>




<script>

export default {
  data() {
    return {
      response: [],
      isLoading: true,
      currentPage: 1,
      postPerPage: 2, 
      currentPosts: [],
    };
  },
  computed: {
   
  numberPages(){
    return Math.ceil(this.response.length / this.postPerPage)
  },
  displayedData(){
    const indexOfFirstPost = (this.currentPage - 1) * this.postPerPage;
    const indexOfLastPost = indexOfFirstPost + this.postPerPage;
     return this.response.slice(indexOfFirstPost, indexOfLastPost)
  }
  },

  methods: {
    prevPage(){
      if(this.currentPage > 1){
        this.currentPage -= 1;
      }
    },
    nextPage(){
      if((this.currentPage * this.postPerPage) < this.response.length){
        this.currentPage += 1
      }
    }

  },
  mounted() {
    this.isLoading = true;

    fetch("https://api.github.com/users/bojodiva/repos")
      .then((response) => response.json())
      .then(data => {this.response = data;
        this.isLoading = false;
      })
      .catch(error => {
        console.log(error);
        this.isLoading = false;
      })
      
  },
};
  

</script>


<style scoped>
.repo--container{
  /* align-items: center; */
  /* text-align: center; */
  border-radius: 20px;
  margin: 25px;
  background-color: rgb(71, 131, 71);
  padding: 50px;
  margin-top: 50px;
  /* display: flex;
  justify-content: space-between; */
}

.repo--name{
 text-align: center;
 font-size: 35px;
}

.repo--item-link{
 color: rgb(60, 230, 60);
  text-decoration: none;
  padding: 10px;
  background-color: black;
  border-radius: 10px;
  text-align: center;
}

.link--container{
  display: flex;
  justify-content: center;
  text-align: center;
}

.paginate--arrows{
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 50px;
}

.paginate--button{
  background: black;
  color: rgb(60, 230, 60);
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
}

.paginate--button:disabled{
  background: azure;
}

.loader-body{
   width: 100%;
   height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0,0,0,1) ;
}
.loader{
  border: 10px solid rgb(60, 230, 60);
  border-top: 10px solid black;
  border-radius: 80px;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  /* z-index: 1; */
  /* margin: -76px 0 0 -76px; */

}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
}


@media screen and (min-width: 479px){
  .repo--container{
   margin:10px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .paginate--arrows{
  margin-bottom: 100px;

  }

  .repo--container{
    margin-top: 100px;
  }
}
</style>
