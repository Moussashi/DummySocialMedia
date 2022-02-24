<template>
    <the-header></the-header>
    <h1>
        Awesome Forum
    </h1>
    <ul>
        <post
            v-for="po in posts"
            :key="po.id"
            :postId="po.id"
            :title="po.title"
            :text="po.text"
            :date="po.date"
            :username="po.username"></post>
    </ul>

    <router-link to="/vimotiv/forum/newpost">
            <button>New Post</button>
    </router-link>

</template>


<script>
import TheHeader from '../../UI/TheHeader.vue'
import post from './post.vue'
export default {
    components: {
        TheHeader,
        post
    },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        async loadData() {

            await fetch('http://localhost:3000/vimotiv/posts')
                .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            }).then((data) => {
                const results = [];
                for (const id in data) {
                    results.push({
                        id: data[id].id,
                        username: data[id].from_user,
                        title: data[id].title,
                        date: data[id].date.slice(0, 19).replace('T', ' '),
                        text: data[id].text,
                        postId: data[id].id
                    })
                }

                for (let i = results.length - 1; i >= 0; i--) {
                    this.posts.push(results[i])
                }
            })
        }
    },
    created() {
        this.loadData()
    }
}
</script>

<style scoped>
button {
    background: white;
    border-radius: 50%;
    width: 7vw;
    height: 7vw;
    position: fixed;
    bottom: 5%;
    left: 5%;
}
button:hover {
    animation: buttonH 0.5s forwards;
}

@keyframes buttonH {
    to {
        width: 10vw;
        height: 10vw;
        opacity: 0.5;
    }
}
</style>