const age = 10;
const ageGroup;
if (age <= 1)
  {
    ageGroup = "Щенки";
  }
if(age>1 && age<=3)
  {
    ageGroup = "Молодые собаки";
  }
if(age<=7)
  {
    ageGroup = "Собаки средних лет";
  }
if(age > 7)
  {
    ageGroup = "Почтенные таксоны";
  }
console.log(ageGroup);
