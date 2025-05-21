<script setup>
    defineProps({
        modelValue: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        error: { type: Boolean, default: false },
    })
</script>

<template>
    <div class="input-wrap">
        <input
            type="text"            
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :class="{ error: error }"
            :placeholder="placeholder"
            v-bind="$attrs"
        />
        
    </div>
</template>

<style lang="postcss" scoped>
.input-wrap {
    position: relative;
    padding-top: 12px; /* пространство для плейсхолдера */
  }

input {
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--color-gray);
    padding: 0 0 16px;
    font-size: var(--size-text-5xs);
    outline: none;
    transition: border-bottom-color 0.2s;
  }
  
  input:focus {
    border-bottom-color: var(--color-black);
  }
  
  input.error {
    border-bottom-color: var(--color-error);
    color: var(--color-error);
  }

  input.error::placeholder {
  color: var(--color-error);
  opacity: 1; /* чтобы цвет точно проявился */
}
</style>