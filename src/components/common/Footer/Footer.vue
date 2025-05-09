<script>

export default {
  name: 'Footer',
}

</script>

<template>
  <div class="footer">
    <div class="logo">LOGO</div>
      <div class="mainFooterBlock">
      <div class="footerContactsBlock">
        <div>+375293725243</div>
        <div><a href="">info@glebpetrov.com</a></div>
        <div>ИП Петров Глеб Владимирович</div>
        <div class="socialNetworks">
          <img src="../../../assets/img/instagram.png" alt="">
          <a href="https://t.me/magistr_glebus">
          <img src="../../../assets/img/telegram.png" alt="">
          </a> 
        </div>
      </div>
    <FooterListBlock/>
    </div>
  <div class="copyright">Copyright @ 2025 Gleb Petrov. All Right Reserved</div>
  </div>
</template>

<style lang="postcss">
.footer {
    background-color: var(--color-black);
    height: 565px;
    display: grid;  
}

.mainFooterBlock {
    display: flex;
  margin-top: 200px;
}

.footerContactsBlock {
  width: 413px;
  color: var(--color-gray-30);
  margin-left: 80px;
}

.copyright {
  color: var(--color-gray);
  margin-top: 190px;
  margin-left: 80px;
}

.logo {
  margin-left: 80px;
  color: white;
}
</style>