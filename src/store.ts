import Vue from 'vue';
import Vuex, {StoreOptions, Store, Module }from 'vuex';
import { IAppState } from "@/types";
import app from './AppModule';
import speakers from './Speakers';


Vue.use(Vuex);


const options :  StoreOptions<IAppState> =  {
  state: app.AppState,
  strict: true,
  actions: app.actions,
  mutations: app.mutations,
  modules: {
    speakers
  }
}

export default new Vuex.Store(options);
