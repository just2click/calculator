<template>
    <input type="text" :value="digits">
</template>

<script>
    import * as types from './../store/types.js';
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                'digits': [types.GET_DISPLAY]
            })
        }
    }
</script>

