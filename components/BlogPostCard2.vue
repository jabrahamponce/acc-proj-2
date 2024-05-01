<template>
    <div class="card">
        
        <nuxt-link
            to="/blog/responsive-web-applications">
            <h1>Responsive Web Applications</h1>
        </nuxt-link>

        <img
            class="card-image"
            src="https://storage.googleapis.com/proj1-advcc/media/gySMaocSdqs.jpg"
            alt="..."
        />
        <br>
        <div class="intro">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatum mollitia porro, minus fugiat aliq</h3>
        </div>
        <br>
        <div>
            <nuxt-link
            class="btn-blog"
            to="/blog/responsive-web-applications">
            Read more...
            </nuxt-link>
        </div>
        <br>
        <br>
    </div>
</template>

<style>
h1 {
    color: #000000;
}

.btn-blog {
    font-size: 20px;
    font-weight: bold;
    border: 1px solid #ffffff;
    color: #ffffff;
    padding: 5px;
    background-color: #0c5f5f;
}

.card {
    border: 0.5px solid #ffffff;
    width: 80%;
    margin: 0 auto;
    background-color: #351226;
}

.card-image {
    width: 30%;
    margin: 0 auto;
    background-color: #0f7696;
}
</style>