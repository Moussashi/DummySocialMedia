<template>
    <the-header></the-header>
    <form @submit.prevent="sendPost()" enctype="multipart/form-data">
    <div class="formControl">
        <label for="title">Title</label>
        <input type="text" id="title" v-model.trim="title" />
    </div>

    <div class="formControl">
        <label for="text">Text</label>
        <textarea name="text" id="text" cols="30" rows="10" v-model.trim="text" placeholder="I am an inspirationnal text... I think"></textarea>
    </div>

    <div id="action">
        <button>Create new Post</button>
    </div>
    </form>
</template>

<script>
import TheHeader from '../../UI/TheHeader.vue'
export default {
    components: {
        TheHeader,
    },
    data() {
        return  {
            date: '',
            title: '',
            text: '',
            user: '',
        }
    },
    methods: {

        sendPost() {
            const formData = new FormData();
            formData.append('title', this.title),
            formData.append('id_user', 1),
            formData.append('from_user', 'Muzen'),
            formData.append('text', this.text)

            fetch("http://localhost:3000/vimotiv/posts", {
                method: "POST",
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            }).then((response) => {
                console.log(response);
                this.$router.replace('/vimotiv/forum')
            })
        }
    }
}
</script>

<style scoped>
form {
    width: 60vw;
    height: 50vh;
    background-color: white;
    border-radius: 10%;
    margin: auto;
    margin-top: 10%;
    padding: 5%;
    color: black;
}
.formControl {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>