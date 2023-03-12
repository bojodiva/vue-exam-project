<template>
   <div class="footer--container">
    <div class="logo--container">
        <h3 class="footer--logo">BojoCodes</h3>
    </div>
    <div>
        <h3 class="footer--heading">Quick Links</h3>
        <div class="link--container">
            <router-link to="/" class="footer--link">Home</router-link>
            <router-link to="/repos" class="footer--link">Repositories</router-link>
        </div>
    </div>

    <div>
        <h3 class="footer--heading">Follow my socials</h3>
        <div class="link--container">
       <a href="https://twitter.com/b_ojo_" rel="noreferrer" target="_blank" class="socials--link"><img src="../images/twitter-logo.svg" class="socials--logo"/> Twitter</a>
       <a href="https://github.com/bojodiva" rel="noreferrer" target="_blank" class="socials--link"><img src="../images/github-logo.svg" class="socials--logo-github"/> GitHub</a>
       <a href="https://www.linkedin.com/in/abisola-ojo-/" rel="noreferrer" target="_blank" class="socials--link"><img src="../images/linkedin-logo.svg" class="socials--logo"/> LinkedIn</a>
       <a href="https://instagram.com/bojodiva?igshid=ZDdkNTZiNTM=" rel="noreferrer" target="_blank" class="socials--link"><img src="../images/instagram-logo.png" class="socials--logo"/> Instagram</a>
        </div>
    </div>

    
       <div class="footer--last"><h1 class="footer--small"> &#169;2023, built and designed with &#x2764; by Bojo</h1></div>
    

   </div>
</template>

<script>
   export default{}
</script>

<style scoped>
 .footer--container{
    background-color: black;
    display: grid;
    grid-template-rows: 2fr 1fr 2fr;
    text-align: center;
    height: 650px;
 }

 .footer--logo{
    color: azure;
    font-weight: lighter;
    margin-top: 100px;
    font-size: 30px;
 }

 .logo--container{
   border: 2px solid  rgb(60, 230, 60);
 }
 .footer--heading{
    color:azure;
    font-weight: lighter;
 }

 .link--container{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
 }

 .footer--link{
    text-decoration: none;
    color: rgb(60, 230, 60);
 }

 .socials--link{
    text-decoration: none;
    color: rgb(60, 230, 60); 
 }

 .socials--logo{
    width: 20px;

 }
 .socials--logo-github{
    background-color: azure;
    width: 20px;
    border-radius: 10px;
 }

 .footer--last{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 }

 .footer--small{
    text-align: center;
    color: azure;
    font-size: 10px;
    font-weight: lighter;
 }

 /*page responsiveness*/
 @media screen and (max-width:479px){
    .footer--container{
        height: 800px;
        width: 420px;
     }
 }

 @media screen and (min-width: 480px) and (max-width:619px){
   .footer--container{
      height: 800px;
   }
 }

 @media screen and (min-width: 620px) and (max-width: 767px){
   .footer--container{
      height:  350px;
   }
 }
 
@media screen and (min-width: 768px) and (max-width: 1023px){
   .footer--container{
      height: 1000px;
   }
}


@media screen and (min-width: 1024px) and (max-width: 1249px){
   .footer--container{
      height: 650px;
   }
}

@media screen and (min-width: 1250px) {
   .footer--container{
      height: 800px;
   }
}
</style>