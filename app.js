let app = Vue.createApp({
    data() {
        return {
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

// TODO the classes should be the same, mayyyybe (aprilbe jejeje)
app.component('activity-description', {
    template: `
    <div class="container">
            <button type="button" class="btn btn-light btn-back">&lt;-</button>
            <div class="row">
                <div class="col">
                    <img height="150" width="150" src="https://static.bigbox.com.ar/uploads/activity/7d70d0e1-50a7-4395-ad5f-ed3a7a723f2f.jpg" alt="">
                </div>
                <div class="col">
                    <p class="fs-1 activity-description-title">1 player Start!</p>
                    <p class="fs-5 activity-description-description">Una hora de juego ilimitado en tus fichines favoritos en Bar el Destello, con una cerveza y sándwich a elección</p>
                    <p class="fs-5 activity-description-participants">Para 2 personas</p>
                    <p class="fs-5 activity-description-location">CABA</p>
                    <p class="fs-5 activity-description-points">2990 puntos</p>
                </div>
            </div>
            <p class="fs-1">¿Qué incluye?</p>
            <ul class="incluido">
                <li class="fs-5">Un pase libre de 1 hora en Bar el Destello, para jugar a tus fichines retro favoritos. </li>
                <li class="fs-5">Una cerveza, sidra o vermut y sandwich a elección</li>
            </ul>
            <p class="fs-5">
                ay 14 arcades y un flipper en sus muebles originales. Para saber si todavía sos tan bueno como crees en el Tetris, o para terminar de una vez por todas el Wonderboy
            </p>
            <p class="fs-1">Reglas</p>
            <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam soluta voluptatum sapiente maxime autem animi repellendus eveniet, velit aperiam, dolorem numquam unde!</p>
        </div>
    `
})

app.component('similar-activities-carousel', {
    template: `
    `
})

app.mount('#app')
