var app =new Vue({
    el:'#app',
    methods:{
        onClick:function(){
            console.log('点击成功！')
        },
        MouseEnter:function(){
            console.log('鼠标移入')
        },
        MouseOut:function(){
            console.log('鼠标移开！！！')
        },
        // Submitted:function(e){
        //     e.preventDefault()
        //     console.log('提交')
        // },
        Submitted:function(){
         
            console.log('提交')
        },
        OnKeyUp:function(){
            console.log('监听到键盘按回车键')
        }
    }
})