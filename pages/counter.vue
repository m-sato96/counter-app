<script setup lang="ts">
const { counter } = useCounter();
</script>
<template>
  <div>
    <h2>カウンターアプリ</h2>
    <hr />
    <div>
      <h3>Counter: {{ counter }}</h3>
      <button @click="updateCounter('+')">+</button>
      <button @click="updateCounter('-')">-</button>
      <button @click="updateCounter('')">リセット</button>
    </div>
  </div>
</template>
<style>
h3 {
  margin: 20px auto;
}
button {
  display: inline-block;
  width: 100px;
  height: 40px;
  margin-right: 4px;
}
</style>
