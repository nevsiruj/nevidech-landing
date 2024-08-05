<template>
  <div>
    <!-- Cabecera común en todas las páginas -->
    <header class="bg-blue-500 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Nevidech Group S.A.S</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="/" class="hover:underline">Inicio</a></li>
            <li><a href="#services" class="hover:underline">Servicios</a></li>
            <li><a href="#about" class="hover:underline">Sobre Nosotros</a></li>
            <li><a href="#contact" class="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- Renderiza la página actual -->
    <NuxtPage />
    <!-- Pie de página común en todas las páginas -->
    <footer class="bg-blue-500 text-white p-4">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Nevidech Group S.A.S. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
