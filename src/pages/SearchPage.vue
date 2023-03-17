<template>
<div>
<div class="input--search">
  <div class="search--bar">
    <img src="../images/search-icon.png" alt="seach-logo" class="search--icon"/>
    <input type="text" v-model="search" class="input--search" @keydown.enter.prevent="searchItem"/>
  </div>
    <button @click.prevent="searchItem" class="search--button" >Search</button> 

</div>
<div v-if="isLoading" class="loader-body">
  <div class="loader"></div>
</div> 

    <div v-if="post">
        <div class="post--container">
            <div class="profile--container">
               <img :src="post.avatar_url" alt="avatar" class="avatar"/>
                <p class="name">{{ post.name }}</p>
                <p class="username">{{ post.login }}</p>
                <p class="bio">{{ post.bio }}</p>
                <a :href="post.html_url" target="_blank" class="profile--link">View Profile</a>
              </div>
              <div class="details--container">
                <div class="details--side">
                <div class="count--container">
                <p>Repos: <span>{{ post.public_repos }}</span></p>
                <p>Gist:  {{ post.public_gist }}</p>
                <p>Followers:  {{ post.followers }}</p>
                <p>Following: {{ post.following }}</p>
              </div>
              <div class="contact--container">
                <p>Blog: {{ post.blog }}</p>
                <p>Twitter: {{ post.twitter_username }}</p>
                <p>Location: {{ post.location }}</p>
              </div>
              </div>
              <div class="date--container">
                <p>Created At: {{ post.created_at }}</p>
                <p>Updated At: {{ post.updated_at }}</p>
              </div>
          </div>
        </div>
    </div>
<p v-if="userNotFound"> User Not Found</p>
</div>

</template>

<script>
export default{
    data(){
        return{
        search: "",
        post: null,
        isLoading: false,
        userNotFound: false
        };
    },

    

    methods: {
       async searchItem(){
            this.isLoading = true;
            this.post = null;
            this.userNotFound = false;
            try{
     const response = await fetch(`https://api.github.com/users/${this.search}`)
      if(response.ok){
        const data = await response.json();
        this.post = data;
      }else{
        this.userNotFound = true
      }
    }catch (error){
        console.error(error)
    }
    this.isLoading = false 
        this.isLoading = false 
    this.isLoading = false 
    }
   
        },
    }

</script>


<style scoped>
.post--container{
    background-color: rgba(60, 230, 60, 0.9);
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 60px;
    padding: 70px;
    margin: 25px;
    font-family: 'Montserrat', sans-serif;
}

.profile--container{
  padding: 20px 10px;
  border-radius: 10px;
  border: 1px solid rgb(60,230,60);
  /* border: 1px solid black; */
}

.search--icon{
  width: 20px;
  border: 1px solid rgb(60, 230, 60);
  padding: 3px;
  border-radius: 3px;
}

.input--search{
    display: flex;
    justify-content: center;
    place-items: center;
    padding: 5px;
    width: 200px;
    margin: auto;
}


.search--bar{
  display: flex;
}

.search--button{
    background-color: rgb(60, 230, 60);
    color: black;
    border: none;
    outline: none;
    padding: 6px;
    border-radius: 3px;
    margin: auto;
    transition: 0.3s
}

.search--button:hover{
    background-color: rgb(77, 131, 77);
}

.input--search{
    display: flex;
    gap: 3px;
    place-items: center;
    justify-content: center;
    align-items: center;
  
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
}

.contact--container{
  border: 1px solid rgb(60,230,60);
  padding: 20px 50px;
}

.count--container{
  border: 1px solid rgb(60,230,60);
  padding: 20px 50px;
}

.date--container{
  border: 1px solid rgb(60,230,60);
  text-align: center;
  vertical-align: center;
  padding: 20px 50px;
}

.details--container{
  gap: 5px;
}

.name{
    color: black;
    font-size: 30px;
    font-weight: bold;
}

p{
  font-size: 14px;
  font-weight: lighter;
  font-family: 'Montserrat', sans-serif;
}

.profile--link{
  text-decoration: none;
  background-color: black;
  color: rgb(60, 230, 60);
  border-radius: 10px;
  padding: 10px 10px;
  width: 10px;
}

.avatar{
  border-radius: 50px;
  margin: 5px;
  width: 300px;
}


@media screen and (max-width: 479px){
  .avatar{
    width: 200px;

  }

  
}


@media screen and (min-width: 768px) and (max-width: 1023px){
  .avatar{
    width: 250px;
  }

  .search--button{
     padding: 10px;
  }

  .input--search{
    padding: 10px;
    width: 500px;
  }

  .search--icon{
    width: 30px;
  }
  .profile--link{
    padding: 10px 25px;
  }
 

}

@media screen and (min-width: 1024px){
  .search--button{
     padding: 10px;
  }

  .input--search{
    padding: 10px;
    width: 500px;
  }

  .search--icon{
    width: 30px;
  }

  .details--container{
    display: grid;
  }

  .details--side{
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 30px;
  }

  .post--container{
    display: flex;
   justify-content: space-between;
  }

  .profile--link{
    padding: 10px 25px;
  }
}

</style>