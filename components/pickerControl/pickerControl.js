// components/pickerControl/pickerControl.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        text: {
            type: String,
            value: ''
        },
        date: {
            type: String,
            value: '1990-01-01'
        },
        title: {
            type: String,
            value: 'test'
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
        bindDateChange: function(e) {
            this.setData({
                date: e.detail.value
            })
        },
    }
})
