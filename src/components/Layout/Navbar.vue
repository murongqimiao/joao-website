<!--   顶部导航模板 author by murongqimiao@live.cn  -->
<template>
  <div class="Navbar_content">
    <!-- 侧边栏控制按钮 闭/合 -->
    <div class="side-control">
      <i :class="iconContent" @click="resizeSide"></i>
    </div>
    <!-- 退出登录组件 -->
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img src="" class="user-avatar"> -->
          <div class="user-avatar">新同学, 欢迎</div>
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <a class="jumpIcon" target="_blank" href="https://github.com/murongqimiao">
            <el-dropdown-item>
             github
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">logOut</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      iconContent: 'el-icon-arrow-left'
    }
  },
  created () {},
  methods: {
    logout () {
      window.localStorage.removeItem('User')
      this.$router.push('/login')
    },
    resizeSide () {
      let _isCollapse = false
      if (this.iconContent === 'el-icon-arrow-left') {
        this.iconContent = 'el-icon-arrow-right'
        _isCollapse = true
      } else {
        this.iconContent = 'el-icon-arrow-left'
        _isCollapse = false
      }
      this.$emit('setSide', _isCollapse)
    }
  }
}
</script>

<style lang="scss">
.Navbar_content {
    width: 100%;
    height:50px;
    overflow: hidden;

    .side-control {
      float: left;
      height: 50px;
      width: 30px;
      line-height: 50px;
      i {
        box-shadow: 1px 1px 2px black;
        cursor: pointer;
      }
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 14px;
      color: #5a5e66;
      vertical-align: text-bottom;
      float: right;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          // width: 40px;
          height: 50px;
          line-height: 50px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 20px;
          font-size: 12px;
        }
      }
    }
}
</style>
