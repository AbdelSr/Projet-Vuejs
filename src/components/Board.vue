<template>
  <div>
    <li>
      <ul v-for="item in list" :key="item.id">
        <div>
          <span class="image">Image: {{item.image}}</span><br />
          <span class="name">Name: {{item.name}}</span><br />
          <span class="isActive">actif ?:{{item.isActive}}</span>
        </div>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'board',
  components: { },
  props: {
    list: {
      type: Object
    }
  }

}
</script>
