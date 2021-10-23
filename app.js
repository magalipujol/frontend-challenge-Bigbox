let app = Vue.createApp({
    data() {
        return{
            activities: [],
        }
    },
    async mounted() {
        const response = await fetch('https://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=9')
        data = await response.json()
        this.activities = await data
        for (let activity of this.activities) {
            activity.activity = JSON.parse(activity.activity)
        }
        console.log(this.activities)
    }
})

app.component('activity-card', {
    props: ['activity'],
    methods: {

    },
    template: `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top activity-img" :src="this.activity?.activity.image[0]" alt="Card image cap">
    <div class="card-body activity-card-body">
      <h5 class="card-title activity-title">{{ this.activity?.title }}</h5>
      <p class="card-text activity-location">{{ this.activity?.activity.locations[0].province }}</p>
      <p class="card-text activity-participants">{{ this.activity?.activity.participants }}</p>
      <p class="card-text activity-description">{{ this.activity?.activity.description }}</p>
      <p class="card-text activity-points">{{ this.activity?.points }} puntos</p>
    </div>
  </div>
    `
})

app.mount('#app')
