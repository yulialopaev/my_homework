let group = {
    title: 'Group 65-35',
    students: ['Valera', 'Alina', 'Vadim', 'Lena', 'Konstantin'],
    showList: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

group.showList();