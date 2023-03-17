 <template>
    <!-- <h1>Repo item</h1> -->
    <div v-if="isLoading" class="loader-body">
    <div class="loader"></div>
    </div>
    <div v-else class="repo--item-container" >
        <div class="repo--heading">
    <p class="full--name">{{ post.full_name }} <span class="visible">{{ post.visibility }}</span></p>
    <p>Branch: {{ post.default_branch }}</p>
      </div>
    <div class="repo--item-header">
        <div class="repo--item-profile">
        <img :src=post.owner.avatar_url  class="avatar" alt="github-avatar"/>
        <!-- <img src=""/> -->
        <p class="owner--name">{{ post.owner.login }}</p>
   
       
        </div>
        <div class="left--side">
            <div class="repo--item-counts">
         <p>Forks: {{ post.forks }}</p>
         <p>Watchers: {{ post.watchers }}</p>
         <p>Subscribers: {{ post.subscribers_count }}</p>
        </div>
        <div class="repo--item-lang">
            <p> Language(s): {{ post.language }}</p>
        </div>
         <div class="repo--item-date">
            <p>Created At: {{ post.created_at }}</p>
            <p>Updated At: {{ post.updated_at }}</p>
         </div>
        </div>

    </div>

    <div class="repo--item-link">
        <button @click.prevent="onClick" class="button">&#8592;Go Back</button>
            
        <a :href=post.html_url target="_blank" class="repo--link">Go to Repo&#8594;</a>
    </div>
</div>

</template>

<script>


export default{
   
    data(){
        return{
            post: "",
            isLoading: true
        }
    },

    methods: {
        onClick(){
          this.$router.push("/repos")
        }
    },

    created(){
        const reposId = this.$route.params.reposId;
        this.isLoading = true
        fetch(`https://api.github.com/repositories/${reposId}`)
        .then((response) => response.json())
        .then(data => {
            this.post = data;
            this.isLoading = false
    })

},
 
}
</script>

<style scoped>
   .repo--item-container{
    border-radius: 20px;
  margin: 25px;
  /* color: black; */
  /* background-color: rgb(60,230,60); */
  background-color: rgba(0,0,0,0.9);
  color: rgb(60,230,60);
  padding: 80px;
  margin-top: 30px;
  margin-bottom: 50px;
  font-family: 'Montserrat', sans-serif;
   }

   .visible{
    background-color: black;
    color: rgb(60,230,60);
    border: 1px solid rgb(60,230,60);
    border-radius: 10px;
    padding: 2px;
   }

  
.full--name{
    font-size: 20px;
}

.owner--name{
    font-size: 18px;
    font-weight: bold;
   }

.button{
    border: none;
    /* background-color: rgba(0, 0, 0, 0.5); */
    background: none;
    padding: 0;
    color: rgb(60,230,60);
    font-weight: bolder;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    text-decoration: underline 3px solid rgba(60, 230, 60, 0.5) ;
   }

   .repo--link{
    text-decoration: none;
    color: rgb(60,230,60);
    font-weight: bolder;
    text-decoration: underline 3px solid rgba(60, 230, 60, 0.5) ;
   }

   .repo--item-link{
    display: flex;
    justify-content: space-between;
    gap: 60px;
   }

.avatar{
    width: 100px;
    border-radius: 50px;
}

.loader-body{
   width: 100%;
   height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0,0,0,0.9) ;
}
.loader{
  border: 10px solid rgb(60, 230, 60);
  border-top: 10px solid black;
  border-radius: 80px;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}



    /*media queries */
    @media screen and (max-width:479px){
        .repo--item-profile{
   /* box-shadow: rgba(0,0,0, 0.1) 0px 4px 12px; */
   box-shadow: rgba(60,230,60, 0.1) 0px 4px 12px;
   padding: 30px;
   width: 100px;
   border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
    color: rgb(38,141,38);
  }
    }

    @media screen and (min-width: 620px) and (max-width: 767px){
        .repo--item-container{
          margin-top: 250px;
          margin-bottom: 250px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px){

        .repo--item-profile{
   /* box-shadow: rgba(0,0,0, 0.1) 0px 4px 12px; */
   box-shadow: rgba(60,230,60, 0.1) 0px 4px 12px;
   padding: 50px;
   border-radius: 10px;
    margin: 5px;
    background-color: rgba(0,0,0, 0.1)  ;
    color: rgb(38, 141, 38);
  }

   .visible{
    background-color: black;
    color: rgb(60,230,60);
    border: 1px solid rgb(60,230, 60);
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
    font-weight: 14px;
} 

   

   .repo--item-header{
    display: flex;
    justify-content: space-between;
    margin: 10px;
   }

   .repo--heading{
    display: flex;
    justify-content: space-between;
   }

   .repo--item-counts{
    display: flex;
    justify-content: space-between;
    margin: 20px;
   }
   .repo--item-date{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: 20px;
   }
   .repo--item-lang{
    margin: 20px;
   }

   .repo--item-link{
 display:flex;
 justify-content: space-between;
   }

   
   

   .left--side{
    padding: 30px;
   }

   
  
    .avatar{
        width: 150px;
        height: 150px;
        border-radius: 70px;
    }
    }

    @media screen and (min-width: 1024px){
       
        .repo--item-profile{
   box-shadow: rgba(60,230,60, 0.1) 0px 4px 12px;
   padding: 50px;
   border-radius: 10px;
    margin: 5px;
    background-color: rgba(0,0,0, 0.4)  ;
    color: rgb(38, 141, 38);
  }

   .visible{
    background-color: black;
    color: rgb(60,230,60);
    border: 1px solid rgb(60,230, 60);
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
    font-weight: 14px;
} 

   

   .repo--item-header{
    display: flex;
    justify-content: space-between;
    margin: 10px;
   }

   .repo--heading{
    display: flex;
    justify-content: space-between;
   }

   .repo--item-counts{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
   }
   .repo--item-date{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 50px;
   }
   .repo--item-lang{
    margin-top: 50px;
   }

   .repo--item-link{
 display:flex;
 justify-content: space-between;
   }

   
   

   .left--side{
    padding: 30px;
   }
   
    .avatar{
        width: 150px;
        height: 150px;
        border-radius: 70px;
    }
    } 
    
</style>