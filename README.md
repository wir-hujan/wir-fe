# ✨ Wirausaha Frontend ✨

## Setup

### installation
1. run `bun install`
2. copy `.env.example` dan paste, kemudian rename menjadi `.env`

### running development
1. run `bun dev`

## Folder structure
Folder terstruktur dalam beberapa bagian:

1. **components** -> menyimpan component
2. **utils** -> menyimpan fungsi yang umum dipakai berulang-ulang
3. **composables** -> menyimpan script reactive yang dipakai berulang-ulang
4. **interfaces** -> menyimpan interface & type typescript
5. **layouts** -> menyimpan layout yang dipakai di pages
6. **pages** -> menyimpan view yang ditampilkan di web
7. **plugins** -> menyimpan file yang di inject ke vue secara langsung
8. **assets** -> menyimpan file dan gambar yg khusus dipakai dalam file `vue` dan tidak terekspos kepada user melalui url
9. **public** -> menyimpan file dan gambar yg bisa diakses oleh siapapun
10. **services** -> menyimpan file yang mengakses api
11. **stores** -> menyimpan global data yang bisa diakses di sepanjang nuxt
12. **constants** -> menyimpan variable yg umum dan tidak bisa diubah

## Example

### composables
Naming dalam composable sebaiknya diawali dengan `use` kemudian diikuti oleh nama fungsinya.
```typescript
export const usePagination = () => {
  const params = ref({
    page: 1,
    size: 15,
  });
  const sizePerPage = [15, 30, 50, 100];
  const data = ref([]);

  const nextPage = () => params.value.page++;
  const prevPage = () => params.value.page--;

  return { params, sizePerPage, data, nextPage, prevPage };
}
```

### services
Naming dalam service sebaiknya diawali dengan method, kemudian diikuti oleh nama fungsinya. contoh: `getEmployees`, `postEmployee`, `patchEmployee`.
```typescript
export const getEmployees = () => {
  const query = ref({
    page: 1,
    size: 15,
    sort: "DESC",
  });

  const run = () =>
    useApi("/employee", {
      query: query,
    });

  return { query, run };
};

```