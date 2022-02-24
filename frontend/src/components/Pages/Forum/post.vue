<template>
    <li id="thePost">
        <!--TOP OF THE POST-->
        <div id="topPost">
            <h3 id="title"> {{ title }} </h3>
        </div>

        <!--THE POST-->
        <p> {{ text }} </p>

        <!--BOTTOM OF THE POST-->
         <div id="postData">
             <p>comments</p>
             <p id="date"> created by {{ username }} on {{ date }} </p>
         </div>

         <!--Will be comments-->
    </li>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: false
        },
        date: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        postId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            post: {}
        }
    },
    methods: {
        async loadPost() {
            const myHeaders = new Headers();
            //const token = localStorage.getItem('Token-Frontend-Login')

            //myHeaders.append('Authorization', token);
            myHeaders.append('Cross-Origin-Resource-Policy', 'cross-origin')

            await fetch(`http://localhost:3000/vimotiv/posts/${this.postId}`, {
                headers: myHeaders
            }).then((response) => {
                if (response.ok) {
                    return response.json()
                }
            }).then((data) => {
                const mypost = data[0];

                this.post = {
                        id: mypost.id,
                        id_user: mypost.id_user,
                        username: mypost.from_user, 
                        title: mypost.title,
                        date: mypost.date.slice(0, 19).replace('T', ' '),
                        text: mypost.text,
                        isAdmin: mypost.isAdmin
                }
                console.log(mypost)
            })

        },
    },
    created() {
        this.loadPost()
    }
    
}
</script>

<style scoped>
li {
    list-style: none;
    background-color: white;
    color: black;
}
li img {
    width: 60%;
}
</style>