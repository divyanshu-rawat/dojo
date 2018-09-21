
import Vue from 'vue'
import Vuex from 'vuex'

import primary from "./data_set/primary"
import secondary from "./data_set/secondary"

Vue.use(Vuex)
export const store = new Vuex.Store({

	state:{

		primary  : primary,
		secondary : secondary 

	},

	actions:{

	},

	mutations:{

	}
})