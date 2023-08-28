<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../assets/imgs/LOGO.png" alt="logo" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-symbols-outlined"> keyboard_double_arrow_right </span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-symbols-outlined">home</span>
        <span class="text">Home</span>
      </router-link>

      <router-link class="button" to="/about">
        <span class="material-symbols-outlined">visibility</span>
        <span class="text">About</span>
      </router-link>

      <router-link class="button" to="/team">
        <span class="material-symbols-outlined">group</span>
        <span class="text">Team</span>
      </router-link>

      <router-link class="button" to="/contact">
        <span class="material-symbols-outlined">email</span>
        <span class="text">Contact</span>
      </router-link>

      <router-link class="button" to="/settings">
        <span class="material-symbols-outlined">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

//點擊切換展開&閉合
const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;

  width: calc(2rem + 2rem);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);

  transition: 0.3s ease-out;

  .logo {
    //調整Logo位置
    margin-bottom: 1rem;
    img {
      width: 70px;
      margin-left: -1.2rem;
    }
  }
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    //展開後arrow按鈕位置改變
    position: relative;
    top: 0;
    transition: 0.3s ease-out;

    .menu-toggle {
      //arrow轉向時間
      transition: 0.3s ease-out;
      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--light);
        transition: 0.3s ease-out;
      }

      //鼠標懸停時右移的幅度
      &:hover {
        .material-symbols-outlined {
          color: var(--primary);
          transform: translateX(0.4rem);
        }
      }
    }
  }

  h3,
  .button .text {
    //展開前，Menu不顯示
    opacity: 0;
    transition: 0.3s ease-out;
  }
  //Menu改變樣式-較為不明顯
  h3 {
    color: var(--grey);
    font-size: 0.0875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.3s ease-out;
      .material-symbols-outlined {
        //圖標設置
        font-size: 2rem;
        color: var(--light);
        transition: 0.3s ease-out;
      }
      .text {
        font-size: 1.2rem;
        color: var(--light);
        transition: 0.3s ease-out;
      }
      &:hover,
      &.router-link-exact-active {
        //鼠標懸浮&路由該頁時
        background-color: var(--dark-alt);
        .material-symbols-outlined,
        .text {
          color: var(--primary);
        }
      }
      &.router-link-exact-active {
        //路由該頁時
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.is-expanded {
    //側欄展開寬度&arrow轉向
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      //展開後Menu才顯示
      opacity: 1;
    }
    .button {
      .material-symbols-outlined {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
