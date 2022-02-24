<template>
<the-header></the-header>
    <h1>
        Awesome Blog
    </h1>
    <ul>
        <blog-content
            v-for="art in Articles"
            :key="art.id"
            :id="art.id"
            :title="art.title"
            :content="art.content"
            :img="art.img"
            :date="art.date"
        ></blog-content>
    </ul>
</template>

<script>
import BlogContent from "./BlogContent.vue"
import TheHeader from "../../UI/TheHeader.vue"
export default {
    components: {
        BlogContent,
        TheHeader
    },
    data() {
        return {
            Articles: []
        }
    },
    methods: {
        async fetchArticle() {
            
            const fetchData = async () => {
                const response = await fetch('http://localhost:3000/vimotiv/blog')
                const data = response.json()
                return data
            }

            await fetchData().then( articles => {
                const result = []
                for (const id in articles) {
                    result.push( {
                        id: articles[id].id,
                        title: articles[id].title,
                        content: articles[id].content,
                        img: articles[id].img,
                        date: articles[id].date
                    })
                }

                for (let i = result.length-1; i >= 0; i--) {
                    this.Articles.push(result[i])   
                }
            })

        },


    },
    mounted() {
        this.fetchArticle()
    }
}
</script>