// components/multiSelectControl/multiSelectControl.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        text: {
            type: String,
            value: ''
        },
        selects: {
            type: Array,
            value: [{
                value: 0,
                name: 'test1',
            }, {
                value: 1,
                name: 'test2',
            }, {
                value: 2,
                name: 'test3',
            }, {
                value: 3,
                name: 'test4',
            }]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
