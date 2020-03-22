<template>
<div class="main bg-color-1">
        <div class="jumbo-tron">
            <div class="hero-image"></div>
        </div>

        <!-- <div class="card-container">
            <div class="row">
                <div class="cardmenu-1">
                    <h3>LARAVEL</h3><hr>
                    <img src="../assets/logo.png" width="100" height="180">
                </div>
                <div class="cardmenu-1">
                    <h3>LARAVEL</h3>
                    <img src="../assets/logo.png" width="100" height="180">
                </div>
                <div class="cardmenu-1">
                    <h3>LARAVEL</h3>
                    <img src="../assets/logo.png" width="100" height="180">
                </div>
                <div class="cardmenu-1">
                    <h3>LARAVEL</h3>
                    <img src="../assets/logo.png" width="100" height="180">
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="row">
                <div class="cardmenu-2">
                    <h4>Produk Terlaris</h4><hr>
                    <img src="../assets/logo.png" width="100" height="50">
                </div>
            </div>
        </div> -->
        <div class="card-container">
        <div class="row card-product col-md-10">
            <div class="cardmenu-3" v-for="(products, index) in Jaket" :key="index">
                    <div class="card-product-image">
                        <img src="../assets/logo.png" width="180" height="180">
                    </div>
                    <div class="card-product-name">
                        <h5>{{ products.name }}</h5>
                    </div>
                    <div class="card-product-price">
                        <h6> Rp. {{ products.price }}</h6>
                    </div>
            </div>
            <div class="cardmenu-3" v-for="(products, index) in Sweater" :key="index">
                    <div class="card-product-image">
                        <img src="../assets/logo.png" width="180" height="180">
                    </div>
                    <div class="card-product-name">
                        <h5>{{ products.name }}</h5>
                    </div>
                    <div class="card-product-price">
                        <h6> Rp. {{ products.price }}</h6>
                    </div>
            </div>
            <div class="cardmenu-3" v-for="(products, index) in Celana" :key="index">
                    <div class="card-product-image">
                        <img src="../assets/logo.png" width="180" height="180">
                    </div>
                    <div class="card-product-name">
                        <h5>{{ products.name }}</h5>
                    </div>
                    <div class="card-product-price">
                        <h6> Rp. {{ products.price }}</h6>
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
      Jaket: [],
      Sweater: [],
      Celana: []
    }
  },
  created () {
    this.getAll()
  },
  methods: {
    getAll () {
      axios.get('https://raw.githubusercontent.com/Kayama21/uts-project/master/product.json')
        .then((response) => {
          this.Jaket = response.data.Jaket
          this.Sweater = response.data.Sweater
          this.Celana = response.data.Celana
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
