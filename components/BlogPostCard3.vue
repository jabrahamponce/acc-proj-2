<template>
    <div class="card">

        <nuxt-link to="/blog/javascript-web-applications">
            <h1>Learning JavaScript for Web Applications</h1>
        </nuxt-link>

        <img
            class="card-image"
            src="https://storage.googleapis.com/proj1-advcc/media/Skf7HxARcoc.jpg"
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
            to="/blog/javascript-web-applications">
            Read more...
            </nuxt-link>
        </div>
        <br>
        <br>
    </div>
</template>

<style>
h1 {
    color: #ffffff;
}

.btn-blog {
    font-size: 20px;
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