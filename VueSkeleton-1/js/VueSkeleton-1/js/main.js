//let id=0;
const App = {
    data(){
        return {
            inputValue:'',
            completeList:[],
            
            
           
        }
    },
    mounted() {
        if (localStorage.getItem('completeList')) {
          try {
            this.completeList = JSON.parse(localStorage.getItem('completeList'));
          } catch(e) {
            localStorage.removeItem('completeList');
            
          }
        } 
    },
   
    methods: {
        addList(){
            if(this.inputValue){
                this.completeList.push({
                    title : this.inputValue,
                    
                    checked: false
                });
                this.inputValue = '';
                // this allows you to add to your list and counts it
                this.saveTodo();
                
            }
        },
        removetodo(ind){
            // completeList.value = completeList.filter((completeList) => != todo)
            this.completeList.splice(ind,1)
            // this allows you to remove your todos
            this.saveTodo();
            
        },
        doCheck(todo){
            if(todo.checked == true){
                this.completeList.push(todo)
                this.completeList=this.completeList.filter(item=>item.id !=todo.id)
                this.saveTodo();
            }
        },
       
        saveTodo() {
            const parsed = JSON.stringify(this.completeList);
            localStorage.setItem('completeList', parsed);
        },

        
    }
}

Vue.createApp(App).mount('#app')