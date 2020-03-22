<template>
  <div id="app">
    <div class="header-top pt-4 bg-color-2">
      <div class="container p-3">
        <div class="row">
          <div class="header-logo mr-5 ml-5"><img src="./assets/logo.png" width="40px" height="30px"></div>
            <div>
              <router-link to="/">Home</router-link> |
              <router-link to="/category">Category</router-link>
            </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
