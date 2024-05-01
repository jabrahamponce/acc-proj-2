<template>
    <div class="card">
        <nuxt-link to="/blog/learning-web-development">
            <h1>Learning Web Development 101</h1>
        </nuxt-link>

        <img
            class="card-image"
            src="https://storage.googleapis.com/proj1-advcc/media/9SoCnyQmkzI.jpg"
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
            to="/blog/learning-web-development">
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

.intro {
    color: #ffffff;
}

.btn-blog {
    font-size: 20px;
}

.card {
    border: 0.5px solid #000000;
    width: 80%;
    margin: 0 auto;
    background-color: #351226;
}

.card-image {
    width: 40%;
    margin: 0 auto;
    background-color: #0f7696;
}
</style>