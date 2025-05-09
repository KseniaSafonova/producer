<script>

export default {
  name: 'Footer',
}

</script>

<template>
  <div class="footer">
    <div class="footerContactsBlock">
      <p>+375293725243</p>
      <p>info@glebpetrov.com</p>
      <p>ИП Петров Глеб Владимирович</p>
      <p>Copyright @ 2025 Gleb Petrov. All Right Reserved</p>
      <p>
        <img src="../../../assets/img/instagram.png" alt="">
        <img src="../../../assets/img/telegram.png" alt="">
      </p>
    </div>
   <FooterListBlock/>
   </div>
</template>

<style lang="postcss">
.footer {
    background-color: var(--color-black);
    height: 565px;
    height: 200px;
    display: flex;
}
</style>