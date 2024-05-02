<template>
    <div class="card">
        
        <nuxt-link
            to="/blog/responsive-web-applications">
            <h1>Responsive Web Applications</h1>
        </nuxt-link>

        <img
            class="card-image"
            src="https://advcc-proj2.nyc3.cdn.digitaloceanspaces.com/media/taras-shypka-iFSvn82Xf.jpg"
            alt="..."
        />
        
        <br>
        <div class="intro">
            <h3>
            Responsive apps refer to creating a website that can be accessed from a desktop, mobile, or any interface.
                A responsive app enables users to have a better experience irrespective of the device, OS, screen size, orientation, and browser platform. These apps are styled using an inline style, different layouts, and flexible images to ensure consistent UX.
            </h3>
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
    background-color: #1764B9;
}

.card-image {
    width: 30%;
    margin: 0 auto;
    background-color: #0f7696;
}
</style>