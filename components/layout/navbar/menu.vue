<script setup>
const data = [
  {
    name: "Employee",
    children: [
      {
        name: "List Employee",
        url: "/dashboard/employee",
      },
      {
        name: "Create Employee",
        url: "/dashboard/employee/create",
      },
    ],
  },
  {
    name: "Store",
    children: [
      {
        name: "List Store",
        url: "/dashboard/store",
      },
      {
        name: "Create Store",
        url: "/dashboard/store/create",
      },
    ],
  },
  {
    name: "Product",
    children: [
      {
        name: "List Product",
        url: "/dashboard/product",
      },
      {
        name: "Create Product",
        url: "/dashboard/product/create",
      },
    ],
  },
  {
    name: "Market",
    children: [
      {
        name: "List Market",
        url: "/dashboard/market",
      },
      {
        name: "Create Market",
        url: "/dashboard/market/create",
      },
    ],
  },
];

const isOpen = ref(false);
</script>

<template>
  <div class="flex justify-center">
    <UPopover
      v-model:open="isOpen"
      :popper="{ placement: 'top' }"
      :ui="{ overlay: { base: 'w-[50%]' } }"
    >
      <UButton label="Menu" trailing-icon="i-heroicons-chevron-down" />

      <template #panel>
        <div class="p-5">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-16">
            <div v-for="(v, key) in data" :key>
              <BaseText bold size="lg" :text="v.name" />
              <div class="mt-5 space-y-1 flex flex-col">
                <ULink
                  v-for="(link, key2) in v.children"
                  :key="key2"
                  :to="link.url"
                  @click="isOpen = false"
                  active-class="text-primary"
                >
                  {{ link.name }}
                </ULink>
              </div>
            </div>
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>
