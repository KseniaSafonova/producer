<template>
  <div class="page-landing">
    <BlockMain id="main" />
    <BlockAbout id="about" class="page-landing__about" />
    <BlockServices id="services" class="page-landing__services" />
    <CasesSection id="cases" class="page-landing__cases" />
    <BlockContacts id="contacts" class="page-landing__contacts" />
  </div>
</template>

<script>
export default {
  name: 'PageLanding',
}
</script>

<style>
.page-landing__about {
  margin-bottom: 70px;
}

.page-landing__services {
  margin-bottom: 140px;
}

.page-landing__cases {
  margin-bottom: 120px;
}

.page-landing__contacts {
  margin-bottom: 60px;
}
</style>
