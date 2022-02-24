<template>
<the-header></the-header>
    <h1>
        Awesome News
    </h1>
        <transition-group
            tag="ul"
            appear
            @before-enter="articlesAppear"
        >
            <div>
                <all-articles
                    tag="li"
                    v-for="(art, index) in article" 
                    :key="art.id"
                    :data-index="index"
                    :title="art.title"
                    :description="art.description"
                    :img="art.urlToImage"
                    :content="art.content"
                    :url="art.url"
                    :publishedAt="art.publishedAt"
                ></all-articles>
            </div>
        </transition-group>

    <div id="loading" v-if="article.length === 0"> Loading... </div>
</template>

<script>
import gsap from 'gsap'
import allArticles from './article.vue'
import TheHeader from '../../UI/TheHeader.vue'
export default {
    components: {
        allArticles,
        TheHeader
    },
    data() {
        const articlesAppear = (el) => {
            gsap.from(el, { 
                duration: 1, 
                x: -100, 
                opacity: 0,
                delay: el.dataset.index * 0.2,
                stagger: 0.2,
                ease: 'power1' })
        }
        return {
            articlesAppear,
            article: []
        }
    },
    methods: {
         async getArticle() {

            await fetch('https://newsapi.org/v2/everything?q=coding&from=2022-02-15&sortBy=publishedAt&apiKey=99a940e7327e4be7bccbdf507eb0df2e')
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                }).then((data) => {
                    const result = []
                    for (const id in data.articles) {
                        result.push({
                            title: data.articles[id].title,
                            description: data.articles[id].description,
                            content: data.articles[id].content,
                            urlToImage: data.articles[id].urlToImage,
                            url: data.articles[id].url,
                            publishedAt: data.articles[id].publishedAt
                        })
                    }

                    console.log(result);

                    for (let i = result.length-1; i >= 0; i--) {
                        this.article.push(result[i])
                    }

                })
        }
    },
    mounted() {
        this.getArticle()
    }
}
</script>
<style scoped>
ul {
    margin: auto;
    width: 80vw;
}
@media only screen and (min-width: 1025px) {
    ul {
        width: 50vw;
    }
}
</style>

//Gsap doesn't work on the component. Try to find a way out
implemement locomotiv scroll if possible

