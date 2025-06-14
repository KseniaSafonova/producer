<template>
  <BaseContainer tag="footer" theme="dark" class="block-footer">
    <BaseLogo class="block-footer__logo" />
    <div class="block-footer__main-block">
      <!--  Контакты -->
      <div class="block-footer__сontacts">
        <a href="tel:+375293725243" class="block-footer__phone-number">+375293725243</a>
        <a href="mailto:info@glebpetrov.com" class="block-footer__email text-2xs">
          info@glebpetrov.com
        </a>
        <p class="block-footer__ip text-5xs text-gray">ИП Петров Глеб Владимирович</p>
        <div class="block-footer__social-networks">
          <IconButton name="instagram" is-pill href="https://www.instagram.com/magistr_glebus/" target="_blank" />
          <IconButton name="tg" is-pill href="https://t.me/magistr_glebus/" target="_blank" />
          <IconButton name="utube" is-pill href="https://www.youtube.com/@glebpetrovproduction" target="_blank"
            :icon-size="30" />
        </div>
      </div>
      <!-- Меню -->
      <FooterListBlock />
    </div>

    <p class="block-footer__copyright">Copyright @ 2025 Gleb Petrov. All Right Reserved</p>
  </BaseContainer>
</template>

<script>
export default {
  name: 'BlockFooter',
}
</script>

<style lang="postcss">
.block-footer {
  padding-top: 90px;

  @media (max-width: $sizeMobile) {
    padding-top: 60px;
  }
}

.block-footer .base-container__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;

  @media (max-width: $sizeMobile) {
    gap: 32px;
  }
}

.block-footer__main-block {
  display: flex;

  @media (max-width: $sizeMobile) {
    flex-direction: column;
    gap: 32px;
  }
}

.block-footer__сontacts {
  color: var(--color-gray-30);
  display: flex;
  flex-direction: column;
  margin-right: 215px;


  @media (max-width: $sizeMobile) {
    width: 100%;
    margin-right: auto;
  }
}

.block-footer__phone-number {
  font-size: var(--size-text-l);
}

.block-footer__phone-number {
  text-decoration: none;
  margin-bottom: 4px;
}

.block-footer__email {
  @media (max-width: $sizeMobile) {
    margin-top: 8px;
  }
}

.block-footer__ip {
  margin-top: 15px;
}

.block-footer__social-networks {
  margin-top: 30px;
  display: flex;
}

.block-footer__copyright {
  color: var(--color-gray);

  font-size: var(--size-text-5xs);
  font-family: var(--font-mono);
  margin-top: 100px;
  margin-bottom: -15px;

  @media (max-width: $sizeMobile) {
    margin-top: 16px;
  }
}
</style>
