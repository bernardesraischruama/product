<script setup>
import {useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>

<template>
    {{ counterStore.count }}
</template>

