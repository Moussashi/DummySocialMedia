<template>
    <div id="paper">
        <header>
            <h2> {{ title }}  </h2>
        </header>

        <section id="content">
            <img :src="img" alt="">
            <p> {{ content }} </p>
        </section>

        <p id="date"> {{ date }} </p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
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
        date: {
            type: String,
            required: true
        },

    }
}
</script>

<style scoped>
* {
    outline: red solid 1px;
}
#paper {
    border: grey solid 2px;
}
#title {
    font-weight: bold;
}
#content p {
    text-align: justify;
}
img {
    float: left;
    width: 30%;
    height: min-content;
    margin: 1vw;
}
#date {
    text-align: right;
    font-weight: bold;
}
</style>