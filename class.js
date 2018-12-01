class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 2;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
           
        }
        return found;
       
    }

    mult() {
        var empty = random(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}




class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
       
    }

    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
           
        }
        return found;
       
    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 5) {

            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var norXotaker = new Xotaker(newX, newY)
            xotakerArr.push(norXotaker)
        }
    }
 
    move(){
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat(){
        var food = random(this.chooseCell(1))
        if (food){
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            for(var i in grassArr){
                if(grassArr[i].x==newX && grassArr[i].y==newY){
                    grassArr.splice(i,1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy+=3
        }
    }

    die(){
        if(this.energy<=0){
            matrix[this.y][this.x] = 0
            for(var i in xotakerArr){
                if(xotakerArr[i].x==this.x && xotakerArr[i].y==this.y){
                    xotakerArr.splice(i,1)
                }
            }
        }
    }
}

class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
        
    }

    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
           
        }
        return found;
       
    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty&& this.energy > 12) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var norGishatich = new Gishatich(newX, newY)
            gishatichArr.push(norGishatich)
           
            }
       
        
    }

    move(){
        var empty = random(this.chooseCell(0))
        this.energy-=2;
        if (empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat(){
        var food = random(this.chooseCell(2))
        if (food){
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for(var i in xotakerArr){
                if(xotakerArr[i].x==newX && xotakerArr[i].y==newY){
                    xotakerArr.splice(i,1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy+=2


        }
        var food1 = random(this.chooseCell(4));
        if (food1) {
            matrix[this.y][this.x] = 0;
            this.x = food1[0];
            this.y = food1[1];
            matrix[this.y][this.x] = 3;

            for (var i in vorsordArr) {
                if (vorsordArr[i].x == this.x && vorsordArr[i].y == this.y) {
                    vorsordArr.splice(i, 1)
                }
            }
        }


    }

    die(){
        if(this.energy<=0){
            matrix[this.y][this.x] = 0
            for(var i in gishatichArr){
                if(gishatichArr[i].x==this.x && gishatichArr[i].y==this.y){
                    gishatichArr.splice(i,1)
                }
            }
        }
    }
}
class Vorsord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.directions = [];
       
    }
    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
           
        }
        return found;
       
    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 15) {

            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var vorsordik = new Vorsord(newX, newY)
            vorsordArr.push(vorsordik)
        }
    }
 
    move(){
        var empty = random(this.chooseCell(0))
        this.energy-=2;
        if (empty){
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat(){
        var food = random(this.chooseCell(2))
        if (food){
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for(var i in xotakerArr){
                if(xotakerArr[i].x==newX && xotakerArr[i].y==newY){
                    xotakerArr.splice(i,1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy+=3
        }
        var food1 = random(this.chooseCell(3))
        if (food1){
            var newX = food1[0]
            var newY = food1[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for(var i in gishatichArr){
                if(gishatichArr[i].x==newX && gishatichArr[i].y==newY){
                    gishatichArr.splice(i,1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy+=3
        }
        
    }

    die(){
        if(this.energy<=0){
            matrix[this.y][this.x] = 0
            for(var i in vorsordArr){
                if(vorsordArr[i].x==this.x && vorsordArr[i].y==this.y){
                    vorsordArr.splice(i,1)
                }
            }
        }
    }
}


class Monster {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [];
        
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(ch) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        this.multiply++;
        this.getNewDirections();
        var vandak = random(this.chooseCell(0));
        if (vandak && this.multiply >= 20) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 5;
            this.energy--
            this.multiply = 0;
        }
    }
    eat() {
        
        var food1 = random(this.chooseCell(2));
        if (food1) {
            matrix[this.y][this.x] = 0;
            var newX = food1[0]
            var newY = food1[1]
            matrix[this.y][this.x] = 5;

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy+=2
        }
        var food2 = random(this.chooseCell(1));
        if (food2) {
            matrix[this.y][this.x] = 0;
            var newX = food2[0]
            var newY = food2[1]
            matrix[this.y][this.x] = 5;

            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy+=2
        }
    }
    mult() {
        this.multiply++;
        
        var vandak = random(this.chooseCell(0));
        
        if (vandak && this.multiply >= 30) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 5;
            this.energy--
            this.multiply = 0;
        }
    }
    die() {
        
        if(this.energy<=10){
            matrix[this.y][this.x] = 0
            for(var i in monsterArr){
                if(monsterArr[i].x==this.x && monsterArr[i].y==this.y){
                    monsterArr.splice(i,1)
                }
            }
        }
    }}