<template>
    <transition name="fade">
        <div :style="tooltipStyle" v-show="show">
            <slot></slot>
        </div>
    </transition>
</template>
  
<script>
export default {
    props: {
        show: Boolean,
        top: String,
        left: String
    },
    computed: {
        tooltipStyle() {
            return {
                position: 'absolute',
                top: this.top,
                left: this.left,
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#333',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '5px',
                zIndex: 999,
                transition: 'opacity 0.5s ease'
            };
        }
    }
};
</script>
  
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
  