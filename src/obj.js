export class WeatherObj {
    constructor(Currenttemp_f, Currenttemp_c, CurrentCondition, LocationName, LocationRegion, LocationCountry, feelslike_c, feelslike_f, humidity, wind_mph, wind_kph, vis_miles, vis_km,date,pic,today) {
        this._Currenttemp_f = Currenttemp_f;
        this._Currenttemp_c = Currenttemp_c;
        this._CurrentCondition = CurrentCondition;
        this._LocationName = LocationName;
        this._LocationRegion = LocationRegion;
        this._LocationCountry = LocationCountry;
        this._feelslike_c = feelslike_c;
        this._feelslike_f = feelslike_f;
        this._humidity = humidity;
        this._wind_mph = wind_mph;
        this._wind_kph = wind_kph;
        this._vis_miles = vis_miles;
        this._vis_km = vis_km;
        this._date=date;
        this._pic=pic;
        this._today=today;
        this._sevenDay =[]; 
      }

    // Getters
    get Currenttemp_f() {
        return this._Currenttemp_f;
      }
    
      get Currenttemp_c() {
        return this._Currenttemp_c;
      }
    
      get CurrentCondition() {
        return this._CurrentCondition;
      }
    
      get LocationName() {
        return this._LocationName;
      }
    
      get LocationRegion() {
        return this._LocationRegion;
      }
    
      get LocationCountry() {
        return this._LocationCountry;
      }
    
      get feelslike_c() {
        return this._feelslike_c;
      }
    
      get feelslike_f() {
        return this._feelslike_f;
      }
    
      get humidity() {
        return this._humidity;
      }
    
      get wind_mph() {
        return this._wind_mph;
      }
    
      get wind_kph() {
        return this._wind_kph;
      }
    
      get vis_miles() {
        return this._vis_miles;
      }
    
      get vis_km() {
        return this._vis_km;
      }
      get date() {
        return this._date;
      }
      get pic() {
        return this._pic;
      }
      get today(){
        return this._today;
      }
    
      // Setters
      set Currenttemp_f(temp) {
        this._Currenttemp_f = temp;
      }
    
      set Currenttemp_c(temp) {
        this._Currenttemp_c = temp;
      }
    
      set CurrentCondition(condition) {
        this._CurrentCondition = condition;
      }
    
      set LocationName(name) {
        this._LocationName = name;
      }
    
      set LocationRegion(region) {
        this._LocationRegion = region;
      }
    
      set LocationCountry(country) {
        this._LocationCountry = country;
      }
    
      set feelslike_c(temp) {
        this._feelslike_c = temp;
      }
    
      set feelslike_f(temp) {
        this._feelslike_f = temp;
      }
    
      set humidity(value) {
        this._humidity = value;
      }
    
      set wind_mph(speed) {
        this._wind_mph = speed;
      }
    
      set wind_kph(speed) {
        this._wind_kph = speed;
      }
    
      set vis_miles(distance) {
        this._vis_miles = distance;
      }
    
      set vis_km(distance) {
        this._vis_km = distance;
      }
      set date(newDate) {
        this._date = newDate;
      }
      set pic(newPic) {
        this._pic = newPic;
      }
      set today(newDay){
        this._today=newDay;
      }

    pushSevenday(item){
        this._sevenDay.push(item);
    }

}



  


  
  