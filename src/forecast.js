export class ForecastObj {
    constructor(maxtemp_c,maxtemp_f,mintemp_c,mintemp_f,condition,date){
        this._maxtemp_c=maxtemp_c;
        this._maxtemp_f=maxtemp_f;
        this._mintemp_c=mintemp_c;
        this._mintemp_f=mintemp_f;
        this._condition=condition;
        this._date=date;
    }

    //getters
    get maxtemp_c(){
        return this._maxtemp_c;
    }
    get maxtemp_f(){
        return this._maxtemp_f;
    }
    get mintemp_c(){
        return this._mintemp_c;
    }
    get mintemp_f(){
        return this._maxtemp_f;
    }
    get condition(){
        return this._condition;
    }
    get date() {
        return this._date;
      }

    //setters
    set maxtemp_c(temp){
        this._maxtemp_c=temp;
    }
    set maxtemp_f(temp){
        this._maxtemp_f=temp;
    }
    set mintemp_c(temp){
        this._mintemp_c=temp;
    }
    set mintemp_f(temp){
        this._mintemp_f=temp;
    }
    set condition(weather){
        this._condition=weather;
    }
    set date(newDate) {
        this._date = newDate;
      }

}