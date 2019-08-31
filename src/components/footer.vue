<template>
    <div class="footer">
        <div class="container">
            <div class="row my-3">
                <div class="col text-uppercase text-left">
                    <ul class="nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Creative Tim</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Licenses</a>
                    </li>
                </ul>
                </div>
                
                <div class="col p-2 footer-text text-muted text-right">
                    &copy; 2019, made with
                    <font-awesome-icon :icon="['fas', 'heart']" class="fa-1x text-muted" />
                    by Creative Tim for a better web. 
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.footer-text{
    font-size: 14px;
}

.nav{
    .nav-link{
        color: black;
        font-size: 10px;
    }
}
</style>