<script setup lang="ts">
useSeoMeta({
  title: "Dashboard",
});

const greetingsUi = {
  base: 'col-span-1 lg:col-span-3 py-5 lg:py-10',
  background: 'bg-primary dark:bg-primary-700',
  body: {
    base: 'text-white',
  }
}
</script>

<template>
  <div class="space-y-12">
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <UCard :ui="greetingsUi">
        <BaseText bold size="lg" text="Selamat datang, tester masbro" />
        <BaseText size="sm" text="Superadmin" class="text-gray-100 dark:text-gray-300" />
      </UCard>

      <DashboardSellingInformation />
      <DashboardGeneralAverage class="col-span-4" />
    </section>

    <section class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <DashboardStatisticSales class="lg:col-span-3" />
      <div class="flex flex-col gap-5">
        <DashboardSuperadminHighestSales />
        <DashboardSuperadminLowestSales />
      </div>
    </section>

    <section>
      <DashboardSuperadminHistoryLogin />
    </section>

    <section>
      <DashboardCheckInOutHistory />
    </section>
  </div>
</template>
