<template>
  <!-- 展開與否 -->
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <!-- LOGO位置 -->
    <div class="logo">
      <img src="../assets/imgs/LOGO.png" alt="logo" />
    </div>
    <!-- 展開按鍵位置 -->
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-symbols-outlined"> keyboard_double_arrow_right </span>
      </button>
    </div>
    <!-- MENU位置 -->
    <h3>Menu</h3>
    <div class="menu">
      <!-- 列表1: HOME -->
      <div @click="toggleHomeSubMenu" class="button">
        <span class="material-symbols-outlined">home</span>
        <span class="text">Home</span>
      </div>
      <!-- 新增：用 v-if 控制子目錄的顯示 -->
      <div v-if="isHomeExpanded" class="submenu">
        <router-link class="button sub-button" to="/">
          <span class="sub-item">Sub 1</span>
        </router-link>
        <router-link class="button sub-button" to="/1">
          <span class="sub-item">Sub 2</span>
        </router-link>
      </div>

      <!-- 列表2: About -->
      <div @click="toggleAboutSubMenu" class="button">
        <span class="material-symbols-outlined">visibility</span>
        <span class="text">About</span>
      </div>
      <div v-if="isAboutExpanded" class="submenu">
        <router-link class="button sub-button" to="/about">
          <span class="sub-item">Sub 1</span>
        </router-link>
        <router-link class="button sub-button" to="/2">
          <span class="sub-item">Sub 2</span>
        </router-link>
      </div>

      <!-- 列表3: Team -->
      <div @click="toggleTeamSubMenu" class="button">
        <span class="material-symbols-outlined">group</span>
        <span class="text">Team</span>
      </div>
      <div v-if="isTeamExpanded" class="submenu">
        <!-- Sub-sections for Team -->
        <router-link class="button sub-button" to="/team">
          <span class="sub-item">Sub 1</span>
        </router-link>
        <router-link class="button sub-button" to="/3">
          <span class="sub-item">Sub 2</span>
        </router-link>
      </div>

      <!-- 列表4: Contact -->
      <div @click="toggleContactSubMenu" class="button">
        <!-- 新增 -->
        <span class="material-symbols-outlined">email</span>
        <span class="text">Contact</span>
      </div>
      <div v-if="isContactExpanded" class="submenu">
        <!-- Sub-sections for Contact -->
        <router-link class="button sub-button" to="/contact">
          <span class="sub-item">Sub 1</span>
        </router-link>
        <router-link class="button sub-button" to="/4">
          <span class="sub-item">Sub 2</span>
        </router-link>
      </div>

      <!-- 列表5: Settings -->
      <div @click="toggleSettingsSubMenu" class="button">
        <span class="material-symbols-outlined">settings</span>
        <span class="text">Settings</span>
      </div>
      <div v-if="isSettingsExpanded" class="submenu">
        <!-- Sub-sections for Settings -->
        <router-link class="button sub-button" to="/settings">
          <span class="sub-item">Sub 1</span>
        </router-link>
        <router-link class="button sub-button" to="/5">
          <span class="sub-item">Sub 2</span>
        </router-link>
      </div>
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

  // 新增：如果側邊欄被關閉，則收縮所有子目錄
  if (!is_expanded.value) {
    isHomeExpanded.value = false;
    isAboutExpanded.value = false;
    isTeamExpanded.value = false;
    isContactExpanded.value = false;
    isSettingsExpanded.value = false;
  }
};

// 用於控制 Home 子目錄的反應性變量和函數
const isHomeExpanded = ref(false);
const toggleHomeSubMenu = () => {
  isHomeExpanded.value = !isHomeExpanded.value;
};

// 用於控制 About 子目錄的反應性變量和函數
const isAboutExpanded = ref(false);
const toggleAboutSubMenu = () => {
  isAboutExpanded.value = !isAboutExpanded.value;
};

// 用於控制 Team 子目錄的反應性變量和函數
const isTeamExpanded = ref(false);
const toggleTeamSubMenu = () => {
  isTeamExpanded.value = !isTeamExpanded.value;
};

// 用於控制 Contact 子目錄的反應性變量和函數
const isContactExpanded = ref(false);
const toggleContactSubMenu = () => {
  isContactExpanded.value = !isContactExpanded.value;
};

// 用於控制 Settings 子目錄的反應性變量和函數
const isSettingsExpanded = ref(false);
const toggleSettingsSubMenu = () => {
  isSettingsExpanded.value = !isSettingsExpanded.value;
};
</script>

<style lang="scss" scoped>
// 用於標記子目錄的樣式
.button {
  &.sub-button {
    padding-left: 3rem; // 增加左邊距來表示它是一個子目錄
  }
}

// 修改子目錄樣式
.submenu .sub-item{
  padding-left: 50px;
  font-weight: bold;
  color: var(--light);
}

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
