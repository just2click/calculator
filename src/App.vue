<template>
    <div class="container">
        <form name="calculator">
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
        </form>
    </div>
</template>

<script>
    import CalculatorInput from './components/CalculatorInput.vue';
    import CalculatorButton from './components/CalculatorButton.vue';

    export default {
        data () {
            return {
                layout: [
                    {
                        key: 'row1' ,
                        buttons:
                        [
                            { key: 'one', value: 1, type: 'number' },
                            { key: 'two', value: 2, type: 'number' },
                            { key: 'three', value: 3, type: 'number' },
                            { key: 'plus', value: '+', type: 'operation' }
                        ]
                    },
                    {
                        key: 'row2',
                        buttons: [
                            { key: 'four', value: 4, type: 'number' },
                            { key: 'five', value: 5, type: 'number' },
                            { key: 'six', value: 6, type: 'number' },
                            { key: 'minus', value: '-', type: 'operation' }
                        ]
                    },
                    {
                        key: 'row3',
                        buttons: [
                            { key: 'seven', value: 7, type: 'number' },
                            { key: 'eight', value: 8, type: 'number' },
                            { key: 'nine', value: 9, type: 'number' },
                            { key: 'multiply', value: '*', type: 'operation' }
                        ]
                    },
                    {
                        key: 'row4',
                        buttons: [
                            { key: 'claer', value: 'C', type: 'operation' },
                            { key: 'zero', value: 0, type: 'number' },
                            { key: 'equal', value: '=', type: 'operation' },
                            { key: 'divide', value: '/', type: 'operation' }
                        ]
                    }
                ]
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
        color: #fff
        font-size: 16px
        height 36px
        line-height: 36px
        padding: 0 8px
</style>
