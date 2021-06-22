const list1 = [
    { text: 'First item of list 1'},
    { text: 'Second item of list 1'},
    { text: 'Third item of list 1'},
    { text: 'Fourth item of list 1'},
];
const list2 = [
    { text: 'First item of list 2'},
    { text: 'Second item of list 2'},
    { text: 'Third item of list 2'},
    { text: 'Fourth item of list 2'},
];

const config = {
    el: '#TaskManager',
    data: {
        list1,
        list2
    },
    methods: {
        transferRight() {
            if (this.list1.length === 0) {
                return alert('This list does not have any item to transfer.')
            }
            let temp = this.list1.pop();
            this.list2.unshift(temp);
        },
        transferLeft() {
            if (this.list2.length === 0) {
                return alert('This list does not have any item to transfer.')
            }
            let temp = this.list2.pop();
            this.list1.unshift(temp);
        }
    }
}

let app = new Vue(config)