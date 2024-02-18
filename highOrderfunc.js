const r=[1, 2, 3,4];


const calculateArea= function(r)
{
    const area =[];
    for(let i=0; i<r.length; i++)
    {
        area.push(3.14*r[i]*r[i]);
    
    }

    return area;

};

console.log(calculateArea(r));
