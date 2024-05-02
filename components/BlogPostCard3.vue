<template>
    <div class="card">

        <nuxt-link to="/blog/javascript-web-applications">
            <h1>Learning JavaScript for Web Applications</h1>
        </nuxt-link>

        <img
            class="card-image"
            src="https://advcc-proj2.nyc3.cdn.digitaloceanspaces.com/media/pexels-meneses-340146.jpg"
            alt="..."
        />
        <br>
        <div class="intro">
            <h3>
            JavaScript is a popular programming language for building web, mobile, and desktop applications. There are many frameworks and libraries that have been built around JavaScript, with more likely being developed even as you are reading this article. If you plan to start learning JavaScript, some of them are worth learning as well.
            </h3>
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
    background-color: #1764B9;
}

.card-image {
    width: 30%;
    margin: 0 auto;
    background-color: #0f7696;
}
</style>