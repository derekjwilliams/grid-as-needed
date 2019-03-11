import { observable, decorate } from "mobx";

class GridStore {
  grids = []
}

var store = window.store = new GridStore()

export default store

decorate(GridStore, {
  start: observable,
  filter: observable
})
