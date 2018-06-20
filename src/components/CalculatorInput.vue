<template>
    <input type="text" v-model="digits">
</template>

<script>
    import * as types from './../store/types.js';
    import { mapGetters } from 'vuex';

    export default {
        data () {
            return {
                numericValue: ''
            }
        },
        watch: {
            value: (val) => {
                if (val.length === 0) {
                    this.numericValue = '0';
                }
            }
        },
        computed: {
            ...mapGetters({
                'digits': [types.GET_DISPLAY]
            })
        }
    }
</script>

