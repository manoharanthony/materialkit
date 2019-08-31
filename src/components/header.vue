<template>
<div class="header">
    <div class="container">
        <div class="pb-5">           
        <b-navbar class="small" toggleable="lg" type="light" variant="faded">
            <b-navbar-brand href="#" class="text-white">Material Kit Pro</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto text-uppercase">
                <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><path d="M2 10h3V7H2v3zm0-5h3V2H2v3zm0 10h3v-3H2v3zm5 0h3v-3H7v3zm5-5h3V7h-3v3zm-5 0h3V7H7v3zm5 5h3v-3h-3v3zm0-13v3h3V2h-3zM7 5h3V2H7v3z"/></svg>								
                <b-nav-item-dropdown text="Components" class="mr-4 text-white">
                    <!-- <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item> -->
                </b-nav-item-dropdown>
                <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"/></svg>								
                <b-nav-item-dropdown text="Sections" class="mr-4">
                    <!-- <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item> -->
                </b-nav-item-dropdown>
                <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/></svg>			
                <b-nav-item-dropdown text="Examples" >
                    <!-- <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item> -->
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        </div>

        <div class="col-md-6 mt-5">
            <div class="heading text-left">
                <div class="title text-white">Your Story Starts With Us.</div>
                <div class="subtitle text-white">Every landing page needs a small descripton after the big bold title, thats why we added this text here. Add here all the information that can make you or your product create the first impression.</div>
            </div>
            <b-button class="float-left my-5 px-4 py-3 text-uppercase" variant="danger">
                <font-awesome-icon :icon="['fas', 'play']" class="fa-1x" />
                Watch video
            </b-button>
        </div>    
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header{
    background-image: url("~@/assets/bg.jpg");
    background-size: cover;
    height: 95vh;    

    .title{
    font-weight: bold;
    font-size: 3.5rem;
    }

    li{
    line-height: 0px;
    color: white;
    }
    .nav-icon{
        fill:white;
    }
}
</style>