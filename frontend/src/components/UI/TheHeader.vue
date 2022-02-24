<template>
    <header>
        <div id="logo">
            <router-link to="/ViMotiv/home">
                <img src="../../../public/Vi-Motiv.png" alt="Logo Vi Motiv">
            </router-link>
        </div>
        
        <transition
        appear
        @enter="ulAppear"
        >
            <ul>
                <router-link to="/ViMotiv/news" class="list"> News</router-link>
                <router-link to="/ViMotiv/blog" class="list"> Blog </router-link>
                <router-link to="/ViMotiv/forum" class="list"> Forum </router-link>
                <router-link to="/ViMotiv/focus" class=" list"> Focus </router-link>
            </ul>
        </transition>
        
    </header>
</template>

<script>
import { gsap } from 'gsap'
export default {
    data() {
        const ulAppear = (el) => {
            gsap.from(el, {duration: 3, x: -100, opacity: 0, ease: 'power2  '})
        }
        return {ulAppear}
    },
}
</script>

<style scoped>
header {
    display: flex;
}
#logo {
    width: 57vw;
    background-color: white;
    align-items: center;
}
img {
    width: 60%;
    margin-right: 20%;
    padding: 0;
}
ul {
    border: blanchedalmond solid 1px;
    display: flex;
    width: 50vw;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
}
.list {
    color: white;
    font-weight: bold;
    font-size: 2vw;
}
.list:hover {
    padding: 1%;
    animation: liAnim 0.5s forwards;
}

@keyframes liAnim {
    from {
        background-color: none;
    }
    to {
        padding: 2%;
        background-color: #C17736;
    }
}
</style>