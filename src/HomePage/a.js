const community=(post)=>{
    if(post){
        let low=0;
        let str=post.substring(low);
        if(str.indexOf('#')!==-1)
        {
            let a=str.substring(str.indexOf('#'));
            let high=a.indexOf(" ")==-1?a.length:a.indexOf(" ");
            var b=a.substring(1,high);
            low=a.indexOf(" ");
        }
    }
    console.log(b);
}
community("hi #cse gh");