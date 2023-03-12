<template>
<div class="error--container">
    
    <h1 class="error--heading">404</h1>
    <p class="error--text">The page you are searching for is not found.</p>
    <p class="error--text">Or the link typed in the url might be broken.</p>
    <button @click.prevent="onClick" class="back--button">Go back to home</button>

</div>
</template>

<script>
export default {
    methods: {
        //using replace so the browser won't store the history
         onClick(){
            this.$router.replace("/")
         }                                                                                                      
    }
}
</script>

<style scoped>
.error--container{
   margin-top: 200px;
   text-align: center;
   height: 350px;
   align-items: center;
}

.center--container{
    position:absolute;
    left: 50%;
    top: 50px;
    transform: translate(-50%, -50%);
}

.error--heading{
    font-size: 50px;
}

.error--text{
    font-size: 16px;
    font-weight: lighter;
}

.back--button{
    padding: 10px;
    color: rgb(60, 230, 60);
    border-radius: 10px;
    outline: none;
    border: none;
    font-weight: bold;
    margin: 10px;
    cursor: pointer;
    background-color: black;
    transition: 0.3s;
}

.back--button:hover{
    background-color: rgb(214, 209, 209);
}


 /*page responsiveness*/
 @media screen and (max-width:479px){
    .error--container{
        height: 650px;
        width: 420px;
        margin-top: 270px;
     }
 }

 @media screen and (min-width: 480px) and (max-width:619px){
   .error--container{
      height: 800px;
   }
 }

 @media screen and (min-width: 620px) and (max-width: 767px){
   .error--container{
      height:  350px;
   }
 }
 
@media screen and (min-width: 768px) and (max-width: 1023px){
   .error--container{
      height: 720px;
      margin-top: 400px;
   }
}


@media screen and (min-width: 1024px) and (max-width: 1249px){
   .error--container{
      height: 650px;
   }
}

@media screen and (min-width: 1250px) {
   .error--container{
      height: 800px;
   }
}
</style>