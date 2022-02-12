<template>
  <aside  class="border-right shadow-sm aside-nav" :class="{ active: activeAside }">
    <div class="aside-brand text-decoration-none border-b-0">
      Logo
    </div>

    <ul class="nav flex-column aside-nav-ul main-list-style">
      <li class="nav-item" v-for="(link, index) in mainLinks" :key="index">
        <nuxt-link :to="link.redirect" class="nav-link" exact>
          <img :src="link.icon" alt="icon" width="30" height="30">
          <span> {{link.title}}</span>
        </nuxt-link>
      </li>
    </ul>

    <ul class="nav flex-column aside-nav-ul">
      <li class="nav-item" v-for="(link, index) in sideLinks" :key="index">
        <nuxt-link :to="link.redirect" class="nav-link" exact>
          <img :src="link.icon" alt="icon" width="30" height="30">
          <span> {{link.title}}</span>
        </nuxt-link>
      </li>
    </ul>

    <p class="aside-version">Version 5.0.0</p>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      mainLinks: [
        {
          title: 'Home',
          icon: require('../assets/icons/sideBar/Home.svg'),
          redirect: '/'
        },
        {
          title: 'Discover',
          icon: require('../assets/icons/sideBar/Discover.svg'),
          redirect: '/discover'
        },
        {
          title: 'Library',
          icon: require('../assets/icons/sideBar/Library.svg'),
          redirect: '/library'
        },
      ],
      sideLinks: [
        {
          title: 'Profile',
          icon: require('../assets/icons/sideBar/Profile.svg'),
          redirect: '/profile'
        },
        {
          title: 'Playlists',
          icon: require('../assets/icons/sideBar/Playlists.svg'),
          redirect: '/playlists'
        },
        {
          title: 'Referral',
          icon: require('../assets/icons/sideBar/Referral.svg'),
          redirect: '/referral'
        },
        {
          title: 'History',
          icon: require('../assets/icons/sideBar/History.svg'),
          redirect: '/history'
        },
        {
          title: 'Settings',
          icon: require('../assets/icons/sideBar/Settings.svg'),
          redirect: '/settings'
        },
        {
          title: 'Akhdar Content',
          icon: require('../assets/icons/sideBar/AkhdarContent.svg'),
          redirect: '/akhdar-content'
        },
        {
          title: 'Help Center',
          icon: require('../assets/icons/sideBar/HelpCenter.svg'),
          redirect: '/help-center'
        },
      ]
    }
  },
  props: {
    activeAside: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
