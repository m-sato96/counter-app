<script setup lang="ts"></script>
<template>
  <div>
    <header>
      <h1>Nuxt3 アプリ</h1>
    </header>
    <div class="contents">
      <slot />
      <ul>
        <li>
          <NuxtLink to="/"> TOP </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/counter"> Counter </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/todo"> Todo </NuxtLink>
        </li>
      </ul>
    </div>
    <footer>&copy; Sato</footer>
  </div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
header {
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}
.contents {
  padding: 80px 20px;
}
footer {
  background: #000;
  color: #fff;
  text-align: center;
}
ul {
  margin: 60px 0;
}
li {
  list-style: none;
  padding: 4px 0;
}
</style>
