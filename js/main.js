Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid"
  },
  locale: "pt_BR",
  dictionary: {
    pt_BR: { messages: locale.messages, attributes: locale.attributes }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    userInfo: {
      nome: "",
      telefone: "",
      email: ""
    },
    formValid: false
  },
  computed: {
    isFormDirty() {
        this.formValid = Object.keys(this.fields).every(key => this.fields[key].valid && this.fields[key].dirty);
      return this.formValid;
    }
  },
  methods: {
    Clear() {
      this.userInfo.nome = "";
      this.userInfo.telefone = "";
      this.userInfo.email = "";
    }
  }
});
