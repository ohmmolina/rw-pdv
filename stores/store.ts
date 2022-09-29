import {defineStore} from 'pinia'

const state = ()=>({
  items: []
})
const getters = {}
const actions = {}

export const useSomeStore = defineStore('someStore',{
  state,
  getters,
  actions
})