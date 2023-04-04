  let chart  =  new Morris.Line({
 
   element: 'line_chart',

   data: [
     { year: '2008', value: 5 },
     { year: '2009', value: 10 },
     { year: '2010', value: 5 },
     { year: '2011', value: 20 },
     { year: '2012', value: 6 }
   ],

   xkey: 'year',
   ykeys: ['value'],
   pointSize: 0,
   lineWidth: 1,
   lineColors: ['#e530d9'],
   resize: true,
   axes: true,
    grid: true,
  
  });
  
