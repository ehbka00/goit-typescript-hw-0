/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays { 
  MD,
  TD,
  WD,
  THD,
  FR,
  STD,
  SND
}

function isWeekend(day: WeekDays): boolean {
  if (day === WeekDays.STD || day === WeekDays.SND) return true;

  return false;
}