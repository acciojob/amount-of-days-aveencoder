function daysOfAYear(n){
  if((n%100!=0&&n%4==0)||(n%400==0))
    return 366;
  else{
    return 365;
  }
}

daysOfAYear(2032);

