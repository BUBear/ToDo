export function Calendar() 
{
    this.dayWeek = ["일","월","화","수","목","금","토"];
    this.monthDay = [31,28,31,30,31,30,31,31,30,31,30,31];
    this.isLeapYear = function(year) 
    {
        if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) 
        {
            return true;
        }
        return false;
    };
    this.leapYear = function(year) 
    {
        var count = 0;
        for (let i = 1; i < year; i++) 
        {
            if(this.isLeapYear(i))
            {
                count++;
            }
        }
        return count;
    };
    this.dayOfWeek = function(year,month,day) 
    {
        var dayCount = (year-1 * 365) + this.leapYear(year);
        if(this.isLeapYear(year)) 
        {
            dayCount += 1;
        }
        for (let i = 0; i < month-1; i++) 
        {
            dayCount += this.monthDay[i];
        }
        return (dayCount + day) % 7;
    };
    this.monthArray = function(year, month) {
        var startDay = this.dayOfWeek(year,month,1);
        var array = [];
        var dayCount = 1;
        for(let i =0;i<this.monthDay[startDay].length;i++)
        {
            array[i] = dayCount++;
        }
        return array;
    }
    this.monthCalenderArray = function(year,month) 
    {
        var startDay = this.dayOfWeek(year,month,1);
        var array = [];
        var dayCount = 1;
        var count = startDay;
        var row = (this.monthDay[month]+startDay)/7;
        for (let i = 0; i < row; i++)
        {
            array[i] = new Array(7);
              for (let j = 0; j < 7; j++) 
              {
                    if(count != 0) 
                    {
                        array[i][j] = "";
                        count--;
                    }
                    else
                    {
                        array[i][j] = dayCount;
                        if(this.monthDay[month-1] < dayCount) 
                        {
                            array[i][j] = "";
                        }
                        else
                        {
                            dayCount++;
                        }
                    }
              }
              if(this.monthDay[month-1] == dayCount) 
              {
                  break;
              }
        }
        return array;
    };
}