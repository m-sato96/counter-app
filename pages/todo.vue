<script setup lang="ts">
const tasks = useCookie<string[]>("tasks", {
  default: () => [],
});

const newTask = ref<string>("");
const addTask = () => {
  if (newTask.value === "") {
    return;
  }
  tasks.value.push(newTask.value);
  newTask.value = "";
};
const deleteTask = (index: number) => {
  tasks.value.splice(index, 1);
};
const clearTask = () => {
  tasks.value = [];
};
</script>
<template>
  <div>
    <h2>Todoアプリ</h2>
    <hr />
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" />
      <button>Add</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
    <button @click="clearTask">Clear</button>
  </div>
</template>
<style scoped>
form {
  margin: 40px auto;
  padding: 20px;
  background: #e8ebd9;
  display: flex;
  align-items: center;
}
input {
  padding: 10px;
  margin-right: 10px;
  width: calc(100% - 100px);
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e8ebd9;
  padding: 10px 0;
}
</style>
