export class ForecastObj {
    constructor(maxtemp_f,mintemp_f,condition,date,pic){
        this._maxtemp_f=maxtemp_f;
        this._mintemp_f=mintemp_f;
        this._condition=condition;
        this._date=date;
        this._pic=pic;
    }

    //getters

    get maxtemp_f(){
        return this._maxtemp_f;
    }
    get mintemp_f(){
        return this._mintemp_f;
    }
    get condition(){
        return this._condition;
    }
    get date() {
        return this._date;
      }
      get pic() {
        return this._pic;
      }

    //setters
    set maxtemp_f(temp){
        this._maxtemp_f=temp;
    }
    set mintemp_f(tempp){
        this._mintemp_f=temp;
    }
    set condition(weather){
        this._condition=weather;
    }
    set date(newDate) {
        this._date = newDate;
      }
    set pic(newPic) {
        this._pic = newPic;
      }

}