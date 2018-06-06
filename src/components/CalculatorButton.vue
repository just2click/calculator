<template>
    <button :name="options.name" :value="options.value" class="btn">{{ options.value }}</button>
</template>

<script>
    export default {
        props: [
            'options'
        ],
        methods: {
            clicked () {

            }
        }
    }
</script>
