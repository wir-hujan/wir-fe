<script setup lang="ts">
const ui = {
  body: {
    base: 'text-center',
  },
};
</script>

<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
    <UCard :ui>
      <BaseText size="xl" bold text="20"/>
      <BaseText size="sm" text="Rata-rata Penjualan Dalam Satu Hari" />
    </UCard>
    <UCard :ui>
      <BaseText size="xl" bold text="10"/>
      <BaseText size="sm" text="Toko Aktif" />
    </UCard>
    <UCard :ui>
      <BaseText size="xl" bold text="5"/>
      <BaseText size="sm" text="Barang Kadaluarsa" />
    </UCard>
    <UCard :ui>
      <BaseText size="xl" bold text="2"/>
      <BaseText size="sm" text="Laporan" />
    </UCard>
  </div>
</template>
