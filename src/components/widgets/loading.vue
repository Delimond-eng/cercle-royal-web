<template>
  <div>
    <transition name="loading">
      <div class="modal-mask1">
        <div class="modal-wrapper1">
          <div class="modal-container1">
            <img src="assets/images/spinner.gif" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style>
.modal-mask1 {
  position: fixed;
  z-index: 9998;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(77, 74, 74, 0);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper1 {
  display: table-cell;
  vertical-align: middle;
}

.modal-container1 {
  width: 120px;
  height: 120px;
  margin: 0px auto;
  padding: 0;
  transition: all 0.3s ease;
}

.modal-container1 img {
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.loading-enter {
  opacity: 0;
}

.loading-leave-active {
  opacity: 0;
}

.loading-enter .modal-container1,
.loading-leave-active .modal-container1 {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
