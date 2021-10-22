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
    }
})

app.component('activity-card', {
    props: ['activity'],
    methods: {

    },
    template: `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top activity-img" src="https://static.bigbox.com.ar/uploads/activity/7d70d0e1-50a7-4395-ad5f-ed3a7a723f2f.jpg" alt="Card image cap">
    <div class="card-body activity-card-body">
      <h5 class="card-title activity-title">{{ this.activity?.title }}</h5>
      <p class="card-text activity-location">Palermo, CABA</p>
      <p class="card-text activity-description">Caipiroska a granel con vodka y picoteo de tu bar preferido, directo a la peurta de tu casa</p>
      <p class="card-text activity-points">5500 puntos</p>
    </div>
  </div>
    `
})

app.mount('#app')
