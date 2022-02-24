<template>
    <footer>

        <p>Made with love</p>

        <div class="social">
            <p> <fa icon="arrow-down" />Reach me Here <fa icon="arrow-down" /></p>
            <div id="logos">
                <a href="https://www.linkedin.com/in/moussa-sy-04899772/"> <img class="logo" src="../../../public/linkedin.png" alt="linkedin logo"> </a>
                <a href="https://twitter.com/moussasyph"> <img class="logo" src="../../../public/twitter.png" alt="twitter logo"> </a>
                <a href="https://github.com/Moussashi"> <img class="logo" src="../../../public/github.png" alt="github logo"> </a>
            </div>
        </div>

        <p class="laptop"> <fa icon="laptop-code" /> </p>
    </footer>
</template>

<style scoped>
footer {
    width: 100vw;
    height: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
}
.logo {
    width: 5vw;
}
.logo:hover {
    animation: Grow 0.5s forwards;
}
.laptop {
    font-size: 1.5rem;
}
@keyframes Grow {
    to {
        width: 7vw;
        border: white 1px solid;
    }
}
</style>