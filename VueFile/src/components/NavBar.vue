<script setup>
</script>

<template>
  <div class="container">
      <header>
        <h1>ICT</h1>
      </header>

    <nav class="navbar">
        <ul>
            <li>Item</li>
            <li>Assignee</li>
            <li>Repair</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
    </nav>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 200px;
    width: 100%;
    background-color: #f5f5f5
}

.container div{
  width: 2em;
    height: 2em;
    background-color: #343a40;
    border-radius: 0.25rem;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-right: 20px;
}
</style>