<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link"><i class="icon-speedometer"></i> {{ $t('Dashboard') }} <span class="badge badge-info">NEW</span></router-link>
        </li>
        <li class="nav-title">
          {{ $t('UI Elements') }}
        </li>
        <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/components'}" disabled>
          <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="icon-puzzle"></i>{{ $t('Components') }}</div>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link :to="'/components/buttons'" class="nav-link" exact><i class="icon-puzzle"></i>{{ $t('Buttons') }}</router-link>
            </li>
          </ul>
        </router-link>
      </ul>
    </nav>
  </div>
</template>
<script>

export default {
  name: 'sidebar',
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
</style>
