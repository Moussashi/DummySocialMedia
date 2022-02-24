<template>
    <the-header></the-header>
    <div id="container">

        <section id="presentation">
            <h1>This is your working Space</h1>
            <p>Based on the book Deep Work by Cal Newport, use the space on your right to focus on your task. Try to keep concentration through the timer, no phones, friends, or breaks during that time. It will probably be hard at first but it will get easier with time.</p>
            <p>You Can Do This</p>
            <img src="../../../../public/working.jpeg" alt="">
        </section>
        <section id="workingSpace">
            <h1>Pomodoro Clock</h1>

            <div class="timer">
                <svg
                    width="163"
                    height="165"
                    viewBox="-8 -8 184 188"
                    fill="none"
                    id="first-segment"
                >
                    <path
                    stroke="#E9D2B1"
                    stroke-width="15"
                    stroke-linecap="round"
                    d="M165.16,163.38A172,172,0,0,0,0,0"
                    />
                    <path
                    id="top-right"
                    stroke="#F85959"
                    stroke-width="15"
                    stroke-linecap="round"
                    d="M165.16,163.38A172,172,0,0,0,0,0"
                    />
                </svg>
                <svg
                    width="163"
                    height="165"
                    viewBox="-8 -8 184 188"
                    fill="none"
                    id="second-segment"
                >
                    <path
                    stroke="#E9D2B1"
                    stroke-width="15"
                    stroke-linecap="round"
                    d="M0,163.34A172,172,0,0,0,164.44,0"
                    />
                    <path
                    id="bottom-right"
                    stroke="#F85959"
                    stroke-width="15"
                    stroke-linecap="round"
                    d="M0,163.34A172,172,0,0,0,164.44,0"
                    />
                </svg>
                <svg
                    width="163"
                    height="165"
                    viewBox="-8 -8 184 188"
                    fill="none"
                    id="third-segment"
                >
                    <path
                    stroke="#E9D2B1"
                    stroke-width="15"
                    stroke-linecap="round"
                    d="M0,0A172,172,0,0,0,165.16,162.61"
                    />
                    <path
                    id="bottom-left"
                    stroke="#F85959"
                    stroke-width="15"
                    stroke-linecap="round"
                    d="M0,0A172,172,0,0,0,165.16,162.61"
                    />
                </svg>
                <svg
                    width="163"
                    height="165"
                    viewBox="-8 -8 184 188"
                    fill="none"
                    id="fourth-segment"
                >
                    <path
                    stroke="#E9D2B1"
                    stroke-width="15"
                    stroke-linecap="round"
                    d="M160.17,0A172,172,0,0,0,0,161.51"
                    />
                    <path
                    id="top-left"
                    stroke="#F85959"
                    stroke-width="15"
                    stroke-linecap="round"
                    d="M160.17,0A172,172,0,0,0,0,161.51"
                    />
                </svg>
                <div class="time-Display" >
                    <p v-if="resting">Rest</p>
                    <h2>{{timeDisplay}}</h2>
                </div>
            </div>
            <button @click="handleTimer" :disabled="resting" > {{ buttonText }}</button>
        </section>
    </div>
</template>

<script>
import TheHeader from '../../UI/TheHeader.vue'
import ProgressBar from "progressbar.js";
import Yoasobi from "../../../assets/Yoasobi.mp3";
import confetti from "canvas-confetti";
export default {
  name: "Home",
  data: () => {
    const pomodoroDuration = 0.5 * 60; // 25 mins to secs
    return {
        TheHeader,
        pomodoroDuration,
        restDuration: 0.5 * 60,
        currentTimeInSeconds: pomodoroDuration,
        currentSegment: 1,
        buttonText: "Start!",
        topRight: null,
        bottomRight: null,
        bottomLeft: null,
        topLeft: null,
        pathOptions: {
            easing: "linear",
            duration: (pomodoroDuration + 1) * 1000, // add a sec and convert to millis
        },
        interval: null,
        Yoasobi: new Audio(Yoasobi),
        resting: false,
    };
  },
  mounted: function() {
    this.topRight = new ProgressBar.Path("#top-right", this.pathOptions);
    this.topRight.set(1);
    this.bottomRight = new ProgressBar.Path("#bottom-right", this.pathOptions);
    this.bottomRight.set(1);
    this.bottomLeft = new ProgressBar.Path("#bottom-left", this.pathOptions);
    this.bottomLeft.set(1);
    this.topLeft = new ProgressBar.Path("#top-left", this.pathOptions);
    this.topLeft.set(1);
  },
  methods: {
    handleTimer() {
      if (this.buttonText === "Start!" || this.buttonText === "Resume") {
        this.animateBar();
        this.buttonText = "Pause";
      } else if (this.buttonText === "Pause") {
        this.pauseBar();
        this.buttonText = "Resume";
      }
    },
    animateBar() {
      this.reduceTime();
      let segment = null;
      switch (this.currentSegment) {
        case 1:
          segment = this.topRight;
          break;
        case 2:
          segment = this.bottomRight;
          break;
        case 3:
          segment = this.bottomLeft;
          break;
        case 4:
          segment = this.topLeft;
          break;
      }
      segment.animate(
        0,
        {
          duration: (this.currentTimeInSeconds + 1) * 1000,
        },
        this.onFinish
      );
    },
    pauseBar() {
      clearInterval(this.interval);
      switch (this.currentSegment) {
        case 1:
          this.topRight.stop();
          break;
        case 2:
          this.bottomRight.stop();
          break;
        case 3:
          this.bottomLeft.stop();
          break;
        case 4:
          this.topLeft.stop();
          break;
      }
    },
    onFinish() {
      if (this.currentTimeInSeconds <= 0) {
        // When finish, we want it to beep for a few seconds then only start rest timer
        if (this.currentSegment < 4) {
          this.currentSegment += 1;
        } else {
          // Reset all
          this.topRight.set(1);
          this.topLeft.set(1);
          this.bottomRight.set(1);
          this.bottomLeft.set(1);
          confetti({
            particleCount: 300,
            spread: 100,
            origin: { y: 0.7 },
          });
          this.currentSegment = 1;
        }
        // Clear interval
        clearInterval(this.interval);
        // Play audio
        this.Yoasobi.play();
        // Immediately disable button and set state
        this.resting = true;
        this.buttonText = "Rest";
        setTimeout(() => {
          // Change time to reflect rest duration
          this.currentTimeInSeconds = this.restDuration;
          // Start rest after beep ends
          this.startRest();
        }, 4200);
      }
    },
    reduceTime() {
      this.interval = setInterval(() => {
        if (this.currentTimeInSeconds > 0) {
          this.currentTimeInSeconds -= 1;
        }
      }, 1000);
    },
    startRest() {
      // Set new interval
      this.reduceTime();
      setTimeout(() => {
        clearInterval(this.interval);
        this.beepAudio.play();
        this.currentTimeInSeconds = this.pomodoroDuration;
        this.buttonText = "Start!";
        this.resting = false;
      }, this.restDuration * 1000);
    },
  },
  computed: {
    timeDisplay() {
      const minutes = String(parseInt(this.currentTimeInSeconds / 60));
      const seconds = String(this.currentTimeInSeconds % 60);
      const paddedMinutes = ("0" + minutes).slice(-2);
      const paddedSeconds = ("0" + seconds).slice(-2);
      return `${paddedMinutes}:${paddedSeconds}`;
    },
  },
};
</script>
<style scoped>
#container {
    margin: 0;
    padding: 0;
    background-color: white;
    width: 200vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    margin: auto;
    color: black;
}
#presentation {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.the-header {
    width: 100vw;
    position: fixed;
}
#workingSpace {
    width: 100vw;
    height: 100vh;
    background-color: rgb(37, 37, 97);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#presentation img {
    width: 50vw;
}
#presentation p {
    width: 70vw;
}
.timer {
    position: relative;
    margin-top: 100px;
    width: 330px;
    height: 330px;
}
#first-segment {
    position: absolute;
    top: 0;
    right: 0;
}
#second-segment {
    position: absolute;
    bottom: 0;
    right: 0;
}
#third-segment {
    position: absolute;
    bottom: 0;
    left: 0;
}
#fourth-segment {
    position: absolute;
    top: 0;
    left: 0;
}
h2 {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, 50%);
}
button {
    margin-top: 50px;
    width: 200px;
    height: 68px;
    background: rgb(68, 174, 216);
    border-radius: 20px;
    border: none;
    cursor: pointer;
    text-align: center;
}
button:focus {
    outline: none;
}

.time-display {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

p {
    line-height: 48px;
    text-align: center;
}

</style>