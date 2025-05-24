<template>
  <BaseContainer tag="section" class="block-contacts">
    <div class="block-contacts__content">
      <!-- Левая часть: текстовая информация -->
      <div class="block-contacts__info">
        <BaseTitlesContainer
          title="Контакты"
          subtitle="Заинтересованы
                     в сотрудничестве?"
        />
        <p class="block-contacts__info-text">
          Хотите обсудить идеи или задать вопросы?
          <span class="block">
            Буду рад вашему сообщению — всегда открыт для интересных проектов и креативных
            обсуждений!</span
          >
        </p>
      </div>

      <!-- Правая часть: форма -->
      <form class="contact-form" ref="contactForm" @submit.prevent="submitForm" novalidate>
        <div class="contact-form__fields">
          <div class="contact-form__group">
            <BaseInput
              name="Имя"
              v-model="formData.firstName"
              placeholder="Имя *"
              :error="v$.firstName.$error"
            />
            <span
              class="contact-form__error"
              v-for="error in v$.firstName.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </span>
          </div>
          <BaseInput v-model="formData.lastName" placeholder="Фамилия" name="фамилия" />
          <BaseInput v-model="formData.company" placeholder="Компания" name="компания" />
          <div class="contact-form__group">
            <BaseInput
              v-model="formData.email"
              placeholder="Email *"
              type="email"
              :error="v$.email.$error"
              name="email"
            />
            <span class="contact-form__error" v-for="error in v$.email.$errors" :key="error.$uid">
              {{ error.$message }}
            </span>
          </div>
          <BaseInput v-model="formData.shortMessage" placeholder="Комментарий" name="комментарий" />

          <input type="hidden" name="_format" value="json" />
          <input type="hidden" name="_url" value="https://glebpetrov.com" />
          <!--  Тема письма  -->
          <input type="hidden" name="_subject" value="Новая заявка с сайта GlebPetrov" />
          <!--  Шаблон письма, где нет лишнего текста, а только таблица с полями:  -->
          <input type="hidden" name="_template" value="table" />
        </div>

        <BaseButton type="submit">Связаться со мной</BaseButton>
        <p class="contact-form__privacy">
          Нажимая на кнопку, я даю согласие на хранение, использование и обработку моих персональных
          данных в соответствии с
          <router-link :to="{ name: 'PagePrivacyPolicy' }">Политикой конфиденциальности</router-link
          >.
        </p>
      </form>

      <!-- Всплывающее спасибо-сообщение -->
      <div v-if="showToast" class="contact-form__toast">
        <p>Спасибо! Я с Вами свяжусь.</p>
      </div>
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, required, minLength, helpers } from '@vuelidate/validators'
import { ref, reactive, computed } from 'vue'

const formData = reactive({
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  shortMessage: '',
})

const showToast = ref(false)
const rules = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage('Пожалуйста, введите имя', required),
      minLength: helpers.withMessage('Имя должно содержать минимум 3 символа', minLength(3)),
    },
    lastName: '',
    company: '',
    email: {
      // когда пусто:
      required: helpers.withMessage('Поле «Email» обязательно', required),
      // когда формат неправильный:
      email: helpers.withMessage('Пожалуйста, введите корректный email', email),
    },
    shortMessage: '',
  }
})

const v$ = useVuelidate(rules, formData)
const contactForm = ref<HTMLFormElement | null>(null)

function resetForm() {
  formData.firstName = ''
  formData.lastName = ''
  formData.company = ''
  formData.email = ''
  formData.shortMessage = ''
  v$.value.$reset()
}

const submitForm = async () => {
  const valid = await v$.value.$validate()
  if (!valid) return

  try {
    const payload = new FormData(contactForm.value!)
    const response = await fetch('https://formsubmit.co/ajax/info@glebpetrov.com', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: payload,
    })
    const result = await response.json()
    if (result.success) {
      resetForm()
      // показать toast и скрыть через 3 секунды
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 3500)
    } else {
      alert('Ошибка отправки: ' + (result.message || 'Попробуйте позже'))
    }
  } catch (error: any) {
    alert('Сетевая ошибка: ' + error.message)
  }
}
</script>

<style lang="postcss" scoped>
.block-contacts {
  padding-top: 60px;
  padding-bottom: 60px;

  @media (max-width: $sizeMobile) {
    padding-top: 20px;
  }
}

.block-contacts__content {
  display: flex;
  gap: 129px;
  align-items: flex-start;

  max-width: 955px; /* согласованная ширина секции */
  margin: 0 auto;

  @media (max-width: 1023px) {
    gap: 60px;
  }

  @media (max-width: $sizeMobile) {
    flex-direction: column;
    gap: 40px;
  }
}

.block-contacts__info {
  flex: 1;
}

:deep(.heading-secondary) {
  /* разбивать текст по \n */
  white-space: pre-line;
}

.block-contacts__info-text {
  font-size: var(--size-text-2xs);
  letter-spacing: 0.01em;
  line-height: 1.6;
}

.block-contacts__info-text .block {
  display: block;
}

.contact-form__privacy {
  margin-top: 8px;
  font-size: var(--size-text-6xs);
  letter-spacing: 0.01em;
  color: #777;
}

.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.contact-form__fields {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 48px;
}

.contact-form__group {
  position: relative;
}

.contact-form__error {
  position: absolute;
  color: var(--color-error);
  font-size: var(--size-text-5xs);
}

/* Стили спасибо-сообщения */
.contact-form__toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-white);
  color: var(--color-primary);
  padding: 16px 24px;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  font-size: var(--size-text-2xs);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  opacity: 1;

  @media (max-width: $sizeMobile) {
    padding: 12px;
    font-size: var(--size-text-5xs);
  }
}
</style>
