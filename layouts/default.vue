<template>
  <v-app :dark="setTheme">
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary secondary--text"
      class="hidden-xs-only"
    >
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2 img"
        contain
        :src="logo"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title> {{ $t('title') }}🕋 </v-toolbar-title>

      <v-btn text>
        <v-switch
          v-model="goDark"
          color="dark"
          :label="icon"
          class="mt-5"
        ></v-switch>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="secondary" dark v-bind="attrs" v-on="on">
            <v-icon class="mr-1"> mdi-translate </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item
              v-for="(item, index) in locales"
              :key="index"
              @click="changeLange(item.value)"
            >
              <v-list-item-title class="secondary--text">{{
                item.name
              }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <v-spacer />
      <v-btn text class="secondary--text" nuxt to="/">{{ $t('home') }}</v-btn>
      <v-btn text class="secondary--text" nuxt to="Morning">{{
        $t('morning')
      }}</v-btn>
      <v-btn text class="secondary--text" nuxt to="Night">{{
        $t('night')
      }}</v-btn>
      <v-btn text class="secondary--text" nuxt to="DeadPerson">{{
        $t('dp')
      }}</v-btn>
      <v-btn text class="secondary--text" nuxt to="DeadPeople">{{
        $t('dps')
      }}</v-btn>
      <v-btn
        icon
        class="secondary--text"
        nuxt
        to="https://github.com/ZTF666/Daily-Doaa-Prayers"
        target="_blank"
        ><v-icon>mdi-github</v-icon></v-btn
      >
    </v-app-bar>

    <!-- mobile app bar -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
      class="hidden-sm-and-up"
    >
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2 img"
        contain
        :src="logo"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title> {{ $t('title') }}🕋 </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <!-- <v-list-item> -->
          <v-list-item-content>
            <v-btn text>
              <v-switch
                v-model="goDark"
                color="secondary"
                :label="icon"
                class="mb-5"
              ></v-switch>
            </v-btn>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="secondary" dark v-bind="attrs" v-on="on">
                  <v-icon class="mr-1"> mdi-translate </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item
                    v-for="(item, index) in locales"
                    :key="index"
                    @click="changeLange(item.value)"
                  >
                    <v-list-item-title class="secondary--text">{{
                      item.name
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
            <!-- <v-spacer></v-spacer> -->
            <v-btn text class="secondary--text" nuxt to="/">{{
              $t('home')
            }}</v-btn>
            <v-btn text class="secondary--text" nuxt to="Morning">{{
              $t('morning')
            }}</v-btn>
            <v-btn text class="secondary--text" nuxt to="Night">{{
              $t('night')
            }}</v-btn>
            <v-btn text class="secondary--text" nuxt to="DeadPerson">{{
              $t('dp')
            }}</v-btn>
            <v-btn text class="secondary--text" nuxt to="DeadPeople">{{
              $t('dps')
            }}</v-btn>
            <v-btn
              icon
              class="secondary--text"
              nuxt
              to="https://github.com/ZTF666/Daily-Doaa-Prayers"
              target="_blank"
              ><v-icon>mdi-github</v-icon></v-btn
            >
          </v-list-item-content>

          <!-- </v-list-item> -->
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- end mobile app bar -->

    <v-main :class="BgCol">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app color="primary secondary--text">
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      <span>
        Made with ❤️ by
        <a
          href="https://ztfportfolio.web.app/"
          target="blank"
          class="red--text zztop"
        >
          <strong>ZTF</strong>
        </a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'Adhkar and Doaa',
        name: 'Adhkar and Doaa',
        content: 'Your daily Adhkar and Doaa',
      },
    ],
  },
  data() {
    return {
      selectedItem: 1,
      icon: '🌚',
      goDark: true,
      BgCol: 'bg',
      logo: '',
      clipped: false,
      fixed: true,
    }
  },
  computed: {
    ...mapGetters(['locales', 'locale']),
    setTheme() {
      if (this.goDark === true) {
        this.$vuetify.theme.dark = true
        this.icon = '🌚'
        this.BgCol = 'bg'
      } else {
        this.$vuetify.theme.dark = false
        this.icon = '🌞'
        this.BgCol = 'bgl'
      }
    },
  },

  methods: {
    ...mapMutations(['SET_LANG']),
    changeLange(value) {
      this.SET_LANG(value)
      this.$i18n.locale = value
    },
  },
}
</script>
<style lang="scss">
.img {
  border-radius: 100px;
}
.bg {
  background-color: #030000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'%3E%3Cstop offset='0' stop-color='%23030000'/%3E%3Cstop offset='1' stop-color='%230EFF32'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'%3E%3Cstop offset='0' stop-color='%231b0500'/%3E%3Cstop offset='1' stop-color='%2300f74e'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'%3E%3Cstop offset='0' stop-color='%23331400'/%3E%3Cstop offset='1' stop-color='%2300e06d'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'%3E%3Cstop offset='0' stop-color='%234c2c00'/%3E%3Cstop offset='1' stop-color='%2300ca84'/%3E%3C/linearGradient%3E%3ClinearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'%3E%3Cstop offset='0' stop-color='%23644e00'/%3E%3Cstop offset='1' stop-color='%2300b393'/%3E%3C/linearGradient%3E%3ClinearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'%3E%3Cstop offset='0' stop-color='%237c7900'/%3E%3Cstop offset='1' stop-color='%23009d9b'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'%3E%3Cstop offset='0' stop-color='%237b9400'/%3E%3Cstop offset='1' stop-color='%23007186'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'%3E%3Cstop offset='0' stop-color='%236dac00'/%3E%3Cstop offset='1' stop-color='%23004b70'/%3E%3C/linearGradient%3E%3ClinearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'%3E%3Cstop offset='0' stop-color='%2356c400'/%3E%3Cstop offset='1' stop-color='%23002d59'/%3E%3C/linearGradient%3E%3ClinearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'%3E%3Cstop offset='0' stop-color='%2335dd00'/%3E%3Cstop offset='1' stop-color='%23001743'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'%3E%3Cstop offset='0' stop-color='%230bf500'/%3E%3Cstop offset='1' stop-color='%2300072c'/%3E%3C/linearGradient%3E%3ClinearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'%3E%3Cstop offset='0' stop-color='%230EFF32'/%3E%3Cstop offset='1' stop-color='%23000016'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg %3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' x='100' width='1100' height='800'/%3E%3Crect fill='url(%23c)' x='200' width='1000' height='800'/%3E%3Crect fill='url(%23d)' x='300' width='900' height='800'/%3E%3Crect fill='url(%23e)' x='400' width='800' height='800'/%3E%3Crect fill='url(%23f)' x='500' width='700' height='800'/%3E%3Crect fill='url(%23g)' x='600' width='600' height='800'/%3E%3Crect fill='url(%23h)' x='700' width='500' height='800'/%3E%3Crect fill='url(%23i)' x='800' width='400' height='800'/%3E%3Crect fill='url(%23j)' x='900' width='300' height='800'/%3E%3Crect fill='url(%23k)' x='1000' width='200' height='800'/%3E%3Crect fill='url(%23l)' x='1100' width='100' height='800'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.bgl {
  background-color: #3e167f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%233E167F' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%233e2791' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%233c36a4' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%233645b6' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%232c53c9' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%231762DB' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.zztop {
  text-decoration: none;
}
</style>
