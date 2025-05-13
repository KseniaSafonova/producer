<script>

export default {
  name: 'Footer',
}

</script>

<template>
  <div class="footer">
    <div class="logo">GLEB PETROV</div>
      <div class="mainFooterBlock">
<!--  Контакты -->
      <div class="footerContactsBlock">
        <div class="phoneNumber">+375293725243</div>
        <div class="mail">info@glebpetrov.com</div>
        <div class="ip">ИП Петров Глеб Владимирович</div>
        <div class="socialNetworks">
          <a href="https://www.instagram.com/magistr_glebus/">
            <img src="../../../assets/img/instagram.png" alt="">
          </a>
          <a href="https://t.me/magistr_glebus">
            <img src="../../../assets/img/telegram.png" alt="">
          </a> 
        </div>
      </div>
<!-- Меню -->
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
  margin-top: 80px;
}

.logo {
  color: var(--color-gray-30);
  font-family: var(--font-flex);
  margin-top: 120px;
  margin-left: 80px;
  font-weight: 700;
  font-size: var(--size-text-3xl);
  line-height: 24px;
}

.footerContactsBlock {
  width: 413px;
  color: var(--color-gray-30);
  margin-left: 80px;
}

.phoneNumber {
  font-weight: 400;
  font-size: var(--size-text-l);
  font-family: var(--font-mono);
}

.mail {
  font-weight: 400;
  font-size: var(--size-text-2xs);
  text-decoration: underline;
  text-decoration-style: solid;
  font-family: var(--font-mono);
  line-height: 150%;
}

.ip {
  font-weight: 400;
  font-size: var(--size-text-5xs);
  color: var(--color-gray);
  margin-top: 15px;
  font-family: var(--font-mono);
}

.socialNetworks {
  margin-top: 30px;
}

.socialNetworks img {
  margin-left: 10px;
}

.copyright {
  color: var(--color-gray);
  margin-top: 170px;
  margin-left: 80px;
  font-size: var(--size-text-5xs);
  font-family: var(--font-mono);
}

</style>