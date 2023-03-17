<template>
    <div  class="home--container">
        <div class="text--container">
           <h1 class="home--heading">Hello there! <span class="emoji"> 👋 </span></h1>
           <h3 class="home--heading2">I'm <span class="name"> Abisola Ojo </span></h3>
           <h5 class="home--heading3">I'm a Front End Developer</h5>

           <p class="home--text-small">This is my altSchool third semester exam project built with Vue.js</p>
           <p class="home--text-small"> It fetches my Repos from GitHub with the RESTful GitHub API.</p>
            <button @click.prevent="onClick" class="button--link">Go to Repositories Page</button>
        </div>

        <div>
           <img src="../images/abisola-snapchat.jpg" class="home--photo"/>
        </div>
    </div>
</template>

<script>
     export default {
    
        methods: {
            onClick(){
               this.$router.push("/repos")
            }
        },
     }
</script>

<style scoped>
  .home--container{
    margin-top: 60px;
   
  }


  .home--photo{
    width: 300px;
    border-radius: 200px;
  }
   
  .home--heading{
    font-size: 50px;
  }

  .home--heading2{
    font-size: 35px;
  }

  .home--heading3{
    font-size: 20px;
  }

  .home--text-small{
    color: grey;
    font-weight: lighter;
    font-size: 14px;
  }

  .emoji{
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
}



@keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(14deg);
    }
    30% {
      transform: rotate(-8deg);
    }
    40% {
      transform: rotate(14deg);
    }
    50% {
      transform: rotate(-4deg);
    }
    60% {
      transform: rotate(10deg);
    }
    70% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .button--link{
    background-color: black;
    padding: 20px;
    border-radius: 10px;
    color: rgb(60, 230, 60);
    margin-top: 90px;
    transition: 0.3s;
    cursor: pointer;
    outline: none;
    border: none;
  }

  .button--link:hover{
    background-color: rgb(59, 56, 56);
    /* font-weight: bolder; */
  }

  .name{
     color: rgb(77, 130, 76)
  }


/*page responsiveness*/
@media screen and (max-width:479px){
    .home--container{
        /* height: 650px; */
        width: 420px;
        margin-top: 50px;
        text-align: center;
        margin-bottom: 60px;
     }
     .text--container{
        margin-bottom: 80px;
     }

     .button--link{
      margin-top: 30px;
     }
 }

 @media screen and (min-width: 480px) and (max-width:619px){
   .error--container{
      height: 800px;
   }
 }

 @media screen and (min-width: 620px) and (max-width: 767px){
   .home--container{
      /* height:  350px; */
      display: flex;
    justify-content: space-around;
    margin-top:  30px;
    margin-bottom: 60px;
   }
 }
 
@media screen and (min-width: 768px) and (max-width: 1023px){
   .home--container{
      /* height: 720px; */
      display: flex;
    justify-content: space-around;
    
      margin-top: 250px;
      margin-bottom: 300px;
   }
}


@media screen and (min-width: 1024px) and (max-width: 1249px){
   .home--container{
    display: flex;
    justify-content: space-around;
    margin-top:  30px;
    margin-bottom: 60px;
      /* height: 650px; */
   }
}

@media screen and (min-width: 1250px) {
   .home--container{
    display: flex;
    justify-content: space-around;
    margin-top:  30px;
    margin-bottom: 60px;
      /* height: 800px; */
   }
}
</style>
