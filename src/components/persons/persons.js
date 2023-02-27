import Api from '@/services/api'
export default {
  name: 'persons',
  components: {},
  props: [],

  data () {  
    return {
      persons:[],
      currData:[],
    }
  },
  computed: {

  },
  mounted () {
    this.apiServ = new Api();
    if(this.$route.query.person){
      let person = JSON.parse(this.$route.query.person);
      if(person){
        this.persons = JSON.parse(sessionStorage.getItem('persons'));
        for (let idx in this.persons){
          if(this.persons[idx].id.value == person.id.value){
            this.persons[idx] = person;
          }
        }
        this.$router.replace({'query': null});
      }
    }
  },
  methods: {
    getData(){
      this.apiServ.GetData().then(res=>{
        if(res && res.data){
          this.persons = res.data.results;
          this.currData = res.data.results;
          sessionStorage.setItem('persons',JSON.stringify(this.persons))
        }
      }).catch(err=>console.log(err))
    },

    filterByName(e){
      if(e.length > 3){
        this.persons = this.persons.filter((p)=>{
          let firstExist = (p.name.first).toLowerCase().includes(e.toLowerCase())
          let lastExist = (p.name.last).toLowerCase().includes(e.toLowerCase())
          let titletExist = (p.name.title).toLowerCase().includes(e.toLowerCase())
          return firstExist || lastExist || titletExist;
        })
      }
    },

    filterByCountry(e){
      if(e.length > 3){
        this.persons = this.persons.filter(p=>p.location.country.toLowerCase().includes(e.toLowerCase()))
      }
    },

    editPerson(p){
      this.$router.push({ name: 'editPersons',query:{person:JSON.stringify(p)}})
    },
    onClearFilter(){
      this.persons = this.currData;
    }

  }
}


