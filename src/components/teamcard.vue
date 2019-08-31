<template>
    <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12" v-for="list in lists" v-bind:key="list.index">
              <div class="member my-4">
                  <div class="row no-gutters">
                    <div class="col-md-4 shadow-lg">
                        <img :src="list.img" class="card-img member-image" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="member-details">
                            <div class="card-body text-center">
                                <div class="name">{{ list.name }}</div>
                                <div class="subtitle designation text-uppercase small my-2">{{ list.designation }}</div>
                                <div class="card-text description text-muted">{{ list.description }}</div>
                                <div class="social-media justify-content-center">
                                    <ul class="social-media-links d-flex p-0 m-0 justify-content-center">
                                        <li class="social-media-icon mx-3">
                                            <a href="https://facebook.com" target="_blank" class="facebook-icon"><font-awesome-icon :icon="['fab', 'facebook-square']" class="" /></a>
                                        </li>
                                        <li class="social-media-icon mx-3">
                                            <a href="https://twitter.com" target="_blank" class="twitter-icon"><font-awesome-icon :icon="['fab', 'twitter']" class="" /></a>
                                        </li>
                                        <li class="social-media-icon mx-3">
                                            <a href="https://instagram.com" target="_blank" class="instagram-icon"><font-awesome-icon :icon="['fab', 'instagram']" class="" /></a>
                                        </li>
                                    
                                    </ul>
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

<script>
// import image1 from "../assets/4.jpg";
// import image2 from "../assets/2.jpg";
// import image3 from "../assets/5.jpg";
// import image4 from "../assets/6.jpg";

export default {
    props: ['lists'],
    data() {
        return {
            // lists: [
            //     {
            //         img: image1,
            //         name: "Alec Thompson",
            //         designation: "Founder",
            //         description: "Don't be scared of the truth because we need to restart the human foundation in truth."
            //     },
            //     {
            //         img: image2,
            //         name: "Kendall Andrew",
            //         designation: "Graphic Designer",
            //         description: "Don't be scared of the truth because we need to restart the human foundation in truth."
            //     },
            //     {
            //         img: image3,
            //         name: "Gina Andrew",
            //         designation: "Web Designer",
            //         description: "Don't be scared of the truth because we need to restart the human foundation in truth."
            //     },
            //     {
            //         img: image4,
            //         name: "George West",
            //         designation: "Backend Hacker",
            //         description: "Don't be scared of the truth because we need to restart the human foundation in truth."
            //     }
            // ]
        }
    }
}
</script>

<style lang="scss">
.member-image{
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
}

.name{
  font-weight: bold;
  font-size: 1rem;
}

ul{
    list-style: none;

    .facebook-icon{
        color: blue;
    }
    .twitter-icon{
        color: skyblue;
    }
   

}
</style>