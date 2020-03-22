<template>
<div class="main bg-color-1">
  <div class="row">
    <div class="col-md-3">
    <div class="card m-2">
      <div class="card-header bg-color-2">
        List Category
      </div>
      <div class="card-body">
        <router-link to="/jaket">Jaket<hr></router-link>
        <router-link to="/sweater">Sweater<hr></router-link>
        <router-link to="/celana">Celana</router-link>
      </div>
    </div>
  </div>
  <div class="col-md-9">
    <div class="card-container">
        <div class="row card-product">
            <div class="cardmenu-3" v-for="(sweater, index) in Sweater" :key="index">
                    <div class="card-product-image">
                        <img src="../assets/logo.png" width="180" height="180">
                    </div>
                    <div class="card-product-name">
                        <h5>{{ sweater.name }}</h5>
                    </div>
                    <div class="card-product-price">
                        <h6> Rp. {{ sweater.price }}</h6>
                    </div>
            </div>
        </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      Sweater: []
    }
  },
  created () {
    this.getAll()
  },
  methods: {
    getAll () {
      axios.get('https://raw.githubusercontent.com/Kayama21/uts-project/master/product.json')
        .then((result) => {
          this.Sweater = result.data.Sweater
          console.log(result.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
