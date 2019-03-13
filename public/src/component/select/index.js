export default {
    name: 'Select',
    props: {
        readonly: { default: true },
        options: { default: [] },
    },
    methods: {
        click: function () {
            console.log('----');
        }
    }
};