module.exports = function (fname ,lname){
    this.fname = fname;
    this.lname = lname;
    this.obj = function(){
        return "full name: "+this.fname +" "+this.lname;
    }
}