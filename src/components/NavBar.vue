<template>
<div class="nav--container">
    <div class="name--logo">
        <span class="logo" @click="onClick">BojoCodes</span>
    </div>

    <div class="nav--link-container">
        <ul class="nav--links">
            <li><router-link  class="link"  to="/">Home</router-link></li>
            <li><router-link to="/repos"  class="link" id="link--hide">Repos</router-link></li>
            <li><router-link to="/search" class="link">Search</router-link></li>
        </ul>
    </div>
</div>
</template>

<script>
  export default{
    methods: {
      onClick(){
        this.$router.push("/")
      }
    }
  }
</script>

<style scoped>
  .nav--container{
    display: flex;
    /* grid-template-columns: 2fr 1fr; */
    /* background-color: black; */
    justify-content: space-between;
    gap: 2rem;
    align-items: stretch;
    padding: 0 1rem;
    height: 65px;
    /* box-shadow: rgba(50,50,93,0.25) 0px 50px 100px -20px, rgba(0,0,0,0.3) 0px 30px 60px -30px; */
  }

  .name--logo{
    margin:10px;
    /* color: white; */
  }

  .logo{
    font-size: 35px;
    /* border-style: dotted solid rgb(60, 230, 60); */
    color: rgb(60, 230, 60);
    font-weight: bold;
    font-family: 'Amaranth', sans-serif;
    cursor: pointer;
  }

  .nav--link-container{
    display: flex;
  }

  .nav--links{
    display: flex;
    list-style: none;
    justify-content: space-around;
    gap: 100px;
    margin: 20px;
    padding: 0;
  }
    

  .link{
    text-decoration: none;
    align-items: center;
    /* margin: 15px; */
    color: grey;
    /* padding: 25rem; */
    /* align-items: center; */
}

.router-link-active{
  color: black;
    text-decoration: underline 3px solid rgb(60, 230, 60) ;
}


@media screen and (max-width: 479px){
  .nav--links{
    display: flex;
    list-style: none;
    justify-content: space-around;
    gap: 15px;
    margin: 20px;
    padding: 0;
  }

  .logo{
    font-size: 35px;
  }
 
  .name--logo{
    margin-top: 10px;
  }
  #link--hide{
    display: none;
}

}

@media screen and (min-width: 480px) and (max-width:619px){
  .nav--links{
    gap: 15px;
  }
}

</style>
