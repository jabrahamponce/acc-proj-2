<template>
    <div class="card">
        <nuxt-link to="/blog/learning-web-development">
            <h1>Learning Web Development 101</h1>
        </nuxt-link>

        <img
            class="card-image"
            src="https://advcc-proj2.nyc3.cdn.digitaloceanspaces.com/media/pexels-goumbik-574070.jpg"
            alt="..."
        />
        <br>
        <div class="intro">
            <h3>
            Website development broadly refers to the tasks and processes that are involved to create and maintain a website. That includes everything from the markup, to coding and scripting, network configuration, and CMS development.
            </h3>
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
    color: white;
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
    background-color: #1764B9;
}

.card-image {
    width: 40%;
    margin: 0 auto;
}
</style>