<script setup lang="ts">
const headers = {
  'x-coedo-name': 'kayabacho',
}

const {
  data,
  status,
} = useFetch('/api/send', {
  query: {
    path: '/api/foo/bar',
    q: 'search-string',
  },
  headers,
})

const results = ref<Record<string, unknown>>({})
const post = async () => {
  const fetched = await $fetch<Record<string, unknown>>('/api/send', {
    query: {
      path: '/api/foo/bar/baz',
    },
    headers,
  })
    .catch((err) => {
      console.log('fetch error:', err)
    })
  if (fetched != null) {
    results.value = fetched
  }
}
</script>

<template>
  <div>
    <h1>useFetch: no pass</h1>
    <div>
      <button @click="post">$fetch</button>
    </div>
    <pre v-if="status === 'success'">
      {{ data }}
    </pre>
    <hr>
    <pre>
      {{ results }}
    </pre>
  </div>
</template>

<style scoped>
</style>
