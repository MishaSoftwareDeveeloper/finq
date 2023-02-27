
export default {
  name: 'edit-person',
  components: {},
  props: [
    
  ],
  data () {
    return {
      person:{
        dob:{},
        location:{street:{}},
        name:{}
      }
    }
  },
 
  computed: {

  },
  mounted () {
    this.person = JSON.parse(this.$route.query.person);
  },
  methods: {
    back(){
      this.$router.push({ name: 'persons',query:{person:JSON.stringify(this.person)}})
    }
  }
}


