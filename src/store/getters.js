const getters = {
    sidebar: state => state.app.sidebar,
    token: state => state.user.token,
    isLoggedIn: state => !!state.user.token
  }
  export default getters