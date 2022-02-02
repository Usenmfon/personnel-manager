const storage = {
  getItems(key, temp = '[]') {
    return JSON.parse(localStorage.getItem(key) ?? temp)
  },

  setItem(key, data) {
    return localStorage.setItem(key, JSON.stringify(data))
  }

}


export { storage }