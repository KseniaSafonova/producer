<template>
  <BaseContainer  tag="footer" theme="dark">
  <div class="block-footer">
    <div class="block-footer__logo">GLEB PETROV</div>
      <div class="block-footer__mainBlock">
<!--  Контакты -->
      <div class="block-footer__сontacts">
        <div class="block-footer__phoneNumber">+375293725243</div>
        <div class="block-footer__email">info@glebpetrov.com</div>
        <div class="block-footer__ip">ИП Петров Глеб Владимирович</div>
        <div class="block-footer__socialNetworks">
          <a href="https://www.instagram.com/magistr_glebus/"> 
            <SvgIcon name="instagram" iconSize="20" fill="var(--color-gray)" class="block-footer__socialNetworks-img"/>
          </a>
          <a href="https://t.me/magistr_glebus">
            <SvgIcon name="tg" iconSize="20" fill="var(--color-gray)" class="block-footer__socialNetworks-img"/>
          </a> 
        </div>
      </div>
<!-- Меню -->
    <FooterListBlock/>
    </div>
  <div class="block-footer__copyright">Copyright @ 2025 Gleb Petrov. All Right Reserved</div>
  </div>
  </BaseContainer>
</template>

<script>

export default {
  name: 'Footer',
}

</script>

<style lang="postcss">
.block-footer {
  background-color: var(--color-black);
  height: 565px;
  display: grid;  

  @media (max-width: 768px) {
    height: 793px;
  }
}

.block-footer__mainBlock {
  display: flex;
  margin-top: 80px;
  width: 100%;

  @media (max-width: 768px) {
    display: grid;
    height: 565px;
    margin-top: 20px;
  }
}

.block-footer__logo {
  color: var(--color-gray-30);
  font-family: var(--font-flex);
  margin-top: 120px;
  margin-left: 80px;
  font-weight: 700;
  font-size: var(--size-text-3xl);
  line-height: 24px;

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-left: 15px;
  }
}

.block-footer__сontacts {
  width: 413px;
  color: var(--color-gray-30);
  margin-left: 80px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 15px;
  }
}

.block-footer__phoneNumber {
  font-weight: 400;
  font-size: var(--size-text-l);
  font-family: var(--font-mono);
}

.block-footer__email {
  font-weight: 400;
  font-size: var(--size-text-2xs);
  font-size: 15px;
  text-decoration: underline;
  text-decoration-style: solid;
  font-family: var(--font-mono);
  line-height: 150%;

  @media (max-width: 768px) {
    margin-top: 8px;
  }
}

.block-footer__ip {
  font-weight: 400;
  font-size: var(--size-text-5xs);
  color: var(--color-gray);
  margin-top: 15px;
  font-family: var(--font-mono);
}

.block-footer__socialNetworks {
  margin-top: 30px;
}

.block-footer__socialNetworks-img {
  margin-left: 10px;
}

.block-footer__copyright {
  color: var(--color-gray);
  margin-top: 170px;
  margin-left: 80px;
  font-size: var(--size-text-5xs);
  font-family: var(--font-mono);

    @media (max-width: 768px) {
    margin-top: 100px;
    margin-left: 15px;
  }
}

</style>