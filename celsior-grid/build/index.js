const CelsiorGrid=(  rows,
columns,
pagination,
paginationPageSize)=>{
    return (

            JSON.stringify(rows)
    );
}

const isExist=(arr,str)=>{
    return arr.includes(str);
}
export {CelsiorGrid,isExist};
