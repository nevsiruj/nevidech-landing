<template>
  <div>
    <!-- Sección de bienvenida -->
    <section class="bg-gray-100 py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4">
          New Vision of Digital Enterprises and Consulting Hub
        </h2>
        <p class="text-lg mb-8">
          Impulsando el crecimiento de tu empresa con soluciones innovadoras y
          estrategias efectivas.
        </p>
        <button
          class="px-8 py-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Conoce Más
        </button>
      </div>
    </section>

    <!-- Sección de servicios -->
    <section id="services" class="py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Nuestros Negocios</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-white shadow rounded">
            <h3 class="text-xl font-bold mb-4">Consultoría Empresarial</h3>
            <p>
              Ofrecemos soluciones personalizadas para optimizar y transformar tu negocio.
            </p>
          </div>
          <div class="p-6 bg-white shadow rounded">
            <h3 class="text-xl font-bold mb-4">Desarrollo de Software a Medida</h3>
            <p>
              Creamos aplicaciones personalizadas que mejoran la eficiencia y productividad de tu empresa.
            </p>
          </div>
          <div class="p-6 bg-white shadow rounded">
            <h3 class="text-xl font-bold mb-4">Marketing Digital</h3>
            <p>
              Implementamos estrategias efectivas para aumentar tu presencia online y atraer más clientes.
            </p>
          </div>
          <div class="p-6 bg-white shadow rounded">
            <h3 class="text-xl font-bold mb-4">Producto SaaS</h3>
            <p>
              Desarrollamos y gestionamos soluciones SaaS para facilitar la gestión de tus procesos empresariales.
            </p>
          </div>
          <div class="p-6 bg-white shadow rounded">
            <h3 class="text-xl font-bold mb-4">Préstamos Privados</h3>
            <p>
              Ofrecemos servicios de financiación privada adaptados a las necesidades de tu negocio.
            </p>
          </div>
          <div class="p-6 bg-white shadow rounded">
            <h3 class="text-xl font-bold mb-4">Tiendas Físicas de Ventas</h3>
            <p>
              Administramos tiendas físicas especializadas en la venta de productos, comidas y bebidas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección sobre nosotros -->
    <section id="about" class="bg-gray-100 py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Sobre Nosotros</h2>
        <p class="text-lg">
          Nevidech Group S.A.S. es un grupo de negocios diversificado que opera en múltiples rubros, incluyendo consultoría empresarial, desarrollo de software, marketing digital, productos SaaS, financiación privada y gestión de tiendas físicas. Nos dedicamos a ofrecer soluciones integrales que ayudan a las empresas a crecer y prosperar en el mundo digital. Nuestro equipo de expertos está comprometido con la excelencia y la innovación.
        </p>
      </div>
    </section>

    <!-- Sección de contacto -->
    <section id="contact" class="py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Contáctanos</h2>
        <form class="max-w-lg mx-auto">
          <div class="mb-4">
            <input
              type="text"
              placeholder="Nombre"
              class="w-full p-3 border rounded"
            />
          </div>
          <div class="mb-4">
            <input
              type="email"
              placeholder="Correo Electrónico"
              class="w-full p-3 border rounded"
            />
          </div>
          <div class="mb-4">
            <textarea
              placeholder="Mensaje"
              class="w-full p-3 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            class="px-8 py-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
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
