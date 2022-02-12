<template>
    <div>
      <div class="tabs">
        <ul class="list-style">
          <li v-for="(tab, index) in tabs" :key="index" :class="{ 'is-active': tab.isActive }" class="list">
            <button class="list-btn" @click.prevent="selectTab(tab)">{{ tab.name }}</button>
          </li>
        </ul>
      </div>
      <div class="tabs-details">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
    return {
        tabs: []
      }
    },
    created() {
      this.tabs = this.$children;
    },
    methods: {
      selectTab: function(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.name == selectedTab.name);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
