//let id=0;
const App = {
    data(){
        return {
            inputValue:'',
            // needDoList: [],
            completeList:[],
            // saveTodo:'',
            
           
        }
    },
    mounted() {
        if (localStorage.getItem('completeList')) {
          try {
            this.completeList = JSON.parse(localStorage.getItem('completeList'));
            // this.needDoList = JSON.parse(localStorage.getItem("needDoList"));
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
            this.todocheck.splice(ind,1);
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
        completeCheck(todo){
            if(todo.checked === false){
                this.completeList.push(todo)
                this.completeList = this.completeList.filter(item=> todo.id != item.id)
                // this makes is what makes the completed todos go to the done section
                this.saveTodo();
            }
        },
        deleteCompleteCheck(todo){
            this.completeList = this.completeList.filter(item=> todo.id != item.id)
            this.saveTodo();
        },
        saveTodo() {
            const parsed = JSON.stringify(this.completeList);
            localStorage.setItem('completeList', parsed);
        },

        
    }
}

Vue.createApp(App).mount('#app')