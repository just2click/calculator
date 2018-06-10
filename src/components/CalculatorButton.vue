<template>
    <button
        :name="options.name"
        :value="options.value"
        class="btn"
        @click="clicked">{{ options.value }}</button>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: [
            'options'
        ],
        methods: {
            ...mapActions([
                'numberClick',
                'setOperation',
                'execute'
            ]),
            clicked () {
                switch (this.options.type) {
                    case 'number':
                        this.$store.dispatch('numberClick', this.options.value);
                        break;
                    case 'operation':
                        this.$store.dispatch('setOperation', this.options.value);
                        break;
                    case 'execute':
                        this.$store.dispatch('execute', this.options.value);
                        break;
                }
            }
        }
    }
</script>
