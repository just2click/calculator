<template>
    <div class="container">
            <table>
                <tr>
                    <td colspan="4">
                        <app-input class="display"></app-input>
                    </td>
                </tr>
                <tr v-for="row in layout" :key="row.key">
                    <td v-for="button in row.buttons" :key="button.key">
                        <app-button :options="button"></app-button>
                    </td>
                </tr>
            </table>
    </div>
</template>

<script>
    import CalculatorInput from './components/CalculatorInput.vue';
    import CalculatorButton from './components/CalculatorButton.vue';
    import { keyboardLayout } from './settings/keyboard.js';

    export default {
        data () {
            return {
                layout: keyboardLayout
            }
        },
        components: {
            appInput: CalculatorInput,
            appButton: CalculatorButton
        }
    }
</script>

<style lang="stylus">
    body
        font-family: 'Montserrat', sans-serif

    .btn
        background-color: #B0BEC5
        border: none
        border-radius: 2px
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
        color: #fff
        font-size: 16px
        height 36px
        line-height: 36px
        width: 40px
        padding 0 16px
        margin: 2px
        outline: 0
        letter-spacing: 0.5px
        text-align: center
        text-shadow: 0 2px 2px rgba(0,0,0,0.14)
        text-decoration: none
        transition: .3s ease-out
        vertical-align: middle

        &:hover
            background-color: #CFD8DC

    .display
        background: #ECEFF1
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
        color: rgba(0, 0, 0, 0.5)
        font-size: 16px
        height 36px
        line-height: 36px
        padding: 0 8px
        text-align: right
</style>
