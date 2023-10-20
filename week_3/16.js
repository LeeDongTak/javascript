var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            // 여기서의 this.fullname은 'Francis Ngannou'를 가리킨다 왜냐하면 
            // getFullname은 opponent에 종속되어 있고 this.fullname은 opponent.fullname이기
            // 때문이다
            return this.fullname;
        }
    },

    getName: function () {
        // 여기서의 this.fullname은 'John Jones'를 가리킨다 왜냐하면 
        // getName은 fighter에 종속되어 있고 this.fullname은 fighter에.fullname이기
        // 때문이다
        return this.fullname;
    },

    getFirstName: () => {
        // arrow function은 this를 바인딩 하지 않는다. function(){}으로 되어 있으면
        // this.fullname.split(' ')[0]은 John이지만 arrow function은 this가 바인딩 되지 않기
        // 때문에 상위에 있는 fullname인 Ciryl이 출력된다
        return this.fullname.split(' ')[0];
    },

    getLastName: (function () {
        return this.fullname.split(' ')[1];
    })()

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);


// 출력결과
// Not Francis Ngannou VS John Jones
// It is John Jones VS Ciryl Gane