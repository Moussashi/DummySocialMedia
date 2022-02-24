<template>
    <li id="Pst">
        <div id="top">
            <h3> {{ title }} </h3>
        </div>

        <h5> {{ description }} </h5>

        <section id="content">
            <p> {{ content }} </p>
            <img :src="img" alt=" picture not found">
        </section>

        <footer>
            <a :href="url">Visit the website's article</a>
            <p>Published at : {{ publishedAt }} </p>
        </footer>

    </li>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        publishedAt: {
            type: String,
            required: true
        },
    }
}
</script>

<style scoped>
#Pst {
    list-style: none;
    padding: 1%;
    background-color: white;
    color: #2c3e50;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    text-align: center;
    margin: auto;
    margin-bottom: 1.1vw;
}
#top {
    font-size: 2vw;
    margin-bottom: 5vw;
}
h5 {
    font-size: 1.5vw;
    margin-bottom: 5vw;
}
#content {
    display: flex;
    justify-content: space-between;
    font-size: 1.3vw;
    align-items: center;
}
p {
    margin: auto;
    text-align: left;
}
img {
    width: 30vw;
}
footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10vw;
}
a:hover {
    animation: linkAnim 0.5s forwards;
}

@keyframes linkAnim {
    from {
        background-color: none;
    }
    to {
        padding: 2%;
        background-color: #b8c6db;
    }
}
</style>